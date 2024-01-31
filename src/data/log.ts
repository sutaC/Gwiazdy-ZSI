import fs from "fs";

const FILENAME = "errors.log";

export function addLog(message: string): void {
    const date = new Date();
    const log = `${date.toISOString()} | ${message}\n`;

    fs.appendFileSync(FILENAME, log);
}

export function clearLogs(): void {
    fs.writeFileSync(FILENAME, "");
}
