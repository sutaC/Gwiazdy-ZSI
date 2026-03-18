import path from "path";
import { fileURLToPath } from "url";

export const ROOT_PATH = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
);
export const LOGS_PATH = path.join(ROOT_PATH, "logs.log");
export const STATIC_PATH = path.join(ROOT_PATH, "/static");
export const VIEWS_PATH = path.join(ROOT_PATH, "/src/views");
export const UPLOADS_PATH = path.join(STATIC_PATH, "/uploads");
export const SCRAPERSAVE_PATH = path.join(ROOT_PATH, "scrapersave.json");
export const CREDITS_PATH = path.join(ROOT_PATH, "/src/data/credits.json");
