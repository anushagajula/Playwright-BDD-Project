import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('User should be on the home page', async ({ page }) => {

});

Given('User should be on the Create Account page', async ({ page }) => {

});

When('User logs in using valid credentials and opens the Accounts module', async ({ page }) => {

});

Then('User should see the {string} and the {string} quick action', async ({ page }, pageName, quickAction) => {

});

When('User clicks the Create Account quick action under the Accounts module', async ({ page }) => {

});

Then('The Create Account page should be displayed', async ({ page }) => {

});

When('User enters the account details:', async ({ page }, table) => {

});

When('User clicks the Save button', async ({ page }) => {

});

Then('The account should be created with the entered NAME, WEBSITE, and OFFICE PHONE', async ({ page }) => {

});

When('User leaves the NAME field empty and clicks the Save button', async ({ page }) => {

});

Then('The error message {string} should be displayed below the NAME field', async ({ page }, errorMessage) => {

});

When('User enters the email from {string}', async ({ page }, testData) => {

});

Then('The Email field should accept the address', async ({ page }) => {

});
