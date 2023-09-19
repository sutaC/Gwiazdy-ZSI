import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as db from "./src/data/db.js";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

const directory = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(directory + "/static")));

app.set("views", path.join(directory + "/src/views"));

const options = {
	root: path.join(directory + "/src/views"),
};

// --- Mian ---
app.get("/", (req, res) => {
	res.sendFile("/layouts/index.html", options);
});

// --- Images ---
app.get("/img/:photoid", async (req, res) => {
	const {photoid}  = req.params;

	
	if(!photoid) {
		return res.sendStatus(400)
	}

	let photo, tags;

	try {
		photo = await db.getImgById(photoid);
		tags = await db.getSelectedTeachers(photo.id);
	} catch (error) {
		return res.sendStatus(404);
	}

	res.render("./layouts/photos.ejs", { photo, tags });
});

app.post("/img", (req, res) => {
	const {photoid}  = req.body;

	if(!photoid) {
		return res.sendStatus(400)
	}

	res.redirect(`/img/${photoid}`)
})

app.get("/img/:photoid/next", async (req, res) => {
	const { photoid } = req.params;

	let newphotoid;

	try {
		newphotoid = await db.getNextImg(photoid);
	} catch (error) {
		return res.sendStatus(404);
	}

	res.redirect(`/img/${newphotoid}`);
});

app.get("/img/:photoid/previous", async (req, res) => {
	const { photoid } = req.params;

	let newphotoid;

	try {
		newphotoid = await db.getPreviousImg(photoid);
	} catch (error) {
		return res.sendStatus(404);
	}

	res.redirect(`/img/${newphotoid}`);
});

app.get("/randomimg", async (req, res) => {
	let photoid;

	try {
		photoid = await db.getRandomImg();
	} catch (error) {
		res.sendStatus(500);
	}

	res.redirect(`/img/${photoid}`);
});

// --- Tags ---
app.put("/api/img/:photoid/tag/:tagid", async (req, res) => {
	const { photoid, tagid } = req.params;

	const tag = await db.addTag(photoid, tagid);

	res.render("./components/tag.ejs", {
		tag,
		photoid,
		checked: true,
	});
});

app.delete("/api/img/:photoid/tag/:tagid", async (req, res) => {
	const { photoid, tagid } = req.params;

	try {
		await db.deleteTag(photoid, tagid);
	} catch (error) {
		return res.sendStatus(500);
	}

	return res.send("");
});

app.get("/api/img/:photoid/tag", async (req, res) => {
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
	});
});

// --- Error ---

app.use((req, res) => {
	res.sendStatus(404);
});

// --- Deploy ---

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
