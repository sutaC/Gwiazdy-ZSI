import mysql from "mysql2/promise";

// --- Types ---
/**
 * Image object interface
 * @property {number} id - Id
 * @property {string} src - Source web url
 * @property {string} local - Name of local file saved on server
 */
export interface Image {
    id: number;
    src: string;
    local: string;
}

/**
 * Tag object interface
 * @property {number} id - Id
 * @property {string} name - Name
 */
export interface Teacher {
    id: number;
    name: string;
}

/**
 * Tag count object interface
 * @property {string} name - Name
 * @property {number} amount - Amount of related images
 */
export interface TeacherCount {
    name: string;
    amount: number;
}

/**
 * Scraped image object interface
 * @property {number} id - Image id
 * @property {string} src - Image source url
 */
export interface ScrapedImage {
    id: number;
    src: string;
}

// --- Functions ---
async function getConnection(): Promise<mysql.Connection> {
    const con = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });
    if (!con) throw new Error("Could not connect to database");
    return con;
}

// --- Imgs ---
/**
 * Gets image object by id
 * @param id Image id
 * @returns Image object
 */
export async function getImgById(id: number): Promise<Image | null> {
    const con = await getConnection();
    const [[data]] = (await con.query("SELECT * FROM images WHERE id = ?;", [
        id,
    ])) as unknown as Image[][] | undefined[][];
    await con.end();
    return data ?? null;
}

/**
 * Gets image objects lits by attached tag id
 * @param id Tag id
 * @returns Image objects list
 */
export async function getImgsByTagId(
    tagid: number,
    list: number
): Promise<Image[]> {
    const con = await getConnection();
    const limit = (list - 1) * 5;
    const [data] = (await con.query(
        "SELECT images.* FROM images JOIN imagesteachers ON images.id = imagesteachers.id_images WHERE imagesteachers.id_teachers = ? LIMIT ?, 5;",
        [tagid, limit]
    )) as unknown as Image[][] | undefined[][];
    await con.end();
    if (!data[0]) return [];
    return data as Image[];
}

/**
 * Gets next image object by of image id
 * @param id Current image id
 * @returns Image object
 */
export async function getNextImg(id: number): Promise<number | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT id FROM images WHERE id > ? LIMIT 1;",
        [id]
    )) as unknown as { id: number }[][] | undefined[][];
    await con.end();
    return data?.id ?? null;
}

/**
 * Gets previous image object of current image id
 * @param id Current image id
 * @returns Image object
 */
export async function getPreviousImg(id: number): Promise<number | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT id FROM images WHERE id < ? ORDER BY id DESC LIMIT 1;",
        [Number(id)]
    )) as unknown as { id: number }[][] | undefined[][];
    await con.end();
    return data?.id ?? null;
}

/**
 * Gets random image object
 * @returns Image object
 */
export async function getRandomImg(): Promise<number | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT id FROM images ORDER BY RAND() LIMIT 1;"
    )) as unknown as { id: number }[][] | undefined[][];
    await con.end();
    return data?.id ?? null;
}

/**
 * Gets random image object
 * @returns Image object
 */
export async function getRandomUntaggedImg(): Promise<number | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT images.id FROM images LEFT JOIN imagesteachers ON images.id = imagesteachers.id_images WHERE imagesteachers.id IS NULL ORDER BY RAND() LIMIT 1;"
    )) as unknown as { id: number }[][] | undefined[][];
    await con.end();
    return data?.id ?? null;
}

/**
 * Adds image object
 * - Image object have to have `src` or `local` to be added
 * @param src Source web url
 * @param local Name of local file saved on server
 * @returns New image id
 */
export async function addImg(
    src?: string,
    local?: string
): Promise<number | null> {
    if (src == undefined && local == undefined) {
        throw new Error("Cannot insert image witchout src or local.");
    }
    const con = await getConnection();
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
    await con.end();
    return data?.id ?? null;
}

/**
 * Updates image object
 * @param id Image id
 * @param src New source web url
 * @param local New name of local file saved on server
 */
export async function updateImg(
    id: number,
    src: string,
    local: string
): Promise<void> {
    const con = await getConnection();
    await con.query("UPDATE images SET src = ?, local = ? WHERE id = ?;", [
        src,
        local,
        id,
    ]);
    await con.end();
}

/**
 * Deletes image object and all its tag relations
 * @param id Image id
 */
export async function deleteImage(id: number): Promise<void> {
    const con = await getConnection();
    await con.query("DELETE FROM images WHERE id = ?;", [id]);
    await con.query("DELETE FROM imagesteachers WHERE id_images = ?;", [id]);
    await con.end();
}

// --- Tag-image ralations ---
/**
 * Adds tag relation to given image
 * @param imageId Image id
 * @param tagId Tag id
 * @returns Tag object
 */
export async function addTag(
    imageId: number,
    tagId: number
): Promise<Teacher | null> {
    const con = await getConnection();
    await con.query(
        "INSERT INTO imagesteachers (id, id_images, id_teachers) VALUES (NULL, ?, ?);",
        [imageId, tagId]
    );
    const [[data]] = (await con.query("SELECT * FROM teachers WHERE id = ?;", [
        tagId,
    ])) as unknown as Teacher[][] | undefined[][];
    await con.end();
    return data ?? null;
}

/**
 * Removes tag relation to given image
 * @param imageId Image id
 * @param tagId Tag id
 */
export async function deleteTag(imageId: number, tagId: number): Promise<void> {
    const con = await getConnection();
    await con.query(
        "DELETE FROM imagesteachers WHERE id_images = ? AND id_teachers = ?;",
        [imageId, tagId]
    );
    await con.end();
}

// --- Tags ---
/**
 * Gets all tag objects
 * @returns Tag objects list
 */
export async function getTags(): Promise<Teacher[]> {
    const con = await getConnection();
    const [data] = (await con.query(
        "SELECT * FROM teachers ORDER BY name;"
    )) as unknown as Teacher[][] | undefined[][];
    await con.end();
    if (!data[0]?.id) return [];
    return data as Teacher[];
}

/**
 * Adds tag object
 * @param name Tag name
 * @returns New tag id
 */
export async function addToTags(name: string): Promise<number | null> {
    const con = await getConnection();
    await con.query("INSERT INTO teachers (id, name) VALUES (NULL, ?)", [name]);
    const [[data]] = (await con.query(
        "SELECT id FROM teachers WHERE name = ? LIMIT 1;",
        [name]
    )) as unknown as { id: number }[][] | undefined[][];
    await con.end();
    return data?.id ?? null;
}

/**
 * Updates tag object
 * @param id Tag id
 * @param name New tag name
 */
export async function updateInTags(id: number, name: string): Promise<void> {
    const con = await getConnection();
    await con.query("UPDATE teachers SET name = ? WHERE id = ?;", [name, id]);
    await con.end();
}

/**
 * Deletes tag object and all its image relations
 * @param id Tag id
 */
export async function deleteFromTags(id: number): Promise<void> {
    const con = await getConnection();
    await con.query("DELETE FROM teachers WHERE id = ?;", [id]);
    await con.query("DELETE FROM imagesteachers WHERE id_teachers = ?;", [id]);
    await con.end();
}

/**
 * Returns all tags related to image
 * @param id Image id
 * @returns Tag objects list
 */
export async function getSelectedTeachers(id: number): Promise<Teacher[]> {
    const con = await getConnection();
    const [data] = (await con.query(
        "SELECT teachers.* FROM images LEFT JOIN imagesteachers ON images.id = imagesteachers.id_images LEFT JOIN teachers ON imagesteachers.id_teachers = teachers.id WHERE images.id = ?;",
        [id]
    )) as unknown as Teacher[][] | undefined[][];
    await con.end();
    if (!data[0]?.id) return [];
    return data as Teacher[];
}

/**
 * Searches for tags by name prompt
 * @param prompt Tag name prompt
 * @returns Tag objects list
 */
export async function searchTeachers(prompt: string): Promise<Teacher[]> {
    const con = await getConnection();
    const [data] = (await con.query(
        'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") LIMIT 3;',
        [prompt]
    )) as unknown as Teacher[][] | undefined[][];
    await con.end();
    if (!data[0]?.id) return [];
    return data as Teacher[];
}

/**
 * Searches for tags, by name prompt, that are not related to given image
 * @param id Image id
 * @param prompt Tag name prompt
 * @returns Tag objects list
 */
export async function searchUnselectedTeachers(
    imageId: number,
    prompt: string
): Promise<Teacher[]> {
    const con = await getConnection();
    const [data] = (await con.query(
        'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") GROUP BY id HAVING NOT id IN ( SELECT teachers.id FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers WHERE imagesteachers.id_images = ? ) LIMIT 3;',
        [prompt, imageId]
    )) as unknown as Teacher[][] | undefined[][];
    await con.end();
    if (!data[0]?.id) return [];
    return data as Teacher[];
}

// --- Users ---
/**
 * Gets all user logins
 * @returns User logins list
 */
export async function getUsers(): Promise<string[]> {
    const con = await getConnection();
    const [data] = (await con.query("SELECT login FROM users;")) as unknown as
        | string[][]
        | undefined[][];
    await con.end();
    if (!data[0]) return [];
    return data as string[];
}

/**
 * Gets user password
 * @param login User login
 * @returns User password
 */
export async function getUser(login: string): Promise<string | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT password FROM users WHERE login = ?;",
        [login]
    )) as unknown as { password: string }[][] | undefined[][];
    await con.end();
    return data?.password ?? null;
}

/**
 * Gets user login by given auth token
 * @param token User auth token
 * @returns User login
 */
export async function getUserByToken(token: string): Promise<string | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT login FROM users WHERE token = ?;",
        [token]
    )) as unknown as { login: string }[][] | undefined[][];
    await con.end();
    return data?.login ?? null;
}

/**
 * Updates user auth token
 * @param login User login
 * @param token  User auth token
 */
export async function updateUserToken(
    login: string,
    token: string
): Promise<void> {
    const con = await getConnection();
    await con.query("UPDATE users SET token = ? WHERE login = ?;", [
        token,
        login,
    ]);
    await con.end();
}

/**
 * Updates users password
 * @param login User login
 * @param password User password
 */
export async function updateUserPassword(
    login: string,
    password: string
): Promise<void> {
    const con = await getConnection();
    await con.query("UPDATE users SET password = ? WHERE login = ?;", [
        password,
        login,
    ]);
    await con.end();
}

/**
 * Adds user
 * @param login User login
 * @param password User password
 */
export async function addUser(login: string, password: string): Promise<void> {
    const con = await getConnection();
    await con.query(
        "INSERT INTO users (id, login, password, token) VALUES (NULL, ?, ?, NULL);",
        [login, password]
    );
    await con.end();
}

/**
 * Deletes user
 * @param login User login
 */
export async function deleteUser(login: string): Promise<void> {
    const con = await getConnection();
    await con.query("DELETE FROM users WHERE login = ?;", [login]);
    await con.end();
}

// --- Other ---
/**
 * Gets amount of images
 * @returns Amount of images
 */
export async function getImageAmount(): Promise<number | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        'SELECT COUNT(*) AS "amount" FROM images;'
    )) as unknown as { amount: number }[][] | undefined[][];
    await con.end();
    return data?.amount ?? null;
}

/**
 * Gets amount of images grouped by tags
 * @returns Amount of images grouped by tags
 */
export async function getImageWithTagAmount(): Promise<number | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        'SELECT COUNT(DISTINCT id_images) AS "amount" FROM imagesteachers;'
    )) as unknown as { amount: number }[][] | undefined[][];
    await con.end();
    return data?.amount ?? null;
}

/**
 * Gets tags with amount of related images order descendly
 * @returns Tag amount objects list
 */
export async function getImageAmountOnTeachers(): Promise<TeacherCount[]> {
    const con = await getConnection();
    const [data] = (await con.query(
        'SELECT teachers.name, COUNT(imagesteachers.id_teachers) AS "amount" FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers GROUP BY imagesteachers.id_teachers ORDER BY amount DESC, name ASC;'
    )) as unknown as TeacherCount[][] | undefined[][];
    await con.end();
    if (!data[0]) return [];
    return data as TeacherCount[];
}

/**
 * Allows for quick single-connection handling of scraped images
 */
export class ScrapedImagesHandler {
    /**
     * Db connection
     */
    private connection: mysql.Connection | null = null;

    /**
     * Connects handler to db
     * > **You have to connect to db before using db queries!**
     */
    public async connect(): Promise<void> {
        await this.connection?.end();
        this.connection = await getConnection();
    }

    /**
     * Disconnects from db
     * > **You should always disconnect from db when finished using handler!**
     */
    public async disconnect(): Promise<void> {
        this.connection?.end();
        this.connection = null;
    }

    /**
     * Check if image url is present in `scrapedimages` table or `images` table
     * @param src Image url
     * @returns True if url is present in db
     */
    public async isSrcPresent(src: string): Promise<boolean> {
        if (!this.connection)
            throw Error("There is no running database connection");
        const [data] = (await this.connection.query(
            "SELECT id FROM scrapedimages WHERE src = ? UNION SELECT id FROM images WHERE src = ? LIMIT 1;",
            [src, src]
        )) as unknown as { id: number }[][];
        return data.length !== 0;
    }

    /**
     * Adds scraped image
     * @param src Source url for scraped image
     */
    public async addScrapedImage(src: string): Promise<void> {
        if (!this.connection)
            throw Error("There is no running database connection");
        await this.connection.query(
            "INSERT INTO scrapedimages (id, src, rejected) VALUES (NULL, ?, '0');",
            [src]
        );
    }
}

/**
 * Sets scraped image status as rejected
 * @param id Scraped image id
 */
export async function setScrapedImageAsRejected(id: number): Promise<void> {
    const con = await getConnection();
    await con.query("UPDATE scrapedimages SET rejected = '1' WHERE id = ?;", [
        id,
    ]);
    await con.end();
}

/**
 * Gets random scraped image which is not rejected
 * @returns Random scraped image or null if not present
 */
export async function getRandomScrapedImage(): Promise<ScrapedImage | null> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT id, src FROM scrapedimages WHERE rejected = 0 ORDER BY RAND() LIMIT 1;"
    )) as unknown as ScrapedImage[][];
    await con.end();
    return data ?? null;
}

/**
 * Gets number of not rejected scraped images
 * @returns Number of not rejected scraped images
 */
export async function getScrapedImageAmount(): Promise<number> {
    const con = await getConnection();
    const [[data]] = (await con.query(
        "SELECT COUNT(*) as 'count' FROM scrapedimages WHERE rejected = 0;"
    )) as unknown as { count: number }[][];
    await con.end();
    return data.count;
}

/**
 * Sets scraped image status as rejected
 * @param id Scraped image id
 * @returns Id of image in `images` table or null when image could not be added
 */
export async function transferScrapedImageToImages(
    id: number
): Promise<number | null> {
    const con = await getConnection();
    const [[dataSrc]] = (await con.query(
        "SELECT src FROM scrapedimages WHERE id = ?;",
        [id]
    )) as unknown as { src: string }[][] | undefined[][];
    if (!dataSrc?.src) return null;
    const src = dataSrc.src;
    await con.query(
        "INSERT INTO images (id, src, local) VALUES (NULL, ?, NULL);",
        [src]
    );
    await con.query("DELETE FROM scrapedimages WHERE id = ?;", [id]);
    const [[dataId]] = (await con.query(
        "SELECT id FROM images WHERE src = ?;",
        [src]
    )) as unknown as { id: number }[][] | undefined[][];
    await con.end();
    return dataId?.id ?? null;
}

/**
 * Deletes from sraped image by src
 * @param src Scraped image src
 */
export async function deleteScrapedImageBySrc(src: string): Promise<void> {
    const con = await getConnection();
    await con.query("DELETE FROM scrapedimages WHERE src = ?;", [src]);
    await con.end();
}

/**
 * Check if image url is present in `images` table
 * @param src Image url
 * @returns True if url is present in db
 */
export async function isImagePresent(src: string): Promise<boolean> {
    const con = await getConnection();
    const [data] = (await con.query(
        "SELECT id FROM images WHERE src = ? LIMIT 1;",
        [src]
    )) as unknown as { id: number }[][];
    await con.end();
    return data.length !== 0;
}
