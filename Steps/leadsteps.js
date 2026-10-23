
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import testData from '../Testdata/testdata.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

Given('user is on Home page', async ({ leadPage }) => {
  await leadPage.login();
});

When('User mouse hover on Leads', async ({ leadPage }) => {
  await leadPage.hoverOnLeads();
});

Then('User should see the following options in the Leads dropdown is Displayed:', async ({ leadPage }, dataTable) => {
  const options = dataTable.raw().slice(1).map(([option]) => option);
  await leadPage.verifyDropdownOptions(options);
});

When('user clicks {string}', async ({ leadPage }, name) => {
  await leadPage.clickLeadsOption(name);
});

Then('user should be redirected to the {string} page', async ({ leadPage }, pageName) => {
  await leadPage.redirectedpage(pageName);
});

Given('user is on Create Lead page', async ({ leadPage }) => {
 await leadPage.login();
    await leadPage.clickLeadsOption('Create Lead');
});

When('User views features on Create Lead page', async ({ leadPage }) => {
  await leadPage.viewCreateLeadFeatures();
});

Then('user should see the following features in the Create Lead page is Displayed:', async ({ leadPage }, dataTable) => {
  const features = dataTable.rows().map(row => row[0]);

        for (const feature of features) {
            await leadPage.verifyFeatureDisplayed(feature);
}
});


When('user clicks on Save button without entering any details', async ({ leadPage }) => {
  await leadPage.clickSaveButton('empty');
});

Then('User able to see error message {string}', async ({ leadPage }, message) => {
  await leadPage.getErrorMessage(message);
});

When('user clicks on Save button by entering {string}', async ({ leadPage }, fieldname) => {
  await leadPage.clickSaveButton(fieldname);
});

When('user clicks on Save button by entering valid data withall mandatory fields', async ({ leadPage }) => {
  await leadPage.createLeadWithValidData();
});

Then('user should be redirected to the new Lead record page', async ({ leadPage }) => {
   await leadPage.verifyNewCreatedLeadRecordisDisplayed();
});

When('user clicks on Cancel button by entering valid data withall mandatory fields', async ({ leadPage}) => {
 await leadPage.clickCancelButtonWithValidData();
});

Then('User able to see popup to cancel', async ({ leadPage }) => {
  await leadPage.verifyCancelPopup();
});

When('user clicks Ok button in the popup', async ({ leadPage }) => {
  await leadPage.clickOkButtonInPopup();
});


Given('user is on new Lead record page', async ({leadPage}) => {
  await leadPage.login();
await leadPage.clickLeadsOption('Create Lead');
await leadPage.fillValidLeadData();
await leadPage.clicksaveButton();
  //await leadPage.openExistingLead(fullName);
});


When('user clicks on Edit button on the page', async ({leadPage}) => {
  await leadPage.clickEditButton();
  
});

Then('User able to update new lead record fields', async ({leadPage}) => {
  await leadPage.updateLeadRecordFields();
});

When('User clicks insights button', async ({leadPage}) => {
  await leadPage.clickInsightButton();
});

Then('User able to see insights of the new lead record', async ({leadPage}) => {
  await leadPage.verifyLeadInsightsDisplayed();
});


When('user clicks on actions drop down', async ({leadPage}) => {
  await leadPage.actionsDropdown.click();
});

Then('User able to see the following options in the actions drop down:', async ({leadPage}, dataTable) => {
  const options = dataTable.raw().slice(1).map(([option]) => option);
    await leadPage.verifyActionsDropdownOptions(options);
  
});

When('user clicks on Delete option', async ({leadPage}) => {
  await leadPage.actionsDropdown.click();
  await leadPage.clickDeleteButton();
});

Then('User able to see popup to delete Lead record', async ({leadPage}) => {
  await leadPage.verifyDeletePopup();
});

When('user clicks on View Change Log option', async ({leadPage}) => {
  await leadPage.actionsDropdown.click();
  await leadPage.clickViewChangeLogButton();
});

Then('User able to see change log of the new lead record', async ({leadPage}) => {
  await leadPage.verifyViewChangeLogPopup();
});

Given('User is on  create Lead from Vcard page', async ({}) => {
  // Step: Given User is on  create Lead from Vcard page
  // From: Features\Leads.feature:102:5
});

When('User clicks choose file button', async ({}) => {
  // Step: When User clicks choose file button
  // From: Features\Leads.feature:103:5
});

Then('User should see selected file on page', async ({}) => {
  // Step: Then User should see selected file on page
  // From: Features\Leads.feature:104:5
});

Given('User is on  create Lead from Vcard page with selcted file', async ({}) => {
  // Step: Given User is on  create Lead from Vcard page with selcted file
  // From: Features\Leads.feature:107:5
});

When('User clicks Import Vcard button', async ({}) => {
  // Step: When User clicks Import Vcard button
  // From: Features\Leads.feature:108:5
});

Then('User should see imported file details on page', async ({}) => {
  // Step: Then User should see imported file details on page
  // From: Features\Leads.feature:109:5
});

Given('user is on Create Lead from vCard page', async ({}) => {
  // Step: Given user is on Create Lead from vCard page
  // From: Features\Leads.feature:112:5
});

When('user selects {string} from TestData', async ({}, arg) => {
  // Step: When user selects "oversize.vcf" from TestData
  // From: Features\Leads.feature:113:5
});

Then('user should see {string}', async ({}, arg) => {
  // Step: Then user should see "The uploaded file exceeds the 30000 bytes size limit which was specified in HTML form."
  // From: Features\Leads.feature:114:5
});

Given('user is on View Leads page', async ({}) => {
  // Step: Given user is on View Leads page
  // From: Features\Leads.feature:122:5
});

Then('user should see the following features in the View Leads page:', async ({}, dataTable) => {
  // Step: Then user should see the following features in the View Leads page:
  // From: Features\Leads.feature:124:5
});

When('User clicks on Bulk Action drop down', async ({}) => {
  // Step: When User clicks on Bulk Action drop down
  // From: Features\Leads.feature:138:5
});

Then('User able to see the following options in the Bulk Action drop down:', async ({}, dataTable) => {
  // Step: Then User able to see the following options in the Bulk Action drop down:
  // From: Features\Leads.feature:139:5
});

Given('user is on View Leads page with Bulk Action drop down', async ({}) => {
  // Step: Given user is on View Leads page with Bulk Action drop down
  // From: Features\Leads.feature:149:5
});

When('User clicks on Select This Page option in Bulk Action drop down', async ({}) => {
  // Step: When User clicks on Select This Page option in Bulk Action drop down
  // From: Features\Leads.feature:150:5
});

Then('User should see only current page Leads records selected', async ({}) => {
  // Step: Then User should see only current page Leads records selected
  // From: Features\Leads.feature:151:5
});

When('User clicks on Filter', async ({}) => {
  // Step: When User clicks on Filter
  // From: Features\Leads.feature:155:5
});

Then('User should see filter options to filter leads records', async ({}) => {
  // Step: Then User should see filter options to filter leads records
  // From: Features\Leads.feature:156:5
});

Given('user is on the View Leads page with filter options', async ({}) => {
  // Step: Given user is on the View Leads page with filter options
  // From: Features\Leads.feature:159:5
});

When('user enters a last name in the filter', async ({}) => {
  // Step: When user enters a last name in the filter
  // From: Features\Leads.feature:160:5
});

Then('the last name should be displayed in the filter field', async ({}) => {
  // Step: Then the last name should be displayed in the filter field
  // From: Features\Leads.feature:161:5
});
Given('user is on View Leads page with specified lastname on filter options', async ({}) => {
  // Step: Given user is on View Leads page with specified lastname on filter options
  // From: Features\Leads.feature:164:5
});
When('user clicks the search button', async ({}) => {
  // Step: When user clicks the search button
  // From: Features\Leads.feature:165:5
});
Then('User should see leads records matching the specified last name', async ({}) => {
  // Step: Then User should see leads records matching the specified last name
  // From: Features\Leads.feature:166:5
});
Given('user is on the Import Leads page', async ({}) => {
  // Step: Given user is on the Import Leads page
  // From: Features\Leads.feature:169:5
});
When('user selects a valid import file from TestData', async ({}) => {
  // Step: When user selects a valid import file from TestData
  // From: Features\Leads.feature:170:5
});
Then('the selected file name should be displayed', async ({}) => {
  // Step: Then the selected file name should be displayed
  // From: Features\Leads.feature:171:5
});
When('user clicks the Next button without selecting a file', async ({}) => {
  // Step: When user clicks the Next button without selecting a file
  // From: Features\Leads.feature:175:5
});
Then('user should see a file validation message', async ({}) => {
  // Step: Then user should see a file validation message
  // From: Features\Leads.feature:176:5
});
