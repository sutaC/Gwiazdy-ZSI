import fs from "fs/promises";
import path from "path";
import { ROOT_PATH, UPLOADS_PATH } from "../globals.js";

/**
 * Uploads file to server
 * @param uploadFile File to upload
 * @returns New file name
 */
export async function uploadImage(
    uploadFile: Express.Multer.File,
): Promise<string> {
    const name =
        crypto.randomUUID() + "." + uploadFile.originalname.split(".").pop();
    await fs.rename(
        path.join(ROOT_PATH, uploadFile.path),
        path.join(UPLOADS_PATH, name),
    );
    return name;
}

/**
 *  Deletes file from server
 * @param filename Name of file to delete
 */
export async function deleteImage(filename: string): Promise<void> {
    const filePath = path.join(UPLOADS_PATH, filename);
    try {
        await fs.access(filePath);
    } catch (err) {
        return;
    }
    await fs.rm(filePath);
}
