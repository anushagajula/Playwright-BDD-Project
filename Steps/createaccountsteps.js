import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';

const { Given, When, Then } = createBdd();

Given('User should be on the home page', async ({ page }) => {
    // TODO: Log in and verify the home page.
});

Given('User should be on the Create Account page', async ({ page }) => {
    // TODO: Navigate to the Create Account page and verify it.
});

When('User logs in using valid credentials and opens the Accounts module', async ({ page }) => {
    // TODO: Log in and open the Accounts module.
});

Then('User should see the {string} and the {string} quick action', async ({ page }, pageName, quickAction) => {
    // TODO: Verify the page and quick action.
});

When('User clicks the Create Account quick action under the Accounts module', async ({ page }) => {
    // TODO: Click the Create Account quick action.
});

Then('The Create Account page should be displayed', async ({ page }) => {
    // TODO: Verify the Create Account page.
});

When('User enters the account details and clicks the Save button:', async ({ page }, table) => {
    for (const { Field: field, TestData: value } of table.hashes()) {
        await page.getByLabel(new RegExp(`^${field}$`, 'i')).fill(value);
    }

    await page.getByRole('button', { name: 'Save', exact: true }).click();
});

Then('The account should be created with the entered NAME, WEBSITE, and OFFICE PHONE', async ({ page }) => {
    // TODO: Verify the saved account.
});

When('User leaves the NAME field empty and clicks the Save button', async ({ page }) => {
    // TODO: Leave NAME empty and click Save.
});

Then('The error message {string} should be displayed below the NAME field', async ({ page }, errorMessage) => {
    // TODO: Verify the validation message.
});

When('User enters the email from {string}', async ({ page }, testData) => {
    // TODO: Look up and enter the email test data.
});

Then('The Email field should accept the address', async ({ page }) => {
    // TODO: Verify the Email field value.
});