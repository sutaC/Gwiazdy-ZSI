import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import multer from "multer"

import router from "./src/routes/router.js";
import authRouter from "./src/routes/authRouter.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(multer({dest: "static/uploads/", fileFilter: (req, file, cb) => { cb(null, file.mimetype.startsWith("image")) }}).any());

export const directory = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(directory, "/static")));
app.set("views", path.join(directory, "/src/views"));

/*
	--- Login info: ---
	Login: "admin"
	Password: "Passw0rd;"
*/

// Attach router
app.use(router);
app.use(authRouter);

// Error handling
app.use((req, res) => {
	res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
});

// --- Deploy ---
const port = process.env.PORT ?? 3000;
app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
