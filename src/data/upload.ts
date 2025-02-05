import fs from "fs";

/**
 * Uploads file to server
 * @param uploadFile File to upload
 * @returns New file name
 */
export function uploadImage(uploadFile: Express.Multer.File): string {
    const extension = uploadFile.originalname.split(".").pop();
    fs.renameSync(uploadFile.path, uploadFile.path + "." + extension);
    return uploadFile.filename + "." + extension;
}

/**
 *  Deletes file from server
 * @param filename Name of file to delete
 */
export function deleteImage(filename: string): void {
    fs.rmSync("static/uploads/" + filename);
}
