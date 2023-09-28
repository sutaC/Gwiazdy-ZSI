import { Router } from "express";
import * as responses from "./responses.js";
import {
	authorizeApi,
	authorizePage,
	authorizePageToAdmin,
	authorizeApiToAdmin,
} from "./auth.js";

const router = Router();

// Urls

router.get("/", responses.getRoot);

router.get("/login", authorizePageToAdmin, responses.getLogin);

router.post("/login", authorizeApiToAdmin, responses.postLogin);

router.get("/admin", authorizePage, responses.getAdmin);

router.get("/logout", authorizePage, responses.getLogout);

router.get("/reset", authorizePage, responses.getReset);

router.post("/reset", authorizeApi, responses.postReset);

// --- Images ---
router.get("/img/:photoid", responses.getImg);

router.post("/img", responses.postImg);

router.get("/img/:photoid/next", responses.getImgNext);

router.get("/img/:photoid/previous", responses.getImgPrevious);

router.get("/randomimg", responses.getRandomImg);

// --- Tags ---
router.put("/api/img/:photoid/tag/:tagid", authorizeApi, responses.putImgTag);

router.delete(
	"/api/img/:photoid/tag/:tagid",
	authorizeApi,
	responses.deleteImgTag
);

router.get("/api/img/:photoid/tag", authorizeApi, responses.getImgTag);

router.get("/api/tag", responses.getTag);

router.get("/api/imagetaglist/:tagid", responses.getImageTaglist);

// export
export default router;
