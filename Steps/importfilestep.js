import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { fileURLToPath } from 'node:url';
import loginTestData from '../Testdata/loginTestData.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

When('the user navigates to the SuiteCRM Import Accounts page', async ({ accountsPage }) => {
    await accountsPage.navigateToImportAccounts();
});

Then('the user should be on the SuiteCRM Import Accounts page', async ({ accountsPage }) => {
    await accountsPage.verifyImportAccountsPage();
});

Given('the user is on the SuiteCRM Import Accounts page', async ({ loginPage, accountsPage }) => {
    await loginPage.navigateToLoginPage();
  await loginPage.loginWithEnvironmentCredentials();
  await loginPage.verifyHomePage();
  await accountsPage.navigateToImportAccounts();
  await accountsPage.verifyImportAccountsPage();
});

When('the user uploads a valid accounts data file and clicks the next button', async ({ accountsPage }) => {
    const filePath = fileURLToPath(new URL('../Testdata/importfile.csv', import.meta.url));
    await accountsPage.uploadAccountsFileAndContinue(filePath);
});

Then('the system proceeds to the Confirm Import File Properties page', async ({ accountsPage }) => {
    await accountsPage.verifyImportPropertiesPage();
});