# Chuck Phrases 🔫

## Table of Contents 📝

1. [How to install](#how-to-install)
2. [Technologies used](#technologies-used)
3. [Project Objective](#project-objective)
4. [API used](#api-used)
5. [Components 🚀](#components-🚀)

## How to install

📌 First all, you has been installed Node.js package in your machine. If you don't have Node.js in you Desktop, see this link [here]('https://nodejs.org/en/') and install the LTS version.

📌 Clone this project;

📌 Install all dependencies.

You may install this project with `NPM` or `Yarn`:

With NPM:

```shell
npm install
```

or yarn:

```shell
yarn install
```

📌 Start application

If you use NPM to install all dependencies, use this command in your terminal:

```shell
npm start
```

Or if you use Yarn to install, use this command here:

```shell
yarn start
```

📌 Have a fun!🎉😁

## Technologies used 👊

-   TypeScript;
-   React;
-   Styled Components;
-   Axios;
-   React Toastify;
-   React Router;
-   React Icons;
-   React Select;
-   Jest;
-   Testing Library;
-   Cypress;

## Bests practices ✨

-   Clean Code;
-   Clean Architecture;
-   SOLID;
-   TDD;
    > Unity, Integration and E2E tests
-   DRY;
-   Design Patterns;

## Project Objective

I did build this project to practice my knowledge about all technologies above. Furthermore, I use this project to complete challenge for great [Nuuvem]('https://www.nuuvem.com/br-pt/') enterprise.😍

## API used

In this project I use the [Chuck Norris API]('https://api.chucknorris.io/').

## Components 🚀

### 📌 Card

```html
<Card />
```

| Properties | Types  |
| ---------- | ------ |
| url        | string |
| value      | string |

### 📌 ListCard

```html
<ListCard />
```

| Properties | Types          |
| ---------- | -------------- |
| dataSource | IListCardProps |

### 📌 Search

```html
<Search />
```

| Properties   | Types    |
| ------------ | -------- |
| handleSubmit | function |

### Home

```html
<Home />
```

| Properties | Types          |
| ---------- | -------------- |
| history    | BrowserHistory |
