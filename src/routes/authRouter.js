import { Router } from "express";
import * as responses from "./responses.js";
import * as auth from "./auth.js";

const router = Router();

// Authentication
router.use(auth.authenticate);

//  Urls
router.get("/", responses.getRoot);

// --- Images ---
router.get("/img/:photoid", responses.getImg);

router.get("/addImg", auth.authorizePage, responses.getAddImg);

router.post("/api/addImg", auth.authorizeApi, responses.postApiAddImg);

// --- Admin page ---
router.get("/login", auth.authorizePageToAdmin, responses.getLogin);

router.post("/login", auth.authorizeApiToAdmin, responses.postLogin);

router.get("/admin", auth.authorizePage, responses.getAdmin);

router.get("/logout", auth.authorizePage, responses.getLogout);

router.get("/reset", auth.authorizePage, responses.getReset);

router.post("/reset", auth.authorizeApi, responses.postReset);

router.get("/log", auth.authorizePage, responses.getLog);

router.delete("/log", auth.authorizePage, responses.deleteLog);

// --- Tags ---
router.put(
	"/api/img/:photoid/tag/:tagid",
	auth.authorizeApi,
	responses.putImgTag
);

router.delete(
	"/api/img/:photoid/tag/:tagid",
	auth.authorizeApi,
	responses.deleteImgTag
);

router.get("/api/img/:photoid/tag", auth.authorizeApi, responses.getImgTag);

// ---
export default router;
