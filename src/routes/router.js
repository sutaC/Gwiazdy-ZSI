import { Router } from "express";
import * as responses from "./responses.js";

const router = Router();

// Urls

// --- Images ---
router.post("/img", responses.postImg);

router.get("/img/:photoid/next", responses.getImgNext);

router.get("/img/:photoid/previous", responses.getImgPrevious);

router.get("/randomimg", responses.getRandomImg);

// --- Tags ---
router.get("/api/tag", responses.getTag);

router.get("/api/imagetaglist/:tagid", responses.getImageTaglist);

// ---
export default router;
