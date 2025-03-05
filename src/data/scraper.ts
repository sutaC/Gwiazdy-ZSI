import { JSDOM } from "jsdom";
import { ScrapedImagesHandler } from "./db";
import Logger from "./Logger";

export default class ScrapingJob {
    private jobActive: boolean = false;
    private lastResults = {
        limit: 0,
        found: 0,
        added: 0,
    };

    private reset(): void {
        this.lastResults = {
            limit: 0,
            found: 0,
            added: 0,
        };
    }

    /**
     * Creates job of async scraping image urls from `www.zsi.kielce.pl`. Onlu one jon can be running.
     * @param limit Limit of read article pages (If unset scrapes all pages)
     */
    public async run(limit?: number): Promise<void> {
        if (this.jobActive) return;
        Logger.info("Started scraping job");
        this.jobActive = true;
        this.reset();
        this.lastResults.limit = limit ?? 0;
        try {
            const images = await scrape(limit);
            this.lastResults.found += images.length;
            const dbHandler = new ScrapedImagesHandler();
            await dbHandler.connect();
            for (const src of images) {
                if (await dbHandler.isSrcPresent(src)) continue;
                await dbHandler.addScrapedImage(src);
                this.lastResults.added += 1;
            }
            await dbHandler.disconnect();
        } catch (err) {
            Logger.error(err as string);
        } finally {
            Logger.info("Finished scraping job");
            this.jobActive = false;
        }
    }

    /**
     * Is scraping job currently running
     * @returns True if job is running
     */
    public isRunning(): boolean {
        return this.jobActive;
    }

    /**
     * Gets results of last scraping job
     * @returns Results of last scraping job
     */
    public getLastResults() {
        return this.lastResults;
    }
}

/**
 * Scrapes image urls from `www.zsi.kielce.pl`
 * @param limit Limit of read article pages (If unset scrapes all pages)
 */
export async function scrape(limit?: number): Promise<string[]> {
    if (limit === undefined) limit = Infinity;
    if (limit < 0) throw Error("Cannot set negative limit");
    const imageUrls: string[] = [];
    let mainPage: Document;
    let articleUrls: string[];
    let res: Response;
    for (let page = 1; page <= limit; page++) {
        if (page > 1) await sleep(2000);
        try {
            res = await fetch(`https://www.zsi.kielce.pl/page/${page}/`);
            if (!res.ok)
                throw new Error(`Page ${page} recieved status ${res.status}`);
            mainPage = new JSDOM(await res.text()).window.document;
        } catch (err) {
            console.error(err);
            break;
        }
        articleUrls = Array.from(
            mainPage.querySelectorAll<HTMLAnchorElement>(
                "main article .entry-header .entry-title a"
            )
        ).map((anchor) => anchor.href);
        for (const url of articleUrls) {
            if (!url.startsWith("https://www.zsi.kielce.pl/")) continue;
            await sleep(2000);
            await scrapeImageUrls(url, imageUrls);
        }
    }
    trimImageResolution(imageUrls);
    return removeDuplicates(imageUrls);
}

/**
 * Scrapes images from article page
 * @param articleUrl Url to article page
 * @param outImageUrls Output array of image urls
 */
async function scrapeImageUrls(
    articleUrl: string,
    outImageUrls: string[]
): Promise<void> {
    let articlePage: Document;
    try {
        const res = await fetch(articleUrl);
        articlePage = new JSDOM(await res.text()).window.document;
    } catch (err) {
        console.error(err);
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
function trimImageResolution(imageUrls: string[]): void {
    const resolutionRegex = /-\d+x\d+\..+$/gm;
    let resolution: string | undefined;
    let resolutionIdx: number;
    let extentionIdx: number;
    let queryIdx: number;
    let url: string;
    for (let i = 0; i < imageUrls.length; i++) {
        url = imageUrls[i];
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

/**
 * Removes duplicate values in array
 * @param array Array to reduce
 * @returns Reduced array
 */
function removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

/**
 * Sleeps given ammount of time
 * @param ms Time in ms
 */
async function sleep(ms: number): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
