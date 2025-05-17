import { directory } from "$/app";
import fs from "fs/promises";
import path from "path";

/**
 * Uploads file to server
 * @param uploadFile File to upload
 * @returns New file name
 */
export async function uploadImage(
    uploadFile: Express.Multer.File
): Promise<string> {
    const name =
        crypto.randomUUID() + "." + uploadFile.originalname.split(".").pop();
    await fs.rename(
        path.join(directory, uploadFile.path),
        path.join(directory, "static/uploads/", name)
    );
    return name;
}

/**
 *  Deletes file from server
 * @param filename Name of file to delete
 */
export async function deleteImage(filename: string): Promise<void> {
    const filePath = path.join(directory, "static/uploads/", filename);
    try {
        await fs.access(filePath);
    } catch (err) {
        return;
    }
    await fs.rm(filePath);
}
