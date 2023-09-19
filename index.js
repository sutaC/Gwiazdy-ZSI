import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import * as db from "./src/data/db.js";
import { createHash, randomUUID } from "crypto";

const port = 3000;
const secret = "hwzT1rMZ0FBbwfgvh9qMsEFAF/QanrTAN41xiYa5O9g=";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(secret));

const directory = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(directory + "/static")));
app.set("views", path.join(directory + "/src/views"));

// Authorization
app.use(async (req, res, next) => {
	const { token } = req.signedCookies;
	req.authorized = false;

	if (!token) {
		return next();
	}

	let user;
	try {
		user = await db.getUserByToken(token);
	} catch (error) {
		return res.render("./layouts/error.ejs", {
			error: { code: 500, message: error.message },
		});
	}

	if (!user) {
		return next();
	}

	req.authorized = true;
	next();
});

// --- Main ---
app.get("/", (req, res) => {
	const { authorized } = req.authorized;

	res.render("./layouts/index.ejs", { authorized });
});

// --- Login ---

app.get("/login", async (req, res) => {
	const { token } = req.signedCookies;

	if (token) {
		const dbToken = await db.getUserByToken(token);

		if (dbToken) {
			return res.status(101).redirect("/admin");
		}
	}

	res.render("./layouts/login.ejs");
});

app.post("/login", async (req, res) => {
	const { token } = req.signedCookies;

	if (token) {
		const dbToken = await db.getUserByToken(token);

		if (dbToken) {
			return res.status(101).redirect("/admin");
		}
	}

	const { login, password } = req.body;

	if (!String(login) || !String(password)) {
		return res.status(400).send("Login & password required");
	}

	const dbPassword = await db.getUser(login);

	if (!dbPassword) {
		return res.status(400).send("No user with this login was found");
	}

	if (
		createHash("sha256", secret).update(password).digest("base64") !==
		dbPassword
	) {
		return res.status(400).send("Incorrect password");
	}

	const newToken = createHash("sha256", secret)
		.update(randomUUID())
		.digest("base64");

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

	res.status(101).redirect("/admin");
});

app.get("/admin", (req, res) => {
	if (!req.authorized) {
		return res
			.status(401)
			.render("./layouts/error.ejs", { error: { code: 401 } });
	}

	res.render("./layouts/admin.ejs");
});

app.get("/logout", async (req, res) => {
	if (!req.authorized) {
		return res
			.status(401)
			.render("./layouts/error.ejs", { error: { code: 401 } });
	}

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
app.put("/api/img/:photoid/tag/:tagid", async (req, res) => {
	if (!req.authorized) {
		return res.sendStatus(401);
	}

	const { photoid, tagid } = req.params;

	const tag = await db.addTag(photoid, tagid);

	res.render("./components/tag.ejs", {
		tag,
		photoid,
		checked: true,
		authorized: req.authorized,
	});
});

app.delete("/api/img/:photoid/tag/:tagid", async (req, res) => {
	if (!req.authorized) {
		return res.sendStatus(401);
	}

	const { photoid, tagid } = req.params;

	try {
		await db.deleteTag(photoid, tagid);
	} catch (error) {
		return res.sendStatus(500);
	}

	return res.send("");
});

app.get("/api/img/:photoid/tag", async (req, res) => {
	if (!req.authorized) {
		return res.sendStatus(401);
	}

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

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
