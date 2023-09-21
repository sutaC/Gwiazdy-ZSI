import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";
import dotenv from 'dotenv'
import * as db from "./src/data/db.js";
import * as auth from "./src/data/auth.js"

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));

const directory = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(directory + "/static")));
app.set("views", path.join(directory + "/src/views"));

// Authorization
app.use(auth.authorize);

// --- Main ---
app.get("/", (req, res) => {
	const { authorized } = req.authorized;

	res.render("./layouts/index.ejs", { authorized });
});

// --- Login ---

app.get("/login", async (req, res) => {
	if (req.authorized) {
		return res.status(101).redirect("/admin");
	}

	res.render("./layouts/login.ejs");
});

app.post("/login", async (req, res) => {

	if (req.authorized) {
		return res
			.status(303)
			.send('<script>window.location.replace("/admin")</script>');
	}

	const { login, password } = req.body;

	if (!String(login) || !String(password)) {
		return res.send("Login & password required");
	}

	const dbPassword = await db.getUser(login);

	if (!dbPassword) {
		return res.send("No user with this login was found");
	}

	if (auth.hashString(password) !== dbPassword) {
		return res.send("Incorrect password");
	}

	const newToken = auth.hashString(randomUUID())

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
});

app.get("/admin", (req, res, next) => {
	auth.authenticatePage(req, res, next)
	res.render("./layouts/admin.ejs");
});

app.get("/logout", async (req, res, next) => {
	auth.authenticatePage(req, res, next)

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
});

app.get("/reset", (req, res, next) => {
	auth.authenticatePage(req, res, next)

	res.render("./layouts/reset.ejs")
})

app.post('/reset', async (req, res, next) => {
	auth.authenticateApi(req, res, next)

	const { newPassword, repeatPassword } = req.body;

	if (!String(newPassword) || !String(repeatPassword)) {
		return res.send("New password is required");
	}

	if (newPassword !== repeatPassword) {
		return res.send("Incorrect password");
	}

	const validationError = auth.validatePassword(newPassword);
	if(validationError){
		return res.send(validationError);
	}

	let login;
	const {token} = req.cookies
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
		await db.updateUserPassword(login, auth.hashString(newPassword));
	} catch (error) {
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	res.send('<span style="color: green;">Changed password succesfully!</span> ');
})

// --- Images ---
app.get("/img/:photoid", async (req, res) => {
	const { photoid } = req.params;

	if (!photoid) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 400 } });
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

	res.render("./layouts/photos.ejs", {
		photo,
		tags,
		authorized: req.authorized,
	});
});

app.post("/img", (req, res) => {
	const { photoid } = req.body;

	if (!photoid) {
		return res
			.status(400)
			.render("./layouts/error.ejs", { error: { code: 400 } });
	}

	res.redirect(`/img/${photoid}`);
});

app.get("/img/:photoid/next", async (req, res) => {
	const { photoid } = req.params;

	let newphotoid;

	try {
		newphotoid = await db.getNextImg(photoid);
	} catch (error) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	res.redirect(`/img/${newphotoid}`);
});

app.get("/img/:photoid/previous", async (req, res) => {
	const { photoid } = req.params;

	let newphotoid;

	try {
		newphotoid = await db.getPreviousImg(photoid);
	} catch (error) {
		return res
			.status(404)
			.render("./layouts/error.ejs", { error: { code: 404 } });
	}

	res.redirect(`/img/${newphotoid}`);
});

app.get("/randomimg", async (req, res) => {
	let photoid;

	try {
		photoid = await db.getRandomImg();
	} catch (error) {
		return res
			.status(500)
			.render("./layouts/error.ejs", { error: { code: 500 } });
	}

	res.redirect(`/img/${photoid}`);
});

// --- Tags ---
app.put("/api/img/:photoid/tag/:tagid", async (req, res, next) => {
	auth.authenticateApi(req, res, next)

	const { photoid, tagid } = req.params;

	const tag = await db.addTag(photoid, tagid);

	res.render("./components/tag.ejs", {
		tag,
		photoid,
		checked: true,
		authorized: req.authorized,
	});
});

app.delete("/api/img/:photoid/tag/:tagid", async (req, res, next) => {
	auth.authenticateApi(req, res, next)

	const { photoid, tagid } = req.params;

	try {
		await db.deleteTag(photoid, tagid);
	} catch (error) {
		return res.sendStatus(500);
	}

	return res.send("");
});

app.get("/api/img/:photoid/tag", async (req, res, next) => {
	auth.authenticateApi(req, res, next)

	const { prompt } = req.query;
	const { photoid } = req.params;

	if (!prompt || !prompt.trim()) {
		return res.send("");
	}

	const tags = await db.searchUnselectedTeachers(photoid, prompt);

	res.render("./components/taglist.ejs", {
		tags,
		photoid,
		checked: false,
		authorized: req.authorized,
	});
});

app.get("/api/tag", async (req, res) => {
	const { prompt } = req.query;

	if (!prompt) {
		return res.send("");
	}

	const tagtabs = await db.searchTeachers(prompt);

	res.render("./components/tagtablist.ejs", { tagtabs });
});

app.get("/api/imagetaglist/:tagid", async (req, res) => {
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
});

// --- Error ---

app.use((req, res) => {
	res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
});

// --- Deploy ---
const port = process.env.PORT ?? 3000;
app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
