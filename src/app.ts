import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import router from "./routes/router.js";
import express, { type ErrorRequestHandler } from "express";
import Logger from "./data/Logger.js";
import Scraper from "./data/Scraper.js";
import { STATIC_PATH, VIEWS_PATH } from "./globals.js";

const app = express();
dotenv.config();
app.enable("trust proxy");

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(express.static(STATIC_PATH));
app.set("views", VIEWS_PATH);

// Setup scraping job
export const scraper = new Scraper();
// Attach router
app.use(router);

// Error handling
const handleServerError: ErrorRequestHandler = async (err, req, res, next) => {
    if (!err) next(err);
    await Logger.error(err);
    res.status(500).render("./layouts/error.ejs", {
        error: { code: 500, messsage: "Wystąpił nieoczekiwany błąd serwera" },
    });
};
app.use(handleServerError);

app.use((req, res) => {
    res.status(404).render("./layouts/error.ejs", { error: { code: 404 } });
});

// --- Deploy ---
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
