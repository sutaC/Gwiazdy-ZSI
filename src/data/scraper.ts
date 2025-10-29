import Logger from "./Logger";
import path from "path";
import fs from "fs/promises";
import { JSDOM } from "jsdom";
import { ScrapedImagesHandler } from "./db";
import { directory } from "$/app";

export default class Scraper {
    private autoScrapingId: number | null = null;
    private jobStartTs: number | null = null;
    private lastResults = {
        limit: 0,
        found: 0,
        added: 0,
        timeElapsed: 0,
        type: "",
        cachedSkip: -1,
        nextAutoScraping: 0,
        cachedArticles: [] as string[],
    };
    private readonly SAVEFILE: string;

    constructor(callback?: () => unknown) {
        this.SAVEFILE = path.join(directory, "scrapersave.json");
        this.initFileSave().then(callback);
    }

    // --- Public methods
    /**
     * Creates job of async scraping image urls from `www.zsi.kielce.pl`. Onlu one jon can be running.
     * @param limit Limit of read article pages (If unset scrapes all pages)
     */
    public async run(limit?: number): Promise<void> {
        if (this.isRunning()) return;
        this.jobStartTs = Date.now();
        this.reset();
        this.lastResults.limit = limit ?? 0;
        this.lastResults.type = "manualny";
        try {
            await this.scrapingJob(this.lastResults.limit);
        } catch (err) {
            Logger.error(`Error ocurred while scraping: ${String(err)}`);
        } finally {
            this.lastResults.timeElapsed = Date.now() - this.jobStartTs;
            this.jobStartTs = null;
            Logger.info(
                `Finished scraping job - Time elapsed: ${
                    this.lastResults.timeElapsed / 1000
                }s - Added imgs: ${this.lastResults.added}`
            );
        }
    }

    /**
     * Sets automatic scraping
     * @param interval Interval of automatic scraping in ms
     */
    public setAutoScraping(interval: number): void {
        // Auto scraping fn
        const fn = async () => {
            await this.autoScrapingJob();
            this.lastResults.nextAutoScraping = Date.now() + interval;
            this.saveToFile();
        };
        // Set fn
        if (this.lastResults.nextAutoScraping === 0) {
            this.lastResults.nextAutoScraping = Date.now() + interval;
            this.saveToFile();
            setInterval(fn, interval);
            return;
        }
        const now = Date.now();
        if (now >= this.lastResults.nextAutoScraping) {
            fn().then(() => {
                this.lastResults.nextAutoScraping = now + interval;
                this.saveToFile();
                setInterval(fn, interval);
            });
        } else if (this.lastResults.nextAutoScraping - now >= interval) {
            this.lastResults.nextAutoScraping = now + interval;
            this.saveToFile();
            setInterval(fn, interval);
        } else {
            setTimeout(() => {
                fn().then(() => {
                    setInterval(fn, interval);
                });
            }, this.lastResults.nextAutoScraping - now);
        }
        this.saveToFile();
    }

    /**
     * Clears automatic scraping
     */
    public clearAutoScraping(): void {
        if (this.autoScrapingId === null) return;
        clearInterval(this.autoScrapingId);
    }

    /**
     * Is scraping job currently running
     * @returns True if job is running
     */
    public isRunning(): boolean {
        return this.jobStartTs != null;
    }

    /**
     * Gets results of last scraping job
     * @returns Results of last scraping job
     */
    public getLastResults() {
        return {
            type: this.lastResults.type,
            added: this.lastResults.added,
            found: this.lastResults.found,
            limit: this.lastResults.limit,
            cachedSkip: this.lastResults.cachedSkip,
            timeElapsed: this.lastResults.timeElapsed,
        };
    }

    // --- Private methods
    private async autoScrapingJob() {
        if (this.isRunning()) {
            Logger.warning(
                "Aborted automatic scraping due to active scraping job"
            );
            return;
        }
        this.jobStartTs = Date.now();
        this.reset();
        this.lastResults.limit = 1;
        this.lastResults.type = "automatyczny";
        try {
            await this.scrapingJob(1);
        } catch (err) {
            Logger.error(String(err));
        } finally {
            this.lastResults.timeElapsed = Date.now() - this.jobStartTs;
            this.jobStartTs = null;
            Logger.info(
                `Finished automatic scraping job - Time elapsed: ${
                    this.lastResults.timeElapsed / 1000
                }s - Added imgs: ${this.lastResults.added}`
            );
        }
    }

    private async scrapingJob(limit: number) {
        const images = await this.scrape(limit);
        if (images.length === 0) {
            await this.saveToFile();
            return;
        }
        this.lastResults.found += images.length;
        const dbHandler = new ScrapedImagesHandler();
        await dbHandler.connect();
        for (const src of images) {
            if (await dbHandler.isSrcPresent(src)) continue;
            await dbHandler.addScrapedImage(src);
            this.lastResults.added += 1;
        }
        await dbHandler.disconnect();
        await this.saveToFile();
    }

    /**
     * Scrapes image urls from `www.zsi.kielce.pl`
     * @param limit Limit of read article pages (If unset scrapes all pages)
     */
    private async scrape(limit?: number): Promise<string[]> {
        if (limit === undefined) limit = Infinity;
        if (limit < 0) throw Error("Cannot set negative limit");
        if (limit === 1) this.lastResults.cachedSkip = 0;
        const imageUrls: string[] = [];
        let articleUrls: string[] = [];
        let mainPage: Document;
        let res: Response;
        for (let page = 1; page <= limit; page++) {
            if (page > 1) await this.sleep(2000);
            try {
                res = await fetch(`https://www.zsi.kielce.pl/page/${page}/`);
                if (!res.ok)
                    throw new Error(
                        `Page ${page} recieved status ${res.status}`
                    );
                mainPage = new JSDOM(await res.text()).window.document;
            } catch (err) {
                Logger.warning(`Error ocurred while scraping: ${String(err)}`);
                break;
            }
            articleUrls = Array.from(
                mainPage.querySelectorAll<HTMLAnchorElement>(
                    "main article .entry-header .entry-title a"
                )
            )
                .map((anchor) => anchor.href)
                .filter((url) => url.startsWith("https://www.zsi.kielce.pl/"));
            for (const url of articleUrls) {
                if (
                    limit === 1 &&
                    this.lastResults.cachedArticles.includes(url)
                ) {
                    this.lastResults.cachedSkip++;
                    continue;
                }
                await this.sleep(2000);
                await this.scrapeImageUrls(url, imageUrls);
            }
        }
        if (limit === 1) this.lastResults.cachedArticles = articleUrls;
        this.trimImagesResolution(imageUrls);
        return this.removeDuplicates(imageUrls);
    }

    /**
     * Scrapes images from article page
     * @param articleUrl Url to article page
     * @param outImageUrls Output array of image urls
     */
    private async scrapeImageUrls(
        articleUrl: string,
        outImageUrls: string[]
    ): Promise<void> {
        let articlePage: Document;
        try {
            const res = await fetch(articleUrl);
            articlePage = new JSDOM(await res.text()).window.document;
        } catch (err) {
            Logger.error(String(err));
            return;
        }
        const images =
            articlePage.querySelectorAll<HTMLImageElement>("main article img");
        for (const image of images) {
            if (!image.src.startsWith("https://www.zsi.kielce.pl/")) continue;
            outImageUrls.push(image.src);
        }
    }

    /**
     * Removes resolution annotation from urls
     * @param imageUrls Image urls
     */
    private trimImagesResolution(imageUrls: string[]): void {
        const resolutionRegex = /-\d+x\d+\..+$/gm;
        let resolution: string | undefined;
        let resolutionIdx: number;
        let extentionIdx: number;
        let queryIdx: number;
        let url: string;
        for (let i = 0; i < imageUrls.length; i++) {
            url = imageUrls[i];
            url = url.replace("thumb/", "");
            queryIdx = url.lastIndexOf("?");
            if (queryIdx > -1) url = url.substring(0, queryIdx);
            resolution = url.match(resolutionRegex)?.toString();
            if (!resolution) {
                imageUrls[i] = url;
                continue;
            }
            resolutionIdx = url.lastIndexOf(resolution);
            extentionIdx = url.lastIndexOf(".");
            imageUrls[i] =
                url.substring(0, resolutionIdx) + url.substring(extentionIdx);
        }
    }

    private async saveToFile() {
        try {
            const file = await fs.open(this.SAVEFILE, "w");
            const content = JSON.stringify(this.lastResults);
            await file.write(content);
            await file.close();
        } catch (err) {
            Logger.error(
                `Error ocurred while saving scraping results ${String(err)}`
            );
        }
    }

    private async initFileSave() {
        try {
            await fs.access(this.SAVEFILE);
        } catch (err) {
            await this.saveToFile();
            return;
        }
        let content: string = "";
        try {
            const file = await fs.open(this.SAVEFILE, "r");
            content = (await file.readFile()).toString();
            file.close();
        } catch (err) {
            Logger.error(
                `Error ocurred while reading scraping results ${String(err)}`
            );
        }
        const data = JSON.parse(content);
        if (!this.isSameTypeObject(this.lastResults, data)) {
            Logger.warning(
                "Saved scraping data is not of valid type, overwriting"
            );
            await this.saveToFile();
            return;
        }
        this.lastResults = data;
    }

    /**
     * Removes duplicate values in array
     * @param array Array to reduce
     * @returns Reduced array
     */
    private removeDuplicates<T>(array: T[]): T[] {
        return Array.from(new Set(array));
    }

    /**
     * Sleeps given ammount of time
     * @param ms Time in ms
     */
    private async sleep(ms: number): Promise<void> {
        return new Promise((resolve, reject) => setTimeout(resolve, ms));
    }

    /**
     * Resets last results
     */
    private reset(): void {
        this.lastResults.limit = 0;
        this.lastResults.found = 0;
        this.lastResults.added = 0;
        this.lastResults.cachedSkip = -1;
        this.lastResults.type = "";
        this.lastResults.timeElapsed = 0;
    }

    private isSameTypeObject(a: object, b: Object): boolean {
        const ka = Object.keys(a).sort();
        const kb = Object.keys(b).sort();
        if (JSON.stringify(ka) !== JSON.stringify(kb)) return false;
        const ma = new Map(Object.entries(ka));
        const mb = new Map(Object.entries(kb));
        for (const k of ka)
            if (typeof ma.get(k) !== typeof mb.get(k)) return false;
        return true;
    }
}

/**
 * Removes resolution annotation from url
 * @param url Image url
 * @returns Trimed url
 */
export function trimImageResolution(url: string): string {
    const resolutionRegex = /-\d+x\d+\..+$/gm;
    url = url.replace("thumb/", "");
    const queryIdx = url.lastIndexOf("?");
    if (queryIdx > -1) url = url.substring(0, queryIdx);
    const resolution = url.match(resolutionRegex)?.toString();
    if (!resolution) {
        return url;
    }
    const resolutionIdx = url.lastIndexOf(resolution);
    const extentionIdx = url.lastIndexOf(".");
    return url.substring(0, resolutionIdx) + url.substring(extentionIdx);
}
