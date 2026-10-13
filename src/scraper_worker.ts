import Scraper from "./data/Scraper.js";
import { deleteOldSearches } from "./data/db.js";

async function runScraper() {
    const scraper = new Scraper();
    try {
        console.log("Starting scraper...");
        await scraper.run(1, "auto");
        console.log("Scraper finished successfully");
    } catch (err) {
        console.error("Scraper failed", err);
    }
}

async function runDbCleanup() {
    try {
        console.error("Starting db cleanup...");
        await deleteOldSearches();
        console.error("Db finished successfully");
    } catch (err) {
        console.error("Db cleanup failed", err);
    }
}

// --- Main ---
await Promise.allSettled([
    runScraper().catch(null),
    runDbCleanup().catch(null),
]);
