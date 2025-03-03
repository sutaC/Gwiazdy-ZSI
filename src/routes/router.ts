import * as responses from "./responses.js";
import * as auth from "./auth.js";
import { Router } from "express";

/**
 * App router
 */
const router = Router();

// Authentication
router.use(auth.authenticate as () => Promise<void>);

// --- Pages ---
router.get("/", responses.getRoot as () => Promise<void>);

router.get("/about", responses.getAbout as () => Promise<void>);

router.get("/statistics", responses.getStatistics as () => Promise<void>);

// --- Images ---
router.get("/randomimg", responses.getRandomImg as () => Promise<void>);

router.get("/img/:photoid", responses.getImg as () => Promise<void>);

router.get(
    "/img/:photoid/update",
    auth.authorizePage as () => Promise<void>,
    responses.getImgUpdate as () => Promise<void>
);

router.post(
    "/img/:photoid/update",
    auth.authorizeApi as () => void,
    responses.postImgUpdate as () => Promise<void>
);

router.delete(
    "/img/:photoid/delete",
    auth.authorizeApi as () => void,
    responses.deleteImageDelete as () => Promise<void>
);

router.get(
    "/addImg",
    auth.authorizePage as () => Promise<void>,
    responses.getAddImg as () => Promise<void>
);

router.post(
    "/api/addImg",
    auth.authorizeApi as () => void,
    responses.postApiAddImg as () => Promise<void>
);

// --- Admin page ---
router.get(
    "/login",
    auth.authorizePageToAdmin as () => Promise<void>,
    responses.getLogin as () => Promise<void>
);

router.post(
    "/login",
    auth.authorizeApiToAdmin as () => void,
    responses.postLogin as () => Promise<void>
);

router.get(
    "/admin",
    auth.authorizePage as () => Promise<void>,
    responses.getAdmin as () => Promise<void>
);

router.get(
    "/logout",
    auth.authorizePage as () => Promise<void>,
    responses.getLogout as () => Promise<void>
);

router.get(
    "/reset",
    auth.authorizePage as () => Promise<void>,
    responses.getReset as () => Promise<void>
);

router.post(
    "/reset",
    auth.authorizeApi as () => void,
    responses.postReset as () => Promise<void>
);

router.get(
    "/logs",
    auth.authorizePage as () => Promise<void>,
    responses.getLogs as () => Promise<void>
);

router.delete(
    "/logs",
    auth.authorizePage as () => Promise<void>,
    responses.deleteLogs as () => Promise<void>
);

// --- Root Admin access ---
router.get(
    "/users",
    auth.authorizePage as () => Promise<void>,
    auth.authorizePageRootAdmin as () => Promise<void>,
    responses.getUsers as () => Promise<void>
);

router.post(
    "/addAdminUser",
    auth.authorizeApi as () => void,
    auth.authorizeApiRootAdmin as () => void,
    responses.postAddAdminUser as () => Promise<void>
);

router.delete(
    "/deleteUser/:login",
    auth.authorizePage as () => Promise<void>,
    auth.authorizeApiRootAdmin as () => void,
    responses.deleteDeleteUser as () => Promise<void>
);

// --- Tags ---
router.get(
    "/tags",
    auth.authorizePage as () => Promise<void>,
    responses.getTags as () => Promise<void>
);

router.put(
    "/tags",
    auth.authorizeApi as () => void,
    responses.putAddToTags as () => Promise<void>
);

router.patch(
    "/tags/:id",
    auth.authorizeApi as () => void,
    responses.patchUpdateInTags as () => Promise<void>
);

router.delete(
    "/tags/:id",
    auth.authorizeApi as () => void,
    responses.deleteDeleteFromTags as () => Promise<void>
);

router.get("/api/tag", responses.getTag as () => Promise<void>);

router.put(
    "/api/img/:photoid/tag/:tagid",
    auth.authorizeApi as () => void,
    responses.putImgTag as () => Promise<void>
);

router.delete(
    "/api/img/:photoid/tag/:tagid",
    auth.authorizeApi as () => void,
    responses.deleteImgTag as () => Promise<void>
);

router.get(
    "/api/img/:photoid/tag",
    auth.authorizeApi as () => void,
    responses.getImgTag as () => Promise<void>
);

router.get(
    "/api/imagetaglist/:tagid",
    responses.getImageTaglist as () => Promise<void>
);

// --- Scraper ---

router.get(
    "/scraper",
    auth.authorizePage as () => void,
    responses.getScraper as () => Promise<void>
);

router.post(
    "/scraper/scrape",
    auth.authorizeApiRootAdmin as () => void,
    responses.postScraperScrape as () => Promise<void>
);

// ---
export default router;
