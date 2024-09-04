import mysql from "mysql2/promise";
import { addLog } from "$/data/log";

// --- Types ---
interface Image {
    id: number;
    src: string;
    local: string;
}

interface Teacher {
    id: number;
    name: string;
}

interface TeacherCount {
    name: string;
    ammount: number;
}

// --- Functions ---
async function getConnection(): Promise<mysql.Connection | undefined> {
    try {
        const con = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });

        if (!con) throw new Error("Could not connect to database");

        return con;
    } catch (error) {
        addLog(error as string);
        return undefined;
    }
}

// --- Imgs ---
export async function getImgById(id: number): Promise<Image | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query("SELECT * FROM images WHERE id = ?;", [
        id,
    ])) as unknown as Image[][] | undefined[][];

    con.end();

    return data ?? null;
}

export async function getImgsByTagId(
    tagid: number,
    list: number
): Promise<Image[]> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const limit = (list - 1) * 5;

    const [data] = (await con.query(
        "SELECT images.* FROM images JOIN imagesteachers ON images.id = imagesteachers.id_images WHERE imagesteachers.id_teachers = ? LIMIT ?, 5;",
        [tagid, limit]
    )) as unknown as Image[][] | undefined[][];
    con.end();

    if (!data[0]) return [];

    return data as Image[];
}

export async function getNextImg(id: number): Promise<number | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query(
        "SELECT id FROM images WHERE id > ? LIMIT 1;",
        [id]
    )) as unknown as { id: number }[][] | undefined[][];
    con.end();

    return data?.id ?? null;
}
export async function getPreviousImg(id: number): Promise<number | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query(
        "SELECT id FROM images WHERE id < ? ORDER BY id DESC LIMIT 1;",
        [Number(id)]
    )) as unknown as { id: number }[][] | undefined[][];
    con.end();

    return data?.id ?? null;
}

export async function getRandomImg(): Promise<number | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query(
        "SELECT id FROM images ORDER BY RAND() LIMIT 1;"
    )) as unknown as { id: number }[][] | undefined[][];
    con.end();

    return data?.id ?? null;
}

export async function addImg(
    src: string | undefined,
    local: string | undefined
): Promise<number | null> {
    if (src == undefined && local == undefined) {
        throw new Error("Cannot insert image witchout src or local.");
    }

    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query(
        "INSERT INTO images (id, src, local) VALUES (NULL, ?, ?);",
        [src ?? "", local ?? ""]
    );

    let data: { id: number } | undefined;

    if (src) {
        [[data]] = (await con.query("SELECT id FROM images WHERE src = ?;", [
            src,
        ])) as unknown as { id: number }[][] | undefined[][];
    } else if (local) {
        [[data]] = (await con.query("SELECT id FROM images WHERE local = ?;", [
            local,
        ])) as unknown as { id: number }[][] | undefined[][];
    }

    con.end();

    return data?.id ?? null;
}

export async function updateImg(
    photoid: number,
    src: string,
    local: string
): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("UPDATE images SET src = ?, local = ? WHERE id = ?;", [
        src,
        local,
        photoid,
    ]);

    con.end();
}

export async function deleteImage(photoid: number): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("DELETE FROM images WHERE id = ?;", [photoid]);

    con.end();
}

// --- Tags ---
export async function addTag(
    imageId: number,
    teachersId: number
): Promise<Teacher | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query(
        "INSERT INTO imagesteachers (id, id_images, id_teachers) VALUES (NULL, ?, ?);",
        [imageId, teachersId]
    );
    const [[data]] = (await con.query("SELECT * FROM teachers WHERE id = ?;", [
        teachersId,
    ])) as unknown as Teacher[][] | undefined[][];
    con.end();

    return data ?? null;
}

export async function deleteTag(
    imageID: number,
    teachersID: number
): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query(
        "DELETE FROM imagesteachers WHERE id_images = ? AND id_teachers = ?;",
        [imageID, teachersID]
    );
    con.end();
}

// --- Teachers ---

export async function getTags(): Promise<Teacher[]> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [data] = (await con.query(
        "SELECT * FROM teachers ORDER BY name;"
    )) as unknown as Teacher[][] | undefined[][];
    con.end();

    if (!data[0]) return [];
    return data as Teacher[];
}

export async function addToTags(name: string): Promise<number | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("INSERT INTO teachers (id, name) VALUES (NULL, ?)", [name]);

    const [[data]] = (await con.query(
        "SELECT id FROM teachers WHERE name = ? LIMIT 1;",
        [name]
    )) as unknown as { id: number }[][] | undefined[][];

    con.end();

    return data?.id ?? null;
}

export async function updateInTags(id: number, name: string): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("UPDATE teachers SET name = ? WHERE id = ?;", [name, id]);

    con.end();
}

export async function deleteFromTags(id: number): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("DELETE FROM teachers WHERE id = ?;", [id]);
    await con.query("DELETE FROM imagesteachers WHERE id_teachers = ?;", [id]);

    con.end();
}

export async function getSelectedTeachers(imageId: number): Promise<Teacher[]> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [data] = (await con.query(
        "SELECT teachers.* FROM images LEFT JOIN imagesteachers ON images.id = imagesteachers.id_images LEFT JOIN teachers ON imagesteachers.id_teachers = teachers.id WHERE images.id = ?;",
        [imageId]
    )) as unknown as Teacher[][] | undefined[][];
    con.end();

    if (!data[0]) return [];
    return data as Teacher[];
}

export async function searchTeachers(prompt: string): Promise<Teacher[]> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [data] = (await con.query(
        'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") LIMIT 3;',
        [prompt]
    )) as unknown as Teacher[][] | undefined[][];
    con.end();

    if (!data[0]) return [];
    return data as Teacher[];
}

export async function searchUnselectedTeachers(
    imageId: number,
    prompt: string
): Promise<Teacher[]> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [data] = (await con.query(
        'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") GROUP BY id HAVING NOT id IN ( SELECT teachers.id FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers WHERE imagesteachers.id_images = ? ) LIMIT 3;',
        [prompt, imageId]
    )) as unknown as Teacher[][] | undefined[][];
    con.end();

    if (!data[0]) return [];
    return data as Teacher[];
}

// --- Users ---

export async function getUsers(): Promise<string[]> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [data] = (await con.query("SELECT login FROM users;")) as unknown as
        | string[][]
        | undefined[][];
    con.end();

    if (!data[0]) return [];
    return data as string[];
}

export async function getUser(login: string): Promise<string | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query(
        "SELECT password FROM users WHERE login = ?;",
        [login]
    )) as unknown as { password: string }[][] | undefined[][];
    con.end();

    return data?.password ?? null;
}

export async function getUserByToken(token: string): Promise<string | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query(
        "SELECT login FROM users WHERE token = ?;",
        [token]
    )) as unknown as { login: string }[][] | undefined[][];
    con.end();

    return data?.login ?? null;
}

export async function updateUserToken(
    login: string,
    token: string
): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("UPDATE users SET token = ? WHERE login = ?;", [
        token,
        login,
    ]);

    con.end();
}

export async function updateUserPassword(
    login: string,
    password: string
): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("UPDATE users SET password = ? WHERE login = ?;", [
        password,
        login,
    ]);

    con.end();
}

export async function addUser(login: string, password: string): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query(
        "INSERT INTO users (id, login, password, token) VALUES (NULL, ?, ?, NULL);",
        [login, password]
    );

    con.end();
}

export async function deleteUser(login: string): Promise<void> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    await con.query("DELETE FROM users WHERE login = ?;", [login]);

    con.end();
}

// ---

export async function getImageAmmount(): Promise<number | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query(
        'SELECT COUNT(*) AS "ammount" FROM images;'
    )) as unknown as { ammount: number }[][] | undefined[][];
    con.end();

    return data?.ammount ?? null;
}

export async function getImageWithTagAmmount(): Promise<number | null> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [[data]] = (await con.query(
        'SELECT COUNT(DISTINCT id_images) AS "ammount" FROM imagesteachers;'
    )) as unknown as { ammount: number }[][] | undefined[][];
    con.end();

    return data?.ammount ?? null;
}

export async function getImageAmmountOnTeachers(): Promise<TeacherCount[]> {
    const con = await getConnection();
    if (!con) throw new Error("Could not connect to database");

    const [data] = (await con.query(
        'SELECT teachers.name, COUNT(imagesteachers.id_teachers) AS "ammount" FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers GROUP BY imagesteachers.id_teachers ORDER BY ammount DESC;'
    )) as unknown as TeacherCount[][] | undefined[][];
    con.end();

    if (!data[0]) return [];
    return data as TeacherCount[];
}
