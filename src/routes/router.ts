import { Router } from "express";
import * as responses from "$/routes/responses";

const router = Router();

// Urls

router.get("/statistics", responses.getStatistics as () => Promise<void>);

router.get("/about", responses.getAbout as () => Promise<void>);

// --- Images ---
router.post("/img", responses.postImg as () => Promise<void>);

router.get("/img/:photoid/next", responses.getImgNext as () => Promise<void>);

router.get(
    "/img/:photoid/previous",
    responses.getImgPrevious as () => Promise<void>
);

router.get("/randomimg", responses.getRandomImg as () => Promise<void>);

// --- Tags ---
router.get("/api/tag", responses.getTag as () => Promise<void>);

router.get(
    "/api/imagetaglist/:tagid",
    responses.getImageTaglist as () => Promise<void>
);

// ---
export default router;
