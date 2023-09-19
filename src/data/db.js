import mysql from "mysql2/promise";

async function getConnection() {
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		database: "gwiazdy-zsi",
	});
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

export async function getNextImg(id) {
	const con = await getConnection();
	const [[data]] = await con.query(
		"SELECT id FROM images WHERE id > ? LIMIT 1;",
		[Number(id)]
	);
	con.end();

	return data.id;
}
export async function getPreviousImg(id) {
	const con = await getConnection();
	const [[data]] = await con.query(
		"SELECT id FROM images WHERE id < ? ORDER BY id DESC LIMIT 1;",
		[Number(id)]
	);
	con.end();

	return data.id;
}

export async function getRandomImg() {
	const con = await getConnection();
	const [[data]] = await con.query(
		"SELECT id FROM images ORDER BY RAND() LIMIT 1;"
	);
	con.end();

	return data.id;
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

export async function getTeachers() {
	const con = await getConnection();
	const [data] = await con.query("SELECT * FROM teachers;");
	con.end();

	return data;
}

export async function getSelectedTeachers(imageId) {
	const con = await getConnection();
	const [data] = await con.query(
		"SELECT teachers.* FROM images LEFT JOIN imagesteachers ON images.id = imagesteachers.id_images LEFT JOIN teachers ON imagesteachers.id_teachers = teachers.id WHERE images.id = ?;",
		[imageId]
	);
	con.end();

	if (!data[0].id) {
		return [];
	}

	return data;
}

export async function searchTeachers(prompt){
	const con = await getConnection();
	const [data] = await con.query(
		'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") LIMIT 5;',
		[String(prompt)]
	);
	con.end();

	if (!data[0]) {
		return [];
	}

	return data;
}

export async function searchUnselectedTeachers(imageId, prompt) {
	const con = await getConnection();
	const [data] = await con.query(
		'SELECT * FROM teachers WHERE name LIKE CONCAT("%", ?, "%") GROUP BY id HAVING NOT id IN ( SELECT teachers.id FROM teachers JOIN imagesteachers ON teachers.id = imagesteachers.id_teachers WHERE imagesteachers.id_images = ? ) LIMIT 5;',
		[String(prompt), Number(imageId)]
	);
	con.end();

	if (!data[0]) {
		return [];
	}

	return data;
}
