import fs from "fs";

export function uploadImage(uploadFile: Express.Multer.File): string {
    const extension = uploadFile.originalname.split(".").pop();

    fs.renameSync(uploadFile.path, uploadFile.path + "." + extension);

    return uploadFile.filename + "." + extension;
}

export function deleteImage(filename: string): void {
    fs.rmSync("static/uploads/" + filename);
}
