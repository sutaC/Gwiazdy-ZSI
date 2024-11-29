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
        return "Nie znaleziono użytkownika o tym loginie";
    }

    if (hashString(password) !== dbPassword) {
        return "Nieprawidłowe hasło";
    }

    return null;
}

export function validatePassword(password: string | undefined): string | null {
    const pass = password;

    // Required
    if (!pass) {
        return "Hasło jest wymagane";
    }

    // Length
    if (pass.length < 8) {
        return "Hasło musi mieć co najmniej 8 znaków";
    }

    // Lowercase letter
    if (!pass.match(/[a-z]+/)) {
        return "Hasło musi zawierać co najmniej jedną małą literę";
    }

    // Capital letter
    if (!pass.match(/[A-Z]+/)) {
        return "Hasło musi zawierać co najmniej jedną wielką literę";
    }

    // Digit
    if (!pass.match(/\d+/)) {
        return "Hasło musi zawierać co najmniej jedną cyfrę";
    }

    // Special character
    if (!pass.match(/[!@#$%,.?:;]+/)) {
        return "Hasło musi zawierać co najmniej jeden znak specjalny (!@#$%,.?:;)";
    }

    // Password valid
    return null;
}
