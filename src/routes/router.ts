import * as responses from "$/routes/responses";
import { Router } from "express";

/**
 * Router for regular pages
 */
const router = Router();

// Urls

router.get("/statistics", responses.getStatistics as () => Promise<void>);

router.get("/about", responses.getAbout as () => Promise<void>);

// --- Images ---
router.get("/randomimg", responses.getRandomImg as () => Promise<void>);

// --- Tags ---
router.get("/api/tag", responses.getTag as () => Promise<void>);

router.get(
    "/api/imagetaglist/:tagid",
    responses.getImageTaglist as () => Promise<void>
);

// ---
export default router;
