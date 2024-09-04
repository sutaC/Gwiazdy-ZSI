import * as db from "$/data/db";
import { createHash } from "crypto";
import { Response, Request as ExRequest } from "express";

// --- Types ---

export interface Request extends ExRequest {
    authorized: string | null;
}

// --- Authentication ---
export async function authenticate(
    req: Request,
    res: Response,
    next: () => void
): Promise<void> {
    const { token } = req.signedCookies;
    req.authorized = null;

    if (!token) {
        next();
        return;
    }

    let user;
    try {
        user = await db.getUserByToken(token);
    } catch (error) {
        res.render("./layouts/error.ejs", {
            error: { code: 500, message: error },
        });
        return;
    }

    if (!user) {
        next();
        return;
    }

    req.authorized = user;
    next();
}

// --- Authorization ---
export function authorizePageRootAdmin(
    req: Request,
    res: Response,
    next: () => void
): void {
    if (req.authorized !== "admin") {
        res.status(403).render("./layouts/error.ejs", { error: { code: 403 } });
        return;
    }
    next();
}

export function authorizeApiRootAdmin(
    req: Request,
    res: Response,
    next: () => void
): void {
    if (req.authorized !== "admin") {
        res.sendStatus(403);
        return;
    }
    next();
}

export function authorizePage(
    req: Request,
    res: Response,
    next: () => void
): void {
    if (!req.authorized) {
        res.status(401).render("./layouts/error.ejs", { error: { code: 401 } });
        return;
    }
    next();
}

export function authorizeApi(
    req: Request,
    res: Response,
    next: () => void
): void {
    if (!req.authorized) {
        res.sendStatus(401);
        return;
    }
    next();
}

export function authorizePageToAdmin(
    req: Request,
    res: Response,
    next: () => void
): void {
    if (req.authorized) {
        res.status(101).redirect("/admin");
        return;
    }
    next();
}

export function authorizeApiToAdmin(
    req: Request,
    res: Response,
    next: () => void
): void {
    if (req.authorized) {
        res.status(303).send(
            '<script>window.location.replace("/admin")</script>'
        );
        return;
    }
    next();
}

// --- Functions ---
export function hashString(string: string): string {
    return createHash("sha256").update(string).digest("base64");
}

// --- Users ---
export async function authenticateUser(
    login: string,
    password: string
): Promise<string | null> {
    const dbPassword = await db.getUser(login);

    if (!dbPassword) {
        return "No user with this login was found";
    }

    if (hashString(password) !== dbPassword) {
        return "Incorrect password";
    }

    return null;
}

export function validatePassword(password: string | undefined): string | null {
    const pass = password;

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
