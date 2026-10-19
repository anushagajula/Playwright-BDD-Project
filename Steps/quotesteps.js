import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';

const { Given, When, Then } = createBdd(test);
When('User views features on Quote page', async ({}) => {
  // Step: When User views features on Create Quote page
  // From: Features\Quotes.feature:27:5
});

Then('user should see the following features in the Create Quote page is Displayed:', async ({}, dataTable) => {
  // Step: Then user should see the following features in the Create Quote page is Displayed:
  // From: Features\Quotes.feature:28:5
});

Then('user able to see error message {string}', async ({}, arg) => {
  // Step: Then user able to see error message "Missing required field: Title"
  // From: Features\Quotes.feature:40:5
});

When('user clicks on Save button by entering {string} on Create Quote page', async ({}, arg) => {
  // Step: When user clicks on Save button by entering "invalid Valid until" on Create Quote page
  // From: Features\Quotes.feature:45:5
});

When('User views features', async ({}) => {
  // Step: When User views features
  // From: Features\Leads.feature:123:5
});
When('User mouse hover on Quotes', async ({}) => {
  // Step: When User mouse hover on Quotes
  // From: Features\Quotes.feature:5:9
});
Then('User should see the following options in the Quotes dropdown is Displayed:', async ({}, dataTable) => {
  // Step: Then User should see the following options in the Quotes dropdown is Displayed:
  // From: Features\Quotes.feature:6:9
});
When('User clicks {string} on Quotes drop down', async ({}, arg) => {
  // Step: When User clicks "Create Quote" on Quotes drop down
  // From: Features\Quotes.feature:15:9
});
Then('user should be redirected to the {string} Page', async ({}, arg) => {
  // Step: Then user should be redirected to the "Create Quote" Page
  // From: Features\Quotes.feature:16:9
});
Given('user is on Create Quote page', async ({}) => {
  // Step: Given user is on Create Quote page
  // From: Features\Quotes.feature:26:5
});
When('user clicks on Save button by entering valid data in all mandatory fields', async ({}) => {
  // Add valid values to the mandatory fields, then click Save.
});
When('user clicks on Cancel button by entering valid data in all mandatory fields', async ({}) => {
  // Add valid values to the mandatory fields, then click Cancel.
});
Then('user should be redirected to the new Quote record page with features', async ({}) => {
  // Step: Then user should be redirected to the new Quote record page with features
  // From: Features\Quotes.feature:57:5
});

Then('User able to see popup to cancel Quote creation', async ({}) => {
  // Step: Then User able to see popup to cancel Quote creation
  // From: Features\Quotes.feature:62:5
});

Given('user is on Create Quote page with popup to cancel Quote creation', async ({}) => {
  // Step: Given user is on Create Quote page with popup to cancel Quote creation
  // From: Features\Quotes.feature:65:5
});

When('user clicks on Leave button in the popup', async ({}) => {
  // Step: When user clicks on Leave button in the popup
  // From: Features\Quotes.feature:66:5
});

Then('user should be redirected to the View Quotes page', async ({}) => {
  // Step: Then user should be redirected to the View Quotes page
  // From: Features\Quotes.feature:67:5
});

Given('user is on new Quote record page', async ({}) => {
  // Step: Given user is on new Quote record page
  // From: Features\Quotes.feature:70:5
});
When('user clicks on Edit button', async ({}) => {
  // Step: When user clicks on Edit button
  // From: Features\Quotes.feature:71:5
});
Then('User able to update new Quote record fields', async ({}) => {
  // Step: Then User able to update new Quote record fields
  // From: Features\Quotes.feature:72:5
});

Given('user is on new Quote record with actions dropdown', async ({}) => {
  // Step: Given user is on new Quote record with actions dropdown
  // From: Features\Quotes.feature:75:5
});

Then('User able to see the following options in the actions drop down of new Quote record page:', async ({}, dataTable) => {
  // Step: Then User able to see the following options in the actions drop down of new Quote record page:
  // From: Features\Quotes.feature:77:5
});

Then('User able to see popup to delete Quote record', async ({}) => {
  // Step: Then User able to see popup to delete Quote record
  // From: Features\Quotes.feature:93:5
});
Then('User able to see change log of the new Quote record', async ({}) => {
  // Step: Then User able to see change log of the new Quote record
  // From: Features\Quotes.feature:98:5
});
Given('user is on View Quotes page', async ({}) => {
  // Step: Given user is on View Quotes page
  // From: Features\Quotes.feature:101:5
});
When('User views features on Quotes page', async ({}) => {
  // Step: When User views features on Quotes page
  // From: Features\Quotes.feature:102:5
});
Then('user should see the following features in the View Quotes page:', async ({}, dataTable) => {
  // Step: Then user should see the following features in the View Quotes page:
  // From: Features\Quotes.feature:103:5
});
Then('User should see filter options to filter quotes records', async ({}) => {
  // Step: Then User should see filter options to filter quotes records
  // From: Features\Quotes.feature:127:5
});
Given('user is on the View Quotes page with filter options', async ({}) => {
  // Step: Given user is on the View Quotes page with filter options
  // From: Features\Quotes.feature:130:5
});
When('user enters a title in the filter', async ({}) => {
  // Step: When user enters a title in the filter
  // From: Features\Quotes.feature:131:5
});
Then('title should be displayed in the filter field', async ({}) => {
  // Step: Then title should be displayed in the filter field
  // From: Features\Quotes.feature:132:5
});
Given('user is on View Quotes page with specified title on filter options', async ({}) => {
  // Step: Given user is on View Quotes page with specified title on filter options
  // From: Features\Quotes.feature:135:5
});
Then('User should see quotes records matching the specified title', async ({}) => {
  // Step: Then User should see quotes records matching the specified title
  // From: Features\Quotes.feature:137:5
});
Given('User is on  import page', async ({}) => {
  // Step: Given User is on  import page
  // From: Features\Quotes.feature:140:5
});

When('User clicks choose file button with invalid file', async ({}) => {
  // Step: When User clicks choose file button with invalid file
  // From: Features\Quotes.feature:146:5
});

Then('User should see popup with error message', async ({}) => {
  // Step: Then User should see popup with error message
  // From: Features\Quotes.feature:147:5
});

Given('user is on Quotes page', async ({}) => {
  // Step: Given user is on Quotes page
  // From: Features\Quotes.feature:150:5
});

When('user mouse hover on Recently Viewed option', async ({}) => {
  // Step: When user mouse hover on Recently Viewed option
  // From: Features\Quotes.feature:151:5
});

Then('user should see the recent opened quote appears in Recently Viewed option', async ({}) => {
  // Step: Then user should see the recent opened quote appears in Recently Viewed option
  // From: Features\Quotes.feature:152:5
});
When('User clicks choose file button with valid csv file', async ({}) => {
  // Step: When User clicks choose file button with valid csv file
  // From: Features\Quotes.feature:141:5
});

When('User clicks next button', async ({}) => {
  // Step: When User clicks next button
  // From: Features\Quotes.feature:151:5
});

Then('User should see error message {string}', async ({}, arg) => {
  // Step: Then User should see error message "Missing required fields: Select a file to upload."
  // From: Features\Quotes.feature:152:5
});