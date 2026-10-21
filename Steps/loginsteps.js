import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';
import testData from '../Testdata/loginTestData.json' with { type: 'json' };
const { Given, When, Then } = createBdd(test);

Given('User is on SuiteCRM login page', async ({ page }) => {
    await expect(page).toHaveURL(/#\/Login$/);
});

When('User should be in SuiteCRM URL page', async ({ page }) => {
    //await expect(page).toHaveURL('/');
    await expect(page).toHaveURL(/#\/Login$/);
});

Then('User should be able to see {string}', async ({ loginPage }, element) => {
    await loginPage.verifyLoginScreen();
});

When('User logs in using test data {string}', async ({ loginPage }, testDataKey) => {
    const credentials = testData[testDataKey];
    await loginPage.login(credentials.username, credentials.password);
});

Then('User should be able to login', async ({ loginPage }) => {
    await loginPage.verifyHomePage();
});

/*Then('User clicks on the login button and an error message {string} should be displayed',
    async ({ page, loginPage }, errorMessage) => {
        await loginPage.login();
        await loginPage.verifyInvalidLoginErrorMessage();
        await loginPage.verifyEmptyPasswordErrorMessage();
        await loginPage.verifyEmptyUsernameErrorMessage();
        await loginPage.verifyEmptyCredentialsErrorMessage();
    });*/
Then(
    'User clicks on the login button and an error message {string} should be displayed',
    async ({ page, loginPage }, errorMessage) => {
        const expectedMessage = errorMessage
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .replace(/\s+/g, '\\s*');

        await expect(page.getByText(new RegExp(expectedMessage, 'i')).first()).toBeVisible();
    }
);