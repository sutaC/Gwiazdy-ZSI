import path from "path";
import { fileURLToPath } from "url";

export const ROOT_PATH = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
);
export const LOGS_PATH = path.join(ROOT_PATH, "/logs/logs.log");
export const SCRAPERSAVE_PATH = path.join(ROOT_PATH, "/logs/scrapersave.json");
export const STATIC_PATH = path.join(ROOT_PATH, "/static");
export const VIEWS_PATH = path.join(ROOT_PATH, "/src/views");
export const UPLOADS_PATH = path.join(STATIC_PATH, "/uploads");
