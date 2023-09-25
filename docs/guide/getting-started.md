# Getting Started

## Prerequisites

- [PHP ^8.0](https://php.net)
- [Composer ^2.0](https://getcomposer.org)
- [Node.js ^16.0](https://nodejs.org)

## Installation

### PHP

Create project using this command

```sh
composer create-project timedoor/baskito my-project
```

After installation is complete, you can go to the project directory and run the following command to setup the project.

```sh
cd my-project && cp .env.example .env
```

```sh
php artisan key:generate
```

Create and set your database configuration in the `.env` file then run the database migration and seeder.

```sh
php artisan migrate --seed
```

### Node.js

Install node.js dependencies using this command

```sh
npm install
```

After installation is complete, you can run the following command to start the development server.

```sh
npm run dev
```

For build production, you can run the following command.

```sh
npm run build
```

### Vite Settings

Set `DEV_SERVER_URL` setting in `.env` to match your local project URL and add a port for Vite to it.

```
DEV_SERVER_URL=http://baskito.test:4000
```

If you use HTTPS for `DEV_SERVER_URL` while using Laragon that is not placed in the default folder (`C:\laragon`) or somehow have an SSL error, you must specify the SSL key and certificate file path in the `DEV_SERVER_KEY` and `DEV_SERVER_CERT` settings in the `.env`.

```
DEV_SERVER_KEY="D:\\laragon\\etc\\ssl\\laragon.key"
DEV_SERVER_CERT="D:\\laragon\\etc\\ssl\\laragon.crt"
```
