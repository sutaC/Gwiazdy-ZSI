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

// ---

const maxPosition = await db.getMaxPosition();

// ---

app.get("/", (req, res) => {
	res.sendFile("/layouts/index.html", options);
});

app.post("/visit", (req, res) => {
	const { photoid } = req.body;

	if (Number(photoid) < 0 || Number(photoid) > maxPosition) {
		return res.status(400).redirect("/");
	}

	res.redirect(`/img/${photoid}`);
});

// --- Images display ---

app.get("/img/:position", async (req, res) => {
	let { position } = req.params;

	if (Number(position) < 0) {
		return res.status(400).redirect("/img/0");
	} else if (Number(position) > maxPosition) {
		return res.status(400).redirect(`/img/${maxPosition}`);
	}

	const photo = await db.getImg(position);
	const tags = await db.getSelectedTeachers(photo.id);

	res.render("./layouts/photos.ejs", { photo, position, tags });
});

app.put("/api/img/:photoid/tag/:tagid", async (req, res) => {
	const { photoid, tagid } = req.params;

	const tag = await db.addTag(photoid, tagid);

	res.render("./components/tag.ejs", {
		tag,
		photoId: photoid,
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
		photoId: photoid,
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
