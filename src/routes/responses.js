import { randomUUID } from "crypto";
import * as db from "../data/db.js";
import * as upload from "../data/upload.js";
import { hashString, authenticateUser, validatePassword } from "./auth.js";
import { addLog, clearLogs } from "../data/log.js";
import { directory } from "../../app.js";

// Responses
export const getRoot = (req, res) => {
	const authorized = req.authorized ?? false;

	res.render("./layouts/root.ejs", { authorized });
};

// --- Admin panel ---
export const getLogin = async (req, res) => {
	res.render("./layouts/login.ejs");
};

export const postLogin = async (req, res) => {
	const { login, password } = req.body;

	const error = await authenticateUser(login, password);

	if (error) {
		return res.send(error);
	}

	const newToken = hashString(randomUUID());

	try {
		await db.updateUserToken(login, newToken);
	} catch (error) {
		addLog(error);
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	res.cookie("token", newToken, {
		maxAge: 36000000,
		signed: true,
		secure: true,
	});

	res.status(303).send('<script>window.location.replace("/admin")</script>');
};

export const getAdmin = (req, res) => {
	res.render("./layouts/admin.ejs");
};

export const getLogout = async (req, res) => {
	const { token } = req.signedCookies;

	let login;
	try {
		login = await db.getUserByToken(token);
	} catch (error) {
		addLog(error);
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	if (!login) {
		return res
			.status(400)
			.render("./layouts/error.ejs", { error: { code: 400 } });
	}

	try {
		await db.updateUserToken(login, "");
	} catch (error) {
		addLog(error);
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	res.clearCookie("token", { secure: true, signed: true });

	res.redirect("/");
};

export const getReset = (req, res) => {
	res.render("./layouts/reset.ejs");
};

export const postReset = async (req, res) => {
	const { newPassword, repeatPassword } = req.body;

	if (!String(newPassword) || !String(repeatPassword)) {
		return res.send("Password is required");
	}

	if (newPassword !== repeatPassword) {
		return res.send("Repeate password must be the same");
	}

	const error = validatePassword(newPassword);
	if (error) {
		return res.send(error);
	}

	let login;
	const { token } = req.signedCookies;
	try {
		login = await db.getUserByToken(token);
	} catch (error) {
		addLog(error);
		return res.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	if (!login) {
		return res.send("Your account canot be found");
	}

	try {
		await db.updateUserPassword(login, hashString(newPassword));
	} catch (error) {
		addLog(error);
		return res.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	res.send(
		'<span style="color: green;">Changed password succesfully!</span>'
	);
};

export const getLog = (req, res) => {
	res.sendFile("errors.log", { root: directory });
};

export const deleteLog = (req, res) => {
	clearLogs();

	res.status(200).send('<span class="green">Cleard logs</span>');
};

// --- Images ---
export const getImg = async (req, res) => {
	const { photoid } = req.params;

	if (!photoid) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	let photo, tags;

	try {
		photo = await db.getImgById(photoid);
		tags = await db.getSelectedTeachers(photo.id);
	} catch (error) {
		addLog(error);
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	if (!photo) {
		return res
			.status(400)
			.render("./layouts/error.ejs", { error: { code: 400 } });
	}

	res.render("./layouts/photos.ejs", {
		photo,
		tags,
		authorized: req.authorized,
	});
};

export const postImg = async (req, res) => {
	const { photoid } = req.body;

	if (!photoid) {
		return res
			.status(400)
			.render("./layouts/error.ejs", { error: { code: 400 } });
	}

	res.redirect(`/img/${photoid}`);
};

export const getImgNext = async (req, res) => {
	const { photoid } = req.params;

	let newphotoid;

	try {
		newphotoid = await db.getNextImg(photoid);
	} catch (error) {
		addLog(error);
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	if (!newphotoid) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	res.redirect(`/img/${newphotoid}`);
};

export const getImgUpdate = async (req, res) => {
	const { photoid } = req.params;

	if (!photoid) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	let photo;

	try {
		photo = await db.getImgById(photoid);
	} catch (error) {
		addLog(error);
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

export const deleteImageDelete = async (req, res) => {
	const { photoid } = req.params;

	if (!photoid) {
		return res.send("Required parametrs are missing.");
	}

	let photo;

	try {
		photo = await db.getImgById(photoid);
	} catch (error) {
		addLog(error);
		return res.send("Could not find image to delete");
	}

	if (!photo) {
		return res.send("Could not find image to delete");
	}

	try {
		if (photo.local) {
			upload.deleteImage(photo.local);
		}
		await db.deleteImage(photoid);
	} catch (error) {
		addLog(error);
		return res.send("Could not delete image.");
	}

	res.send('<span style="color: green;">Deleted image!</span>');
};

export const postImgUpdate = async (req, res) => {
	const { photoid } = req.params;
	const { src, local } = req.body;

	if (photoid == undefined) {
		return res.send("Required parametrs are missing.");
	}

	try {
		await db.updateImg(photoid, src ?? "", local ?? "");
	} catch (error) {
		addLog(error);
		return res.send("Could not update image.");
	}

	res.send('<span style="color: green;">Updated image!</span>');
};

export const getImgPrevious = async (req, res) => {
	const { photoid } = req.params;

	let newphotoid;

	try {
		newphotoid = await db.getPreviousImg(photoid);
	} catch (error) {
		addLog(error);
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	if (!newphotoid) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	res.redirect(`/img/${newphotoid}`);
};

export const getRandomImg = async (req, res) => {
	let photoid;

	try {
		photoid = await db.getRandomImg();
	} catch (error) {
		addLog(error);
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	if (!photoid) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	res.redirect(`/img/${photoid}`);
};

export const getAddImg = (req, res) => {
	res.render("./layouts/addImage.ejs");
};

export const postApiAddImg = async (req, res) => {
	const { imgUrl } = req.body;
	const [imgFile] = req.files;

	if (!imgUrl && !imgFile) {
		return res.send("Image url or file must be provided.");
	}

	let local;

	if (imgFile) {
		try {
			local = upload.uploadImage(imgFile);
		} catch (error) {
			addLog(error);
			return res.send("Could not save file.");
		}
	}

	let photoid;

	try {
		photoid = await db.addImg(imgUrl, local);
	} catch (error) {
		addLog(error);
		return res.send("Image could not be uploaded.");
	}

	res.render("./components/addImgAproval.ejs", { photoid });
};

// --- Tags ---
export const putImgTag = async (req, res) => {
	const { photoid, tagid } = req.params;

	let tag;

	try {
		tag = await db.addTag(photoid, tagid);
	} catch (error) {
		addLog(error);
		return res.sendStatus(500);
	}

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

export const deleteImgTag = async (req, res) => {
	const { photoid, tagid } = req.params;

	try {
		await db.deleteTag(photoid, tagid);
	} catch (error) {
		addLog(error);
		return res.sendStatus(500);
	}

	return res.send("");
};

export const getImgTag = async (req, res) => {
	const { prompt } = req.query;
	const { photoid } = req.params;

	if (!prompt || !prompt.trim()) {
		return res.send("");
	}

	let tags;

	try {
		tags = await db.searchUnselectedTeachers(photoid, prompt);
	} catch (error) {
		addLog(error);
		return res.sendStatus(500);
	}

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

export const getTag = async (req, res) => {
	const { prompt } = req.query;

	if (!prompt) {
		return res.send("");
	}

	let tagtabs;

	try {
		tagtabs = await db.searchTeachers(prompt);
	} catch (error) {
		addLog(error);
		return res.sendStatus(500);
	}

	if (!tagtabs) {
		return res.sendStatus(400);
	}

	res.render("./components/tagtablist.ejs", { tagtabs });
};

export const getImageTaglist = async (req, res) => {
	const { tagid } = req.params;

	if (!tagid) {
		return res.sendStatus(400);
	}

	let imagetabs;

	try {
		imagetabs = await db.getImgsByTagId(tagid);
	} catch (error) {
		addLog(error);
		return res.sendStatus(500);
	}

	if (imagetabs.length === 0) {
		return res.send('<small class="light">No images was found...</small>');
	}

	res.render("./components/imagetablist.ejs", { imagetabs });
};
