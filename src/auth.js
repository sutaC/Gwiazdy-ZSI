import * as db from "./data/db.js";
import { createHash } from "crypto";

// --- Authentication ---
export async function authenticate(req, res, next) {
	const { token } = req.signedCookies;
	req.authorized = false;

	if (!token) {
		return next();
	}

	let user;
	try {
		user = await db.getUserByToken(token);
	} catch (error) {
		return res.render("./layouts/error.ejs", {
			error: { code: 500, message: error.message },
		});
	}

	if (!user) {
		return next();
	}

	req.authorized = true;
	next();
}

// --- Authorization ---
export function authorizePage(req, res, next) {
	if (!req.authorized) {
		return res
			.status(401)
			.render("./layouts/error.ejs", { error: { code: 401 } });
	}
	next();
}

export function authorizeApi(req, res, next) {
	if (!req.authorized) {
		return res.sendStatus(401);
	}
	next();
}

export function authorizePageToAdmin(req, res, next) {
	if (req.authorized) {
		return res.status(101).redirect("/admin");
	}
	next();
}

export function authorizeApiToAdmin(req, res, next) {
	if (req.authorized) {
		return res
			.status(303)
			.send('<script>window.location.replace("/admin")</script>');
	}
	next();
}

// --- Functions ---
export function hashString(string) {
	return createHash("sha256", process.env.SECRET)
		.update(string)
		.digest("base64");
}

// --- Users ---
export async function authenticateUser(login, password) {
	if (!String(login) || !String(password)) {
		return "Login & password required";
	}

	const dbPassword = await db.getUser(login);

	if (!dbPassword) {
		return "No user with this login was found";
	}

	if (hashString(password) !== dbPassword) {
		return "Incorrect password";
	}

	return null;
}

export function validatePassword(password) {
	const pass = String(password);

	// Required
	if (!pass) {
		return "Password is required";
	}

	// Length
	if (pass.length < 8) {
		return "Password must be at least 8 characters long";
	}

	// Lowercase letter
	if (!pass.match(/[a-z]+/)) {
		return "Password must have at least one lowercase letter";
	}

	// Capital letter
	if (!pass.match(/[A-Z]+/)) {
		return "Password must have at least one capital letter";
	}

	// Digit
	if (!pass.match(/\d+/)) {
		return "Password must have at least one digit";
	}

	// Special character
	if (!pass.match(/[!@#$%,.?:;]+/)) {
		return "Password must have at least one special character (!@#$%,.?:;)";
	}

	// Password valid
	return null;
}
