#!/bin/bash
# run_scraper.sh - wrapper to run scraper_worker in Docker
set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

docker compose \
  -f "$PROJECT_DIR/docker-compose.yml" \
  --profile manual \
  run --rm scraper_worker 2>/dev/null