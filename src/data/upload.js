import fs from "fs";

export function uploadImage(uploadFile) {
	const extension = uploadFile.originalname.split(".").pop();

	fs.renameSync(uploadFile.path, uploadFile.path + "." + extension);

	return uploadFile.filename + "." + extension;
}

export function deleteImage(filename) {
	fs.rmSync("static/uploads/" + filename);
}
