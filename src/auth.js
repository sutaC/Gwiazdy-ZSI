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

export function validatePassword(password) {
	// TODO: validation

	return null;
}
