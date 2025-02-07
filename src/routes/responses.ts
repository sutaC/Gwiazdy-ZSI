import * as upload from "$/data/upload";
import * as db from "$/data/db";
import { hashString, authenticateUser, validatePassword } from "$/routes/auth";
import { addLog, clearLogs } from "$/data/log";
import { randomUUID } from "crypto";
import { directory } from "$/app";
import { readFile } from "fs/promises";
import type { Response } from "express";
import type { Request } from "$/routes/auth";

// Responses
export const getRoot = (req: Request, res: Response) => {
    const authorized = req.authorized ?? false;
    let tagid: number | undefined;
    if (typeof req.query.tagid === "string") {
        tagid = Number.parseInt(req.query.tagid);
        if (!Number.isSafeInteger(tagid)) tagid = undefined;
    } else {
        tagid = undefined;
    }
    res.render("./layouts/root.ejs", { authorized, tagid });
};

export const getStatistics = async (req: Request, res: Response) => {
    let ranks, imagesAmmount, imagesWithTagsAmmount;
    ranks = await db.getImageAmmountOnTeachers();
    imagesAmmount = await db.getImageAmmount();
    imagesWithTagsAmmount = await db.getImageWithTagAmmount();
    res.render("./layouts/statistics.ejs", {
        ranks,
        imagesAmmount,
        imagesWithTagsAmmount,
    });
};

export const getAbout = async (req: Request, res: Response): Promise<void> => {
    let credits = {
        administrators: [],
        contributors: [],
    };
    try {
        const data = await readFile(`${directory}/src/data/credits.json`);
        const json = JSON.parse(data.toString());
        if (json) credits = json;
    } catch (error) {
        addLog(`Failed to read credits - ${error}`);
    }
    return res.render("./layouts/about.ejs", { credits });
};

// --- Admin panel ---
export const getLogin = async (req: Request, res: Response) => {
    res.render("./layouts/login.ejs");
};

export const postLogin = async (req: Request, res: Response) => {
    const { login, password } = req.body;
    const error = await authenticateUser(login, password);
    if (error) {
        res.send(error);
        return;
    }
    const newToken = hashString(randomUUID());
    await db.updateUserToken(login, newToken);
    res.cookie("token", newToken, {
        // 3h
        maxAge: 10_800_000,
        signed: true,
        secure: true,
    });
    res.append("HX-Redirect", "/admin").sendStatus(303);
};

export const getAdmin = (req: Request, res: Response) => {
    res.render("./layouts/admin.ejs", { user: req.authorized });
};

export const getLogout = async (req: Request, res: Response) => {
    const { token } = req.signedCookies;
    const login = await db.getUserByToken(token);
    if (!login) {
        return res
            .status(400)
            .render("./layouts/error.ejs", { error: { code: 400 } });
    }
    await db.updateUserToken(login, "");
    res.clearCookie("token", { secure: true, signed: true });
    res.append("HX-Redirect", "/").sendStatus(303);
};

export const getReset = (req: Request, res: Response) => {
    res.render("./layouts/reset.ejs");
};

export const postReset = async (req: Request, res: Response) => {
    const { newPassword, repeatPassword } = req.body;
    if (!String(newPassword) || !String(repeatPassword)) {
        return res.send("Hasło jest wymagane");
    }
    if (newPassword !== repeatPassword) {
        return res.send("Hasło i powtórzenie hasła muszą być takie same");
    }
    const error = validatePassword(newPassword);
    if (error) {
        return res.send(error);
    }
    const { token } = req.signedCookies;
    const login = await db.getUserByToken(token);
    if (!login) {
        return res.send("Nie można znaleźć Twojego konta");
    }
    await db.updateUserPassword(login, hashString(newPassword));
    res.send(
        '<span style="color: green;">Zmiana hasła przebiegła pomyślnie!</span>'
    );
};

export const getLog = (req: Request, res: Response) => {
    res.sendFile("errors.log", { root: directory });
};

export const deleteLog = (req: Request, res: Response) => {
    clearLogs();
    res.status(200).send("Cleard logs");
};

export const getUsers = async (req: Request, res: Response) => {
    let users;
    users = await db.getUsers();
    res.render("./layouts/users.ejs", { users });
};

export const postAddAdminUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { login, password, repeatPassword } = req.body;
    if (!login || !password || !repeatPassword) {
        res.send("Brak wymaganych danych");
        return;
    }
    if (password !== repeatPassword) {
        res.send("Hasło i powtórzenie hasła muszą być takie same");
        return;
    }
    const validationError = validatePassword(password);
    if (validationError) {
        res.send(validationError);
        return;
    }
    let user;
    try {
        user = await db.getUser(login);
    } catch (error) {
        addLog(error as string);
        res.send("Nie udało się dodać użytkownika...");
        return;
    }
    if (user) {
        res.send("Użytkownik o takim loginie istnieje");
        return;
    }
    const hashedPassword = hashString(password);
    try {
        await db.addUser(login, hashedPassword);
    } catch (error) {
        addLog(error as string);
        res.send("Nie udało się dodać użytkownika...");
        return;
    }
    res.send(`<p style="color: green">Dodano użytkownika ${login}!`);
    return;
};

export const deleteDeleteUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { login } = req.params;
    if (!login) {
        res.status(400).send("Brak loginu");
        return;
    }
    if (login === "admin") {
        res.status(400).send("Nie można usunąć użytkownika admin");
        return;
    }
    try {
        db.deleteUser(login);
    } catch (error) {
        addLog(error as string);
        res.status(400).send("Nie udało się usunąć użytkownika");
        return;
    }
    res.send(`<p style="color: red;">Usunięto użytkownika ${login}</p>`);
    return;
};

// --- Images ---
export const getImg = async (req: Request, res: Response) => {
    const photoid = Number.parseInt(req.params.photoid);
    if (!Number.isSafeInteger(photoid))
        return res
            .status(404)
            .render("./layouts/error.ejs", { error: { code: 404 } });
    const photo = await db.getImgById(photoid);
    if (photo === null)
        return res
            .status(404)
            .render("./layouts/error.ejs", { error: { code: 404 } });
    const tags = await db.getSelectedTeachers(photo.id);
    const nextImgId = await db.getNextImg(photo.id);
    const prevImgId = await db.getPreviousImg(photo.id);
    res.setHeader("HX-Redirect", `/img/${photo.id}`);
    res.render("./layouts/photos.ejs", {
        photo,
        tags,
        nextImgId,
        prevImgId,
        authorized: req.authorized,
    });
};

export const getImgUpdate = async (req: Request, res: Response) => {
    const { photoid } = req.params;
    if (!photoid) {
        return res
            .status(404)
            .render("./layouts/error.ejs", { error: { code: 404 } });
    }
    let photo;
    try {
        photo = await db.getImgById(Number(photoid));
    } catch (error) {
        addLog(error as string);
        return res
            .status(404)
            .render("./layouts/error.ejs", { error: { code: 404 } });
    }
    if (!photo) {
        return res
            .status(400)
            .render("./layouts/error.ejs", { error: { code: 400 } });
    }
    res.render("./layouts/editImage.ejs", {
        photo,
    });
};

export const deleteImageDelete = async (req: Request, res: Response) => {
    const { photoid } = req.params;
    if (!photoid) {
        return res.send("Brak wymaganych parametrów");
    }
    let photo;
    try {
        photo = await db.getImgById(Number(photoid));
    } catch (error) {
        addLog(error as string);
        return res.send("Nie można znaleźć zdjęcia do usunięcia");
    }
    if (!photo) {
        return res.send("Nie można znaleźć zdjęcia do usunięcia");
    }
    try {
        if (photo.local) {
            upload.deleteImage(photo.local);
        }
        await db.deleteImage(Number(photoid));
    } catch (error) {
        addLog(error as string);
        return res.send("Nie udało się usunąć zdjęcia");
    }
    res.send('<span style="color: green;">Usunięto zdjęcie!</span>');
};

export const postImgUpdate = async (req: Request, res: Response) => {
    const { photoid } = req.params;
    const { src, local } = req.body;
    if (photoid == undefined) {
        return res.send("Brak wymaganych parametrów");
    }
    try {
        await db.updateImg(Number(photoid), src ?? "", local ?? "");
    } catch (error) {
        addLog(error as string);
        return res.send("Nie udało się zaktualizować zdjęcia");
    }
    res.send('<span style="color: green;">Zaktualizowano zdjęcie!</span>');
};

export const getRandomImg = async (req: Request, res: Response) => {
    const photoid = await db.getRandomImg();
    if (!photoid) {
        return res
            .status(404)
            .render("./layouts/error.ejs", { error: { code: 404 } });
    }
    res.redirect(`/img/${photoid}`);
};

export const getAddImg = (req: Request, res: Response) => {
    res.render("./layouts/addImage.ejs");
};

export const postApiAddImg = async (req: Request, res: Response) => {
    const { imgUrl } = req.body as { imgUrl: string };
    const [imgFile] = req.files as Express.Multer.File[];
    if (!imgUrl && !imgFile) {
        return res.send("Należy podać adres URL zdjęcia lub plik");
    }
    let local;
    if (imgFile) {
        try {
            local = upload.uploadImage(imgFile);
        } catch (error) {
            addLog(error as string);
            return res.send("Nie udało się zapisać pliku");
        }
    }
    let photoid;
    try {
        photoid = await db.addImg(imgUrl, local);
    } catch (error) {
        addLog(error as string);
        return res.send("Nie udało się zapisać zdjęcia");
    }
    res.render("./components/addImgAproval.ejs", { photoid });
};

// --- Tags ---
export const getTags = async (req: Request, res: Response) => {
    const tags = await db.getTags();
    return res.render("./layouts/tags.ejs", { tags });
};

export const patchUpdateInTags = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!id || !name) {
        return res.sendStatus(400);
    }
    await db.updateInTags(Number(id), name);
    return res.render("./components/editTag.ejs", {
        tag: { id, name },
        highlight: true,
    });
};

export const deleteDeleteFromTags = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;
    if (!id) {
        res.sendStatus(400);
        return;
    }
    await db.deleteFromTags(Number(id));
    res.send("");
    return;
};

export const putAddToTags = async (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) {
        return res.sendStatus(400);
    }
    const id = await db.addToTags(name);
    return res.render("./components/editTag.ejs", {
        tag: { id, name },
        highlight: true,
    });
};

export const putImgTag = async (req: Request, res: Response) => {
    const { photoid, tagid } = req.params;
    const tag = await db.addTag(Number(photoid), Number(tagid));
    if (!tag) {
        return res.sendStatus(400);
    }
    res.render("./components/tag.ejs", {
        tag,
        photoid,
        checked: true,
        authorized: req.authorized,
    });
};

export const deleteImgTag = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { photoid, tagid } = req.params;
    await db.deleteTag(Number(photoid), Number(tagid));
    res.send("");
    return;
};

export const getImgTag = async (req: Request, res: Response) => {
    const { prompt } = req.query as { prompt: string };
    const { photoid } = req.params as { photoid: string };
    if (!prompt || !prompt.trim()) {
        return res.send("");
    }
    const tags = await db.searchUnselectedTeachers(Number(photoid), prompt);
    if (!tags) {
        return res.sendStatus(400);
    }
    res.render("./components/taglist.ejs", {
        tags,
        photoid,
        checked: false,
        authorized: req.authorized,
    });
};

export const getTag = async (req: Request, res: Response) => {
    const { prompt } = req.query;
    if (!prompt) {
        return res.send("");
    }
    const tagtabs = await db.searchTeachers(String(prompt));
    if (!tagtabs) {
        return res.sendStatus(400);
    }
    res.render("./components/tagtablist.ejs", { tagtabs });
};

export const getImageTaglist = async (req: Request, res: Response) => {
    const { tagid } = req.params;
    let { list } = req.query as { list: number | undefined };
    list = list ?? 1;
    if (list < 1) {
        list = 1;
    }
    if (!tagid) {
        return res.sendStatus(400);
    }
    const imagetabs = await db.getImgsByTagId(Number(tagid), list);
    if (imagetabs.length === 0) {
        return res.send(
            '<small class="light">Nie znaleziono więcej zdjęć...</small>'
        );
    }
    res.render("./components/imagetablist.ejs", { imagetabs, tagid, list });
};
