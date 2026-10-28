import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';
import testData from '../Testdata/accountsTestData.json' with { type: 'json' };
import testdata from '../Testdata/testdata.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);



When('User clicks the View Accounts quick action', async ({ accountsPage }) => {
    await accountsPage.clickViewAccounts();
});

Then(/^User should be able to view all (.+)$/, async ({ accountsPage }, accountDetails) => {
    await accountsPage.verifyViewAccountsPage();

});

Given('the user is on the View Account page', async ({ loginPage, accountsPage }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.loginWithEnvironmentCredentials();
  await loginPage.verifyHomePage();
  await accountsPage.clickViewAccounts();
  await accountsPage.verifyViewAccountsPage();
});

When(
    'the user clicks the Filter button, enters the account name in the Name field on the Filter page, and clicks the Search button',
    async ({ accountsPage }) => {
        await accountsPage.clickFilterButton(testData.VIEW_ACCOUNT_NAME);
        //await accountsPage.Namefield.fill(testData.VIEW_ACCOUNT_NAME);
    }
);

Then(
    'the user should be able to see the account with the specified account name in the search results',
    async ({ accountsPage }) => {
        await accountsPage.verifyAccountInSearchResults(testData.VIEW_ACCOUNT_NAME);
    }
);
