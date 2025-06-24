# Gilded Rose

This is my attempt at the Gilded Rose Refactoring kata (by Emily Bache) in TypeScript.

## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

Uses vitest for unit tests.

```sh
npm run test
```

To run all tests in watch mode

```sh
npm run test:watch
```



## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Steps performed:
- Initital repo setup
- Added test cases as per requirements of the kata, that already pass because the function works expected
- Refactors begin:
    - More idiomatic type definitions