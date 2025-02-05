import fs from "fs";

const FILENAME = "errors.log";

/**
 * Saves to log given message
 * @param message Message to log
 */
export function addLog(message: string): void {
    const date = new Date();
    const log = `${date.toISOString()} | ${message}\n`;
    fs.appendFileSync(FILENAME, log);
}

/**
 * Deletes all saved logs
 */
export function clearLogs(): void {
    fs.writeFileSync(FILENAME, "");
}
