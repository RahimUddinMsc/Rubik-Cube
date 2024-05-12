# Rubik's Cube App Created With React & Typescript, Jest utilised for unit tests, Playwright utilised for automated tests

## Prequisites

Visual Studio,
Node

## Available Scripts (Through visual studio terminal)

In the project directory, you can run:

### `npm install`
Important: Run 'npm install' on first initial load of the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test_jest`

Launches the test runner the results of which are present in the console. Additional config setup to create coverage reports this can be found in the following directory src/tests/jest/coverage after running the test.

### `npm run test_playwright`

IMPORTANT: The app must be running locally for the automated tests to work (npm start) and the (npm run test_playwright) command to be run after in a new terminal.

Launches the test runner the results of which are present in the console. Alternatively additional cofig setup to provide a html report. This can be found in the following directory src/tests/playwright/report after running the test.

You can execute 'npx playwright test --ui' if would like to run the tests with a ui.
