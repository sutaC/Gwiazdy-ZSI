import mysql from "mysql2/promise";
import { addLog } from "./log.js";

async function getConnection() {
	try {
		return mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
		});
	} catch (error) {
		addLog(error);
	}
}

// --- Imgs ---
export async function getImgById(id) {
	const con = await getConnection();
	const [[data]] = await con.query("SELECT * FROM images WHERE id = ?;", [
		Number(id),
	]);
	con.end();

	return data;
}

export async function getImgsByTagId(tagid, list) {
	const con = await getConnection();

	const limit = (list - 1) * 5;

	const [data] = await con.query(
		"SELECT images.* FROM images JOIN imagesteachers ON images.id = imagesteachers.id_images WHERE imagesteachers.id_teachers = ? LIMIT ?, 5;",
		[Number(tagid), Number(limit)]
	);
	con.end();

	return !data[0] ? [] : data;
}

export async function getNextImg(id) {
	const con = await getConnection();
	const [[data]] = await con.query(
		"SELECT id FROM images WHERE id > ? LIMIT 1;",
		[Number(id)]
	);
	con.end();

	return data ? data.id : null;
}
export async function getPreviousImg(id) {
	const con = await getConnection();
	const [[data]] = await con.query(
		"SELECT id FROM images WHERE id < ? ORDER BY id DESC LIMIT 1;",
		[Number(id)]
	);
	con.end();

	return data ? data.id : null;
}

export async function getRandomImg() {
	const con = await getConnection();
	const [[data]] = await con.query(
		"SELECT id FROM images ORDER BY RAND() LIMIT 1;"
	);
	con.end();

	return data ? data.id : null;
}

export async function addImg(src, local) {
	if (src == undefined && local == undefined) {
		throw new Error("Cannot insert image witchout src or local.");
	}

	const con = await getConnection();

	await con.query(
		"INSERT INTO images (id, src, local) VALUES (NULL, ?, ?);",
		[src ?? "", local ?? ""]
	);

	let data;

	if (src) {
		[[data]] = await con.query("SELECT id FROM images WHERE src = ?;", [
			src,
		]);
	} else if (local) {
		[[data]] = await con.query("SELECT id FROM images WHERE local = ?;", [
			local,
		]);
	}

	con.end();

	return data ? data.id : null;
}

export async function updateImg(photoid, src, local) {
	const con = await getConnection();

	if (photoid == undefined || src == undefined || local == undefined) {
		throw new Error("Required parametrs to update are missing");
	}

	await con.query("UPDATE images SET src = ?, local = ? WHERE id = ?;", [
		src,
		local,
		photoid,
	]);

	con.end();
}

export async function deleteImage(photoid) {
	const con = await getConnection();

	if (!photoid) {
		throw new Error("Required parametrs to delete are missing");
	}

	await con.query("DELETE FROM images WHERE id = ?;", [photoid]);

	con.end();
}

// --- Tags ---
export async function addTag(imageId, teachersId) {
	const con = await getConnection();
	await con.query(
		"INSERT INTO imagesteachers (id, id_images, id_teachers) VALUES (NULL, ?, ?);",
		[imageId, teachersId]
	);
	const [[data]] = await con.query("SELECT * FROM teachers WHERE id = ?;", [
		teachersId,
	]);
	con.end();

	return data;
}

export async function deleteTag(imageID, teachersID) {
	const con = await getConnection();
	await con.query(
		"DELETE FROM imagesteachers WHERE id_images = ? AND id_teachers = ?;",
		[imageID, teachersID]
	);
	con.end();
}

// --- Teachers ---

export async function getTags() {
	const con = await getConnection();
	const [data] = await con.query("SELECT * FROM teachers ORDER BY name;");
	con.end();

	return data;
}

export async function addToTags(name) {
	if (!String(name)) {
		throw new Error("Missing required arguments to add tag");
	}

	const con = await getConnection();

	await con.query("INSERT INTO teachers (id, name) VALUES (NULL, ?)", [
		String(name),
	]);

	const [[data]] = await con.query(
		"SELECT id FROM teachers WHERE name = ? LIMIT 1;",
		[String(name)]
	);

	con.end();

	return data.id ?? null;
}

export async function updateInTags(id, name) {
	if (!Number(id) || !String(name)) {
		throw new Error("Missing required arguments to udate tag");
	}

	const con = await getConnection();

	await con.query("UPDATE teachers SET name = ? WHERE id = ?;", [
		String(name),
		Number(id),
	]);

	con.end();
}

export async function deleteFromTags(id) {
	if (!Number(id)) {
		throw new Error("Missing required arguments to delete tag");
	}

	const con = await getConnection();

	await con.query("DELETE FROM teachers WHERE id = ?;", [Number(id)]);

	con.end();
}

export async function getSelectedTeachers(imageId) {
	const con = await getConnection();
	const [data] = await con.query(
		"SELECT teachers.* FROM images LEFT JOIN imagesteachers ON images.id = imagesteachers.id_images LEFT JOIN teachers ON imagesteachers.id_teachers = teachers.id WHERE images.id = ?;",
		[imageId]
	);
	con.end();

	return !data[0].id ? [] : data;
}

export async function searchTeachers(prompt) {
	const con = await getConnection();
	const [data] = await con.query(
		'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") LIMIT 3;',
		[String(prompt)]
	);
	con.end();

	return !data[0] ? [] : data;
}

export async function searchUnselectedTeachers(imageId, prompt) {
	const con = await getConnection();
	const [data] = await con.query(
		'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") GROUP BY id HAVING NOT id IN ( SELECT teachers.id FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers WHERE imagesteachers.id_images = ? ) LIMIT 3;',
		[String(prompt), Number(imageId)]
	);
	con.end();

	return !data[0] ? [] : data;
}

// --- Users ---

export async function getUsers() {
	const con = await getConnection();

	const [data] = await con.query("SELECT login FROM users;");
	con.end();

	return !data[0] ? [] : data;
}

export async function getUser(login) {
	const con = await getConnection();

	const [[data]] = await con.query(
		"SELECT password FROM users WHERE login = ?;",
		[String(login)]
	);
	con.end();

	return data ? data.password : null;
}

export async function getUserByToken(token) {
	const con = await getConnection();

	const [[data]] = await con.query(
		"SELECT login FROM users WHERE token = ?;",
		[String(token)]
	);
	con.end();

	return data ? data.login : null;
}

export async function updateUserToken(login, token) {
	const con = await getConnection();

	await con.query("UPDATE users SET token = ? WHERE login = ?;", [
		String(token),
		String(login),
	]);

	con.end();
}

export async function updateUserPassword(login, password) {
	const con = await getConnection();

	await con.query("UPDATE users SET password = ? WHERE login = ?;", [
		String(password),
		String(login),
	]);

	con.end();
}

export async function addUser(login, password) {
	const con = await getConnection();

	await con.query(
		"INSERT INTO users (id, login, password, token) VALUES (NULL, ?, ?, NULL);",
		[String(login), String(password)]
	);

	con.end();
}

export async function deleteUser(login) {
	const con = await getConnection();

	await con.query("DELETE FROM users WHERE login = ?;", [String(login)]);

	con.end();
}

// ---

export async function getImageAmmount() {
	const con = await getConnection();
	const [[data]] = await con.query(
		'SELECT COUNT(*) AS "ammount" FROM images;'
	);
	con.end();

	return data.ammount ?? null;
}

export async function getImageWithTagAmmount() {
	const con = await getConnection();
	const [[data]] = await con.query(
		'SELECT COUNT(DISTINCT id_images) AS "ammount" FROM imagesteachers;'
	);
	con.end();

	return data.ammount ?? null;
}

export async function getImageAmmountOnTeachers() {
	const con = await getConnection();
	const [data] = await con.query(
		'SELECT teachers.name, COUNT(imagesteachers.id_teachers) AS "ammount" FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers GROUP BY imagesteachers.id_teachers ORDER BY ammount DESC;'
	);
	con.end();

	return !data[0].name ? [] : data;
}
