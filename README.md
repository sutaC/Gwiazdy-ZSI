# Gwiazdy ZSI

ZSI Stars is an original project aimed at storing and categorizing photos of teachers from ZSI. The application allows you to browse photos and search for them according to the teachers appearing in them.

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

## How to start app?

1. Have installed `docker` and `docker compose` on your machine

2. If necessary change application configuration in [docker-compose.yml](docker-compose.yml) file (For example uncommenting `dev` options)

3. In root directory run `docker compose up`

    > If you don't want to see server logs run `docker compose --attach app`

4. To log in as the default user after loading the database, use the following credentials:

    - _Username:_ **admin**

    - _Password:_ **Passw0rd;**

## Documentation

Documentation is avaliable at [DOCS.md](DOCS.md) file and are generated using `tsdoc` npm package.

> To generate docs yourself run `npm run doc`

## Error logging

Errors are logged to `errors.log` file in root directory of the project. You can access logs directly or by using admin panel on page. You can also clear server logs from that panel.
