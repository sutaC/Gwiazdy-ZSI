import * as db from "$/data/db";
import { createHash } from "crypto";
import { Response, Request as ExRequest } from "express";

// --- Types ---

export interface Request extends ExRequest {
    authorized: string | null;
}

// --- Authentication ---
/**
 * Middleweare for user authentication. Attaches `authorized` token to given request.
 */
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
/**
 * Middleweare for user authorization only for `root admin`.
 * @returns If unauthorized send 401 code and renders error page.
 */
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

/**
 * Middleweare for user authorization only for `root admin` on api route.
 * @returns If unauthorized send 401 code.
 */
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

/**
 * Middleweare for user authorization.
 * @returns If unauthorized send 401 code and renders error page.
 */
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

/**
 * Middleweare for user authorization on api route.
 * @returns If unauthorized send 401 code.
 */
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

/**
 * Middleweare for user redirection if authorized.
 * @returns If authorized redirects to `/admin`.
 */
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

/**
 * Middleweare for user redirection if authorized on api route.
 * @returns If authorized redirects to `/admin` on client end.
 */
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
/**
 * Hashes given string.
 * @param string Value to be hashed
 * @returns Hashed value
 */
export function hashString(string: string): string {
    return createHash("sha256").update(string).digest("base64");
}

// --- Users ---
/**
 * Authenticates user by given credentials.
 * @param login User login
 * @param password User password
 * @returns `null` or error message if error appears
 */
export async function authenticateUser(
    login: string,
    password: string
): Promise<string | null> {
    const dbPassword = await db.getUser(login);
    if (!dbPassword) return "Nieprawidłowy login lub hasło";
    if (hashString(password) !== dbPassword)
        return "Nieprawidłowy login lub hasło";
    return null;
}

/**
 * Validates user password. Checks if:
 * - is present
 * - is at least 8 characters long
 * - does it have a lowercase letter
 * - does it have a biggercase letter
 * - does it have a number
 * - does it have a special symbol (`!@#$%,.?:;`)
 * @param password User password
 * @returns `null` or error message if error appears
 */
export function validatePassword(password?: string): string | null {
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
