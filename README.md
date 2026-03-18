# Gwiazdy ZSI

ZSI Stars is an original project aimed at storing and categorizing images of teachers from ZSI. The application allows you to browse images and search for them according to the teachers appearing in them.

> Author: [_sutaC_](https://github.com/sutaC)

## Technologies

**Backend**

1. Typescript
2. Expres
3. Ejs
4. MySQL

**Frontend**

1. HTMX
2. CSS

**Other**

1. Docker
2. PostHog

## Self hosting

### Requiraments

- Docker
- Docker Compose
- Cron (optional, required for automated scraping in production)

### Environment configuration

An environment file is required for the application to run.

1. Copy the example file:

```bash
cp .env.example .env
```

2. Fill in required values described in .env.example

### Develompment

Development uses Docker with:

- bind-mounted source code

- live reload for the web app and workers

---

**To run dev:**

1. Build image:

```bash
docker build -t gwiazdy-zsi .
```

2. Start the app (dev mode):

```bash
docker compose up
```

1. Scraper worker (manual)

```bash
docker compose --profile manual run --rm scraper_worker
```

### Production

Production uses the same image with stricter settings.

---

**To run production:**

1. Build image:

```bash
docker build -t gwiazdy-zsi .
```

2. Setup cron jobs:

```bash
./scripts/setup_cron.sh
```

> Schedules the scraper worker to run once per day via cron.

3. Start the app:

```bash
docker compose -f docker-compose.yml up
```

### Default user

To log in as the default user after loading the database, use the following credentials:

- _Username:_ **admin**
- _Password:_ **Passw0rd;**

### Removing production systems

To completely remove the production setup, use the provided helper scripts:

- `remove_cron.sh`
    > Removes the scheduled cron job responsible for running the scraper worker.

---

**Recommended order:**

1. Stop the running containers:

```bash
docker compose down
```

2. Remove cron jobs:

```bash
./scripts/remove_cron.sh
```

After these steps, the production environment will be fully removed.

## Database handling

- To open database cli run `npm run db-open`
- To dump database run `npm run db-dump`
    > If you want to direct db dump to file use:
    > ` npm run --silent db-dump > /path/to/file.sql`
- To dump database schema for db init run `npm run db-dump:schema`
- To dump database data for db init run `npm run db-dump:data`

## Documentation

Documentation is avaliable at [DOCS.md](DOCS.md) file and are generated using `tsdoc` npm package.

> To generate docs yourself run `npm run doc`

## Logging (errors and other)

Loggs are saved to `logs.log` file in root directory of the project. You can access logs directly or by using admin panel on page. You can also clear server logs from that panel.
