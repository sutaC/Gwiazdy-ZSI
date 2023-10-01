import fs from "fs";

const FILENAME = "errors.log";

export function addLog(message) {
	if (!message) {
		throw new Error("Message must me defined");
	}

	const date = new Date();
	const log = `${date.toISOString()} | ${message}\n`;

	fs.appendFileSync(FILENAME, log);
}

export function clearLogs() {
	fs.writeFileSync(FILENAME, "");
}
