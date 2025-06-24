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
    - This line (57 during this commit) basically means 0
    - Reduced nesting by one level by using the `exceptionalItems` array to check if the item is exception case
    - Reduced nesting by one level by using the `Math.min` function to ensure the quality is not greater than 50
    - Using a `for...of` loop for cleaner, more readable code
    - Converted the logic to a switch case for better readability
- Added failing test case for Conjured items