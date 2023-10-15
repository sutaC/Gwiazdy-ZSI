import fs from "fs";
import path from "path";
import { directory } from "../../app.js";

export function uploadImage(uploadFile) {
	const file = uploadFile;

	const extension = file.name.toLowerCase().split(".").pop();

	if (!extension) {
		throw new Error("Could not read file extension: " + file.name);
	}

	const filename = crypto.randomUUID() + "." + extension;

	const newFile = new File(file, filename);

	const filepath = path.join(directory, "/static/images");
	fs.appendFileSync(filepath, newFile);

	return filename;
}

export function deleteImage() {}
