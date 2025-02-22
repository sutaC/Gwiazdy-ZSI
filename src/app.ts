import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import router from "$/routes/router";
import express, { type ErrorRequestHandler } from "express";
import { fileURLToPath } from "url";
import Logger from "$/data/Logger";

const app = express();
dotenv.config();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(
    multer({
        dest: "static/uploads/",
        fileFilter: (req, file, cb) => {
            cb(null, file.mimetype.startsWith("image"));
        },
    }).any()
);

/**
 * Root directory of project
 */
export const directory = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    ".."
);
app.use(express.static(path.join(directory, "/static")));
app.set("views", path.join(directory, "/src/views"));

// Attach router
app.use(router);

// Error handling
const handleServerError: ErrorRequestHandler = async (err, req, res, next) => {
    if (!err) next(err);
    await Logger.error(err);
    res.status(500).render("./layouts/error.ejs", {
        error: { code: 500, messsage: err },
    });
};
app.use(handleServerError);

app.use((req, res) => {
    res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
});

// --- Deploy ---
const port = process.env.PORT ?? 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
