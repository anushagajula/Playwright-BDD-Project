import 'dotenv/config';
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';
import testData from '../Testdata/testdata.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

Given('User is on SuiteCRM login page', async ({ loginPage }) => {
  await loginPage.verifyLoginScreen();
});

Given('User should be in SuiteCRM URL page', async ({ loginPage }) => {
  await loginPage.verifyLoginPageUrl();
});
Given('User logs in with valid credentials', async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.loginWithEnvironmentCredentials();
  await loginPage.verifyHomePage();
});

Then('User should be able to see all login page components', async ({ loginPage }) => {
  await loginPage.verifyLoginScreen();
});

When('User logs in using test data {string}', async ({ loginPage }, testDataKey) => {
  const credentials = testData[testDataKey];

  if (
    !credentials ||
    typeof credentials.username !== 'string' ||
    typeof credentials.password !== 'string'
  ) {
    throw new Error(
      `Login test data "${testDataKey}" must include username and password strings`
    );
  }

  await loginPage.login(credentials.username, credentials.password);
});

Then('User should be able to login', async ({ loginPage }) => {
  await loginPage.verifyHomePage();
});

Then(
  'User clicks on the login button and an error message {string} should be displayed',
  async ({ page }, errorMessage) => {
    const expectedMessage = errorMessage
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\s+/g, '\\s*');

    await expect(
      page.getByText(new RegExp(expectedMessage, 'i')).first()
    ).toBeVisible();
  }
);
