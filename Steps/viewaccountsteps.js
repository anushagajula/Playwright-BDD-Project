import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
const { Given, When, Then } = createBdd();

Given('User should be on the Home page after successful login', async ({ page }) => {

});

When('User clicks the View Accounts quick action', async ({ page }) => {

});

Then(/^User should be able to view all (.+)$/, async ({ page }, accountDetails) => {

});

Then('User should see {int} accounts in the current list view', async ({ page }, displayedCount) => {

});

Then('User should see a total account count of {int}', async ({ page }, totalCount) => {

});

When('User clicks the View Accounts quick action, enters {string}, and clicks the Search button', async ({ page }, accountName) => {

});

Then('User should be on the View Accounts page and be able to view the account {string}', async ({ page }, accountName) => {

});

When('User clicks the View Accounts quick action and clicks the Next Page arrow button', async ({ page }) => {

});

Then('User should see accounts {int}-{int} out of a total of {int} accounts', async ({ page }, firstRecord, lastRecord, totalCount) => {

});

Then(/^User should be able to see the (.+) button$/, async ({ page }, buttonName) => {

});

When('User clicks the View Accounts quick action and clicks the Insights button', async ({ page }) => {

});

Then(/^User should be on the View Accounts page and be able to see the (.+) panel$/, async ({ page }, panelName) => {

});