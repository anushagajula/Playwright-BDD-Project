// import { createBdd } from 'playwright-bdd';
// import { test } from '../Fixtures/fixture.js';
// import { expect } from '@playwright/test';
// import testData from '../Testdata/accountsTestData.json' with { type: 'json' };
// import testdata from '../Testdata/testdata.json' with { type: 'json' };
// const { Given, When, Then } = createBdd(test);



// Given('User should be on the Create Account page', async ({ loginPage, accountsPage }) => {
//     // const credentials = testdata.ValidUser;
//     // await loginPage.login(credentials.username, credentials.password);
//     await loginPage.verifyHomePage();
//     await accountsPage.clickCreateAccount();
// });

// When('User places the mouse on the Accounts module in the navigation bar', async ({ accountsPage }) => {
//     // TODO
//     await accountsPage.mouseHoverOnAccountsModule();
// });

// Then('User should see all quick actions under the Accounts module', async ({ accountsPage }) => {
//     await accountsPage.viewAccountsModule();
// });
// When('User clicks the Create Account quick action under the Accounts module', async ({ accountsPage }) => {
//     // TODO: Click the Create Account quick action.
//     await accountsPage.clickCreateAccount();
// });

// Then('The Create Account page should be displayed', async ({ accountsPage }) => {
//     await accountsPage.verifyCreateAccountPage();
// });

// When('User enters account details from JSON and clicks the Save button', async ({ accountsPage }) => {
//     await accountsPage.fillAccountDetails(
//         testData.NAME,
//         testData.WEBSITE,
//         testData['OFFICE PHONE']
//     );

// });
// //verify the account is created with the entered details.

// Then('The account should be created with the entered NAME, WEBSITE, and OFFICE PHONE', async ({ accountsPage }) => {
//     await accountsPage.verifyAccountCreated(testData.NAME);
//     await accountsPage.verifyAccountDetails(
//         testData.NAME,
//         testData.WEBSITE,
//         testData['OFFICE PHONE']
//     );
// });

// When('User leaves the NAME field empty and clicks the Save button', async ({ accountsPage }) => {
//     // TODO: Leave NAME empty and click Save.
//     //await accountsPage.clickCreateAccount();
//     await accountsPage.saveButton.click();
// });

// Then('The error message {string} should be displayed below the NAME field', async ({ accountsPage }, errorMessage) => {
//     // TODO: Verify the validation message.
//     await accountsPage.verifyErrorMessageEmptyName();
// });

// When('User enters the email from {string}', async ({ accountsPage }, testDataKey) => {

//     await accountsPage.fillInvalidEmail(testData[testDataKey]);
// });

// Then('The Email field should throw error message if the email format is invalid.', async ({ accountsPage }) => {
//     // TODO: Verify the invalid email format error message.
//     await accountsPage.verifyErrorMessageInvalidEmail();
// });

import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import testData from '../Testdata/accountsTestData.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

Given('User should be on the Create Account page', async ({ loginPage, accountsPage }) => {
  await loginPage.navigateToLoginPage();
  await loginPage.loginWithEnvironmentCredentials();
  await loginPage.verifyHomePage();
  await accountsPage.clickCreateAccount();
  await accountsPage.verifyCreateAccountPage();
});
When(
  'User places the mouse on the Accounts module in the navigation bar',
  async ({ accountsPage }) => {
    await accountsPage.mouseHoverOnAccountsModule();
  }
);

Then(
  'User should see all quick actions under the Accounts module',
  async ({ accountsPage }) => {
    await accountsPage.viewAccountsModule();
  }
);

When(
  'User clicks the Create Account quick action under the Accounts module',
  async ({ accountsPage }) => {
    await accountsPage.clickCreateAccount();
  }
);

Then(
  'The Create Account page should be displayed',
  async ({ accountsPage }) => {
    await accountsPage.verifyCreateAccountPage();
  }
);

When(
  'User enters account details from JSON and clicks the Save button',
  async ({ accountsPage }) => {
    await accountsPage.fillAccountDetails(
      testData.NAME,
      testData.WEBSITE,
      testData['OFFICE PHONE']
    );
  }
);

Then(
  'The account should be created with the entered NAME, WEBSITE, and OFFICE PHONE',
  async ({ accountsPage }) => {
    await accountsPage.verifyAccountCreated(testData.NAME);
    await accountsPage.verifyAccountDetails(
      testData.NAME,
      testData.WEBSITE,
      testData['OFFICE PHONE']
    );
  }
);

When(
  'User leaves the NAME field empty and clicks the Save button',
  async ({ accountsPage }) => {
    await accountsPage.saveButton.click();
  }
);

Then(
  'The error message {string} should be displayed below the NAME field',
  async ({ accountsPage }, errorMessage) => {
    await accountsPage.verifyErrorMessageEmptyName(errorMessage);
  }
);

When(
  'User enters the email from {string}',
  async ({ accountsPage }, testDataKey) => {
    await accountsPage.fillInvalidEmail(testData[testDataKey]);
  }
);

Then(
  'The Email field should throw error message if the email format is invalid.',
  async ({ accountsPage }) => {
    await accountsPage.verifyErrorMessageInvalidEmail();
  }
);
