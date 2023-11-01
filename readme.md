# Gwiazdy ZSI

Gwazdy ZSI to autorski projekt mający na celu przechowanie i skategoryzowanie zdjęć nauczycieli z ZSI. Aplikacja umożliwia przeglądanie zdjęć i wyszukiwanie ich według występujących na nich nauczycieli.

Autor: [_Catus_](https://github.com/sutaC)

## Technologie

**Backend:**

1. JavaSript
    - Expres
    - Ejs
2. MySQL

**Frontend:**

1. HTMX
2. Vanilla CSS

## Jak zacząć?

1. Aplikacja wymaga połączenia z aktywną bazą danych MySQL. Plik bazy danyh znajduje się w pliku [_gwiazdy-zsi.sql_](./src/data/gwiazdy-zsi.sql).

2. Wszystkie dane do połączenia, secret i port zawarte muszą być w pilku środowiskowym - [_.env_](./.env)

    ```.env
        SECRET="***"
        PORT=****
        DB_HOST="***"
        DB_USER="****"
        DB_PASS="****"
        DB_NAME="****"
    ```

3. Przed uruchomieniem projektu po raz pierwszy należy zainstalować wszystkie biblioteki za pomocą komendy `npm install`.

4. Aby uruchomić projekt należy użyć komendy `npm run dev` lub `npm run start`.

5. Aby zalogować się jako domyślny użytkownik po wczytaniu bazy należy użyć następujących danych:

    > _Nazwa użytkownika:_ **admin**

    > _Hasło:_ **Passw0rd;**
