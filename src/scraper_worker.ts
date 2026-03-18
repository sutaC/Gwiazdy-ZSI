import Scraper from "./data/Scraper.js";

const scraper = new Scraper();

try {
    console.log("Starting scraper...");
    await scraper.run(1, "auto");
    console.log("Scraper finished successfully");
} catch (err) {
    console.error("Scraper failed", err);
}
