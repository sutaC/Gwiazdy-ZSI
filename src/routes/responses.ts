import path from "path";
import * as upload from "$/data/upload";
import * as db from "$/data/db";
import { hashString, authenticateUser, validatePassword } from "$/routes/auth";
import Logger from "$/data/Logger";
import { randomUUID } from "crypto";
import { directory } from "$/app";
import { readFile, access } from "fs/promises";
import type { Response } from "express";
import type { Request } from "$/routes/auth";

// Responses
export const getRoot = (req: Request, res: Response): void => {
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

export const getStatistics = async (
    req: Request,
    res: Response
): Promise<void> => {
    const [ranks, imagesAmmount, imagesWithTagsAmmount] = await Promise.all([
        db.getImageAmmountOnTeachers(),
        db.getImageAmmount(),
        db.getImageWithTagAmmount(),
    ]);
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
    const data = await readFile(`${directory}/src/data/credits.json`);
    const json = JSON.parse(data.toString());
    if (json) credits = json;
    res.render("./layouts/about.ejs", { credits });
};

// --- Admin panel ---
export const getLogin = async (req: Request, res: Response): Promise<void> => {
    res.render("./layouts/login.ejs");
};

export const postLogin = async (req: Request, res: Response): Promise<void> => {
    const { login, password } = req.body;
    const error = await authenticateUser(login, password);
    if (error) {
        res.send(error);
        await Logger.info(`Failed login attempt for '${login}'`);
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
    await Logger.info(`Login as '${login}'`);
};

export const getAdmin = (req: Request, res: Response): void => {
    res.render("./layouts/admin.ejs", { user: req.authorized });
};

export const getLogout = async (req: Request, res: Response): Promise<void> => {
    const { token } = req.signedCookies;
    const login = await db.getUserByToken(token);
    if (!login) {
        res.status(400).render("./layouts/error.ejs", { error: { code: 400 } });
        return;
    }
    await db.updateUserToken(login, "");
    res.clearCookie("token", { secure: true, signed: true });
    res.append("HX-Redirect", "/").sendStatus(303);
};

export const getReset = (req: Request, res: Response): void => {
    res.render("./layouts/reset.ejs");
};

export const postReset = async (req: Request, res: Response): Promise<void> => {
    const { newPassword, repeatPassword } = req.body;
    if (!String(newPassword) || !String(repeatPassword)) {
        res.send("Hasło jest wymagane");
        return;
    }
    if (newPassword !== repeatPassword) {
        res.send("Hasło i powtórzenie hasła muszą być takie same");
        return;
    }
    const error = validatePassword(newPassword);
    if (error) {
        res.send(error);
        return;
    }
    const { token } = req.signedCookies;
    const login = await db.getUserByToken(token);
    if (!login) {
        res.send("Nie można znaleźć twojego konta");
        return;
    }
    await db.updateUserPassword(login, hashString(newPassword));
    res.send(
        '<span style="color: green;">Zmiana hasła przebiegła pomyślnie!</span>'
    );
};

export const getLogs = async (req: Request, res: Response): Promise<void> => {
    // Sends raw file
    if (req.query.type === "raw") {
        try {
            await access(path.join(directory, Logger.LOGFILE));
        } catch (err) {
            await Logger.error(`Could not open server logs:\n${err}`);
            res.send("");
            return;
        }
        res.sendFile(Logger.LOGFILE, { root: directory });
        return;
    }
    // Load logs
    let logs: string = "";
    try {
        logs = (
            await readFile(path.join(directory, Logger.LOGFILE))
        ).toString();
    } catch (err) {
        await Logger.error(`Could not open server logs: ${err}`);
        logs = "";
    }
    // Sends component
    if (req.query.type === "html") {
        res.render("./components/logElements.ejs", { logs });
        return;
    }
    // Sends page
    res.render("./layouts/logs.ejs", { logs });
};

export const deleteLogs = async (
    req: Request,
    res: Response
): Promise<void> => {
    await Logger.clear();
    await Logger.info("Cleared logs");
    let logs: string = "";
    try {
        logs = (
            await readFile(path.join(directory, Logger.LOGFILE))
        ).toString();
    } catch (err) {
        await Logger.error(`Could not open server logs: ${err}`);
        logs = "";
    }
    res.render("./components/logElements.ejs", { logs });
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await db.getUsers();
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
        await Logger.error(error as string);
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
        await Logger.error(error as string);
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
        await Logger.error(error as string);
        res.status(400).send("Nie udało się usunąć użytkownika");
        return;
    }
    res.send(`<p style="color: red;">Usunięto użytkownika ${login}</p>`);
};

// --- Images ---
export const getImg = async (req: Request, res: Response): Promise<void> => {
    const photoid = Number.parseInt(req.params.photoid);
    if (!Number.isSafeInteger(photoid)) {
        res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
        return;
    }
    const photo = await db.getImgById(photoid);
    if (photo === null) {
        res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
        return;
    }
    const [tags, nextImgId, prevImgId] = await Promise.all([
        db.getSelectedTeachers(photo.id),
        db.getNextImg(photo.id),
        db.getPreviousImg(photo.id),
    ]);
    res.setHeader("HX-Redirect", `/img/${photo.id}`);
    res.render("./layouts/photos.ejs", {
        photo,
        tags,
        nextImgId,
        prevImgId,
        authorized: req.authorized,
    });
};

export const getImgUpdate = async (
    req: Request,
    res: Response
): Promise<void> => {
    const photoid = Number.parseInt(req.params.photoid);
    if (!Number.isSafeInteger(photoid)) {
        res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
        return;
    }
    const photo = await db.getImgById(photoid);
    if (photo === null) {
        res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
        return;
    }
    const [nextImgId, prevImgId] = await Promise.all([
        db.getNextImg(photo.id),
        db.getPreviousImg(photo.id),
    ]);
    res.render("./layouts/editImage.ejs", {
        photo,
        prevImgId,
        nextImgId,
    });
};

export const deleteImageDelete = async (
    req: Request,
    res: Response
): Promise<void> => {
    const photoid = Number.parseInt(req.params.photoid);
    if (!Number.isSafeInteger(photoid)) {
        res.send("Nieprawidłowe id");
        return;
    }
    const photo = await db.getImgById(photoid);
    if (photo === null) {
        res.send("Nie można znaleźć zdjęcia do usunięcia");
        return;
    }
    try {
        if (photo.local) {
            upload.deleteImage(photo.local);
        }
        await db.deleteImage(photoid);
    } catch (error) {
        await Logger.error(error as string);
        res.send("Nie udało się usunąć zdjęcia");
        return;
    }
    res.send('<span style="color: green;">Usunięto zdjęcie!</span>');
};

export const postImgUpdate = async (
    req: Request,
    res: Response
): Promise<void> => {
    const photoid = Number.parseInt(req.params.photoid);
    const { src, local } = req.body;
    if (!Number.isSafeInteger(photoid)) {
        res.send("Brak wymaganych parametrów");
        return;
    }
    try {
        await db.updateImg(photoid, src ?? "", local ?? "");
    } catch (error) {
        await Logger.error(error as string);
        res.send("Nie udało się zaktualizować zdjęcia");
        return;
    }
    res.send('<span style="color: green;">Zaktualizowano zdjęcie!</span>');
};

export const getRandomImg = async (
    req: Request,
    res: Response
): Promise<void> => {
    const photoid = await db.getRandomImg();
    if (photoid === null) {
        res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
        return;
    }
    res.redirect(`/img/${photoid}`);
};

export const getAddImg = (req: Request, res: Response): void => {
    res.render("./layouts/addImage.ejs");
};

export const postApiAddImg = async (
    req: Request,
    res: Response
): Promise<void> => {
    const imgUrl = req.body.imgUrl as string | undefined;
    const [imgFile] = req.files as Express.Multer.File[] | undefined[];
    if (!imgUrl && !imgFile) {
        res.send("Należy podać adres URL zdjęcia lub plik");
        return;
    }
    let local: string | undefined = undefined;
    if (imgFile) {
        try {
            local = upload.uploadImage(imgFile);
        } catch (error) {
            await Logger.error(error as string);
            res.send("Nie udało się zapisać pliku");
            return;
        }
    }
    if (local === undefined) {
        res.send("Nie udało się zapisać pliku");
        return;
    }
    let photoid: number | null;
    try {
        photoid = await db.addImg(imgUrl, local);
    } catch (error) {
        await Logger.error(error as string);
        res.send("Nie udało się zapisać zdjęcia");
        return;
    }
    if (photoid === null) {
        res.send("Nie udało się zapisać zdjęcia");
        return;
    }
    res.render("./components/addImgAproval.ejs", { photoid });
};

// --- Tags ---
export const getTags = async (req: Request, res: Response): Promise<void> => {
    const tags = await db.getTags();
    return res.render("./layouts/tags.ejs", { tags });
};

export const patchUpdateInTags = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number.parseInt(req.params.id);
    const name: string | undefined = req.body.name;
    if (!Number.isSafeInteger(id) || !name) {
        res.sendStatus(400);
        return;
    }
    await db.updateInTags(id, name);
    res.render("./components/editTag.ejs", {
        tag: { id, name },
        highlight: true,
    });
};

export const deleteDeleteFromTags = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number.parseInt(req.params.id);
    if (!Number.isSafeInteger(id)) {
        res.sendStatus(400);
        return;
    }
    await db.deleteFromTags(id);
    res.send("");
    return;
};

export const putAddToTags = async (
    req: Request,
    res: Response
): Promise<void> => {
    const name: string | undefined = req.body.name;
    if (!name) {
        res.sendStatus(400);
        return;
    }
    const id = await db.addToTags(name);
    res.render("./components/editTag.ejs", {
        tag: { id, name },
        highlight: true,
    });
};

export const putImgTag = async (req: Request, res: Response): Promise<void> => {
    const photoid = Number.parseInt(req.params.photoid);
    const tagid = Number.parseInt(req.params.tagid);
    if (!Number.isSafeInteger(photoid) || !Number.isSafeInteger(tagid)) {
        res.sendStatus(400);
        return;
    }
    const tag = await db.addTag(photoid, tagid);
    if (tag === null) {
        res.sendStatus(400);
        return;
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
    const photoid = Number.parseInt(req.params.photoid);
    const tagid = Number.parseInt(req.params.tagid);
    if (!Number.isSafeInteger(photoid) || !Number.isSafeInteger(tagid)) {
        res.sendStatus(400);
        return;
    }
    await db.deleteTag(photoid, tagid);
    res.send("");
};

export const getImgTag = async (req: Request, res: Response): Promise<void> => {
    const prompt = req.query.prompt;
    const photoid = Number.parseInt(req.params.photoid);
    if (!Number.isSafeInteger(photoid)) {
        res.sendStatus(400);
        return;
    }
    if (typeof prompt !== "string" || prompt.trim().length === 0) {
        res.send("");
        return;
    }
    const tags = await db.searchUnselectedTeachers(photoid, prompt);
    res.render("./components/taglist.ejs", {
        tags,
        photoid,
        checked: false,
        authorized: req.authorized,
    });
};

export const getTag = async (req: Request, res: Response): Promise<void> => {
    const prompt = req.query.prompt;
    if (typeof prompt !== "string" || prompt.trim().length === 0) {
        res.send("");
        return;
    }
    const tagtabs = await db.searchTeachers(prompt);
    res.render("./components/tagtablist.ejs", { tagtabs });
};

export const getImageTaglist = async (
    req: Request,
    res: Response
): Promise<void> => {
    const tagid = Number.parseInt(req.params.tagid);
    if (!Number.isSafeInteger(tagid)) {
        res.sendStatus(400);
        return;
    }
    let list = 1;
    if (typeof req.query.list === "string") {
        list = Number.parseInt(req.query.list);
        if (!Number.isSafeInteger(list)) list = 1;
    }
    if (list < 1) {
        list = 1;
    }
    const imagetabs = await db.getImgsByTagId(tagid, list);
    if (imagetabs.length === 0) {
        res.send('<small class="light">Nie znaleziono więcej zdjęć...</small>');
        return;
    }
    res.render("./components/imagetablist.ejs", { imagetabs, tagid, list });
};
