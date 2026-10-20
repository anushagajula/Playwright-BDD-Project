import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
const { Given, When, Then } = createBdd();
Given('User should be in SuiteCRM URL page', async ({ page }) => {

});

When('User launches the browser and enters SuiteCRM URL', async ({ page }) => {

});

Then('User should be able to see {string}', async ({ page }, element) => {

});

When('User logs in using test data {string}', async ({ page }, testData) => {

});

Then('User should be able to login', async ({ page }) => {

});

Then('An error message {string} should be displayed', async ({ page }, errorMessage) => {

});