#!/bin/bash
# remove_cron.sh - removes scraper_worker cron job
set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CRON_JOB="0 2 * * * $PROJECT_DIR/scripts/run_scraper.sh > /dev/null 2>&1"

(crontab -l 2>/dev/null | grep -vF "$CRON_CMD") | crontab -

echo "Scraper worker cron job removed."