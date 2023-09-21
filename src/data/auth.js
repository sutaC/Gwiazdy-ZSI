import * as db from "./db.js";
import { createHash } from "crypto";


export async function authorize(req, res, next){
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

export function authenticatePage(req, res, next) {
	if (!req.authorized) {
		res.status(401).render("./layouts/error.ejs", { error: { code: 401 } });
        next()
	}
}

export function authenticateApi(req, res, next) {
	if (!req.authorized) {
		res.sendStatus(401);
        next();
	}
}

export function hashString(string){
    return createHash("sha256", process.env.SECRET)
    .update(string)
    .digest("base64");
}

export function validatePassword(password){
	// TODO: validation

	return null;
}