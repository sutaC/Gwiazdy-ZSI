import { randomUUID } from "crypto";
import * as db from "./data/db.js";
import { hashString } from "./auth.js";

// Responses
export const getRoot = (req, res) => {
	const { authorized } = req.authorized;

	res.render("./layouts/index.ejs", { authorized });
};

// --- Admin panel ---
export const getLogin = async (req, res) => {
	res.render("./layouts/login.ejs");
};

export const postLogin = async (req, res) => {
	const { login, password } = req.body;

	if (!String(login) || !String(password)) {
		return res.send("Login & password required");
	}

	const dbPassword = await db.getUser(login);

	if (!dbPassword) {
		return res.send("No user with this login was found");
	}

	if (hashString(password) !== dbPassword) {
		return res.send("Incorrect password");
	}

	const newToken = hashString(randomUUID());

	try {
		await db.updateUserToken(login, newToken);
	} catch (error) {
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	res.cookie("token", newToken, {
		maxAge: 600000,
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

	try {
		const login = await db.getUserByToken(token);
		if (!login) {
			throw new Error("Could not find user with that token");
		}
		await db.updateUserToken(login, "");
	} catch (error) {
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
		return res.send("New password is required");
	}

	if (newPassword !== repeatPassword) {
		return res.send("Incorrect password");
	}

	const validationError = auth.validatePassword(newPassword);
	if (validationError) {
		return res.send(validationError);
	}

	let login;
	const { token } = req.cookies;
	try {
		login = await db.getUserByToken(token);
	} catch (error) {
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	if (!login) {
		return res.send("Your account canot be found");
	}

	try {
		await db.updateUserPassword(login, hashString(newPassword));
	} catch (error) {
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	res.send(
		'<span style="color: green;">Changed password succesfully!</span> '
	);
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

export const getImgPrevious = async (req, res) => {
	const { photoid } = req.params;

	let newphotoid;

	try {
		newphotoid = await db.getPreviousImg(photoid);
	} catch (error) {
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

// --- Tags ---
export const putImgTag = async (req, res) => {
	const { photoid, tagid } = req.params;

	let tag;

	try {
		tag = await db.addTag(photoid, tagid);
	} catch (error) {
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
		return res.sendStatus(500);
	}

	if (imagetabs.length === 0) {
		return res.send("No images found");
	}

	res.render("./components/imagetablist.ejs", { imagetabs });
};