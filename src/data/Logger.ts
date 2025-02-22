import fs from "fs/promises";

/**
 * Logging static class
 */
export default class Logger {
    public static readonly LOGFILE = "logs.log";

    /**
     * Saves log to file
     * @param message Message to log
     * @param type Log type
     */
    private static async log(message: string, type: string): Promise<void> {
        const date = new Date();
        const log = `${date.toISOString()} | ${type} | ${message}\n`;
        await fs.writeFile(this.LOGFILE, log);
    }

    /**
     * Saves to log given message with tag INFO
     * @param message Message to log
     */
    public static async info(message: string): Promise<void> {
        await this.log(message, "INFO");
    }

    /**
     * Saves to log given message with tag WARNING
     * @param message Message to log
     */
    public static async warning(message: string): Promise<void> {
        await this.log(message, "WARNING");
    }

    /**
     * Saves to log given message with tag ERROR
     * @param message Message to log
     */
    public static async error(message: string): Promise<void> {
        await this.log(message, "ERROR");
    }

    /**
     * Deletes all saved logs
     */
    public static async clear(): Promise<void> {
        await fs.writeFile(this.LOGFILE, "");
    }
}
