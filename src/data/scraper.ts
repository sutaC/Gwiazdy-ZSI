import { JSDOM } from "jsdom";
import { ScrapedImagesHandler } from "./db";
import Logger from "./Logger";

export default class Scraper {
    private autoScrapingId: number | null = null;
    private jobActive: boolean = false;
    private lastResults = {
        limit: 0,
        found: 0,
        added: 0,
        type: "none",
    };

    // --- Public methods
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
        this.lastResults.type = "manual";
        try {
            await this.scrapingJob(limit as number);
        } catch (err) {
            Logger.error(err as string);
        } finally {
            Logger.info("Finished scraping job");
            this.jobActive = false;
        }
    }

    /**
     * Sets automatic scraping
     * @param interval Interval of automatic scraping in ms
     */
    public setAutoScraping(interval: number): void {
        setInterval(async () => {
            if (this.jobActive) {
                Logger.info(
                    "Aborted automatic scraping due to active scraping job"
                );
                return;
            }
            Logger.info("Started automatic scraping job");
            this.jobActive = true;
            this.reset();
            this.lastResults.limit = 1;
            this.lastResults.type = "automatic";
            try {
                await this.scrapingJob(1);
            } catch (err) {
                Logger.error(err as string);
            } finally {
                Logger.info("Finished automatic scraping job");
                this.jobActive = false;
            }
        }, interval);
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
        return this.jobActive;
    }

    /**
     * Gets results of last scraping job
     * @returns Results of last scraping job
     */
    public getLastResults() {
        return this.lastResults;
    }

    // --- Private methods
    private async scrapingJob(limit: number) {
        const images = await this.scrape(limit);
        this.lastResults.found += images.length;
        const dbHandler = new ScrapedImagesHandler();
        await dbHandler.connect();
        for (const src of images) {
            if (await dbHandler.isSrcPresent(src)) continue;
            await dbHandler.addScrapedImage(src);
            this.lastResults.added += 1;
        }
        await dbHandler.disconnect();
    }

    /**
     * Scrapes image urls from `www.zsi.kielce.pl`
     * @param limit Limit of read article pages (If unset scrapes all pages)
     */
    private async scrape(limit?: number): Promise<string[]> {
        if (limit === undefined) limit = Infinity;
        if (limit < 0) throw Error("Cannot set negative limit");
        const imageUrls: string[] = [];
        let mainPage: Document;
        let articleUrls: string[];
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
                await this.sleep(2000);
                await this.scrapeImageUrls(url, imageUrls);
            }
        }
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
        this.lastResults = {
            limit: 0,
            found: 0,
            added: 0,
            type: "none",
        };
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
