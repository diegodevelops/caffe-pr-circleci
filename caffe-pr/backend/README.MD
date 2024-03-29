# Back-end for CaffePR
A simple API for an online store, developed with Typescript and a few popular modules. Some of the modules and patterns used include:

- `espress` and its router for the app
- `jasmine` for unit tests
- `supertest` for unit tests involving networking
- `prettier` for formatting
- `eslint` for code styling
- `bcrypt` for password hashing and salting
- `jsonwebtoken` for authenticating API requests
- `pg` for postgres client
- `db-migrate` for migrations

## Setup and running app:

1. First make sure you have `psql` installed locally so you can run the initial database queries. You can follow this [guide](https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/) if you haven't done so already.

2. After installing psql locally, its time to create our user, and the dev and test databases. You can run these commands (on Mac) to do so:

- `sudo -u postgres psql` to access the query interface so we can run SQL queries. Then, psql will prompt for your computer password, and then for your `postgres` password (which typically is "postgres" too).

3. Now, your in the PostgreSQL interface and you can run `CREATE USER <POSTGRES_USER> WITH PASSWORD <POSTGRES_PASSWORD>;` to create our database user. Remember to save this two 2 values because where going to add them to our `.env` and `database.json` files.

4. Run `CREATE DATABASE <POSTGRES_DB>;` to create our development database and then a second time to create our test database. 

5. Finally, run `ALTER DATABASE <POSTGRES_DB> OWNER TO <POSTGRES_USER>;` and then a second time for the test database to give our user access to both databases.

5. Open your code editor and terminal, and clone this project.

6. Run `npm i` and `npm i --save-dev` to install all the dependencies since `node_modules` is not included in the repo.

7. After installing all the dependencies listed on the `package.json` file, we first need to create our `.env` file. Create the `.env` file and add the username, passoword, dev database and test database names you chosed earlier, plus the other missing values below:

```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=
POSTGRES_TEST_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
BCRYPT_PASSWORD=
SALT_ROUNDS=10
TOKEN_SECRET=
TEST_USERNAME=
TEST_PASSWORD=
TEST_JWT=
ENV=dev
```

To generate an accurate value for `TEST_JWT`, remember to use the same value for `TEST_USERNAME` and `TEST_PASSWORD` that you use in the payload for the JWT token, and sign it with the value for `TOKEN_SECRET` that you used.

8. Run `db-migrate up` to run the migrations and create our tables.

9. And finally, run `npm run watch` to start the app on `0.0.0.0:3000`. This will run the app on the ip address `0.0.0.0` and on port `3000`. See `REQUIREMENTS.md` to see the endpoints you can call.

