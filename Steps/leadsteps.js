
import { createBdd, test } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);

Given('user is on Home page', async function({page}){
  console.log('Step: Given user is on Home page');
});

When('User mouse hover on Leads', async ({}) => {
  // Step: When User mouse hover on Leads
  // From: Features\Leads.feature:6:5
});

Then('User should see the following options in the Leads dropdown is Displayed:', async ({}, dataTable) => {
  // Step: Then User should see the following options in the Leads dropdown:
  // From: Features\Leads.feature:7:5
});

When('user clicks {string}', async ({}, arg) => {
  // Step: When user clicks "Create Lead"
  // From: Features\Leads.feature:16:5
});

Then('user should be redirected to the {string} page', async ({}, arg) => {
  // Step: Then user should be redirected to the "Create Lead" page
  // From: Features\Leads.feature:17:5
});

Given('user is on Create Lead page', async ({}) => {
  // Step: Given user is on Create Lead page
  // From: Features\Leads.feature:27:5
});

When('User views features on Create Lead page', async ({}) => {
  // Step: When User views features
  // From: Features\Leads.feature:28:5
});

Then('user should see the following features in the Create Lead page is Displayed:', async ({}, dataTable) => {
  // Step: Then user should see the following features in the Create Lead page is Displayed:
  // From: Features\Leads.feature:29:5
});


When('user clicks on Save button without entering any details', async ({}) => {
  // Step: When user clicks on Save button without entering any details
  // From: Features\Leads.feature:40:5
});

Then('User able to see error message {string}', async ({ page }, message) => {
  // Add an assertion that the expected error message is visible.
});

When('user clicks on Save button by entering {string}', async ({ page }, fieldname) => {
  // Enter invalid data for the requested field, then click Save.
});

When('user clicks on Save button by entering valid data in all mandatory fields', async ({ page }) => {
  // Enter valid values in the required fields, then click Save.
});

Then('user should be redirected to the new Lead record page with features', async ({ page }) => {
  // Assert that the browser is on the new Lead record page with the expected features.
});

When('user clicks on Cancel button by entering valid data in all mandatory fields', async ({}) => {
  // Step: When user clicks on Cancel button by entering valid data in all mandatory fields
  // From: Features\Leads.feature:61:5
});

Then('User able to see popup to cancel Lead creation', async ({}) => {
  // Step: Then User able to see popup to cancel Lead creation
  // From: Features\Leads.feature:62:5
});

Given('user is on Create Lead page with popup to cancel Lead creation', async ({}) => {
  // Step: Given user is on Create Lead page with popup to cancel Lead creation
  // From: Features\Leads.feature:65:5
});

When('user clicks on {string} button in the popup', async ({}, arg) => {
  // Step: When user clicks on "Ok" button in the popup
  // From: Features\Leads.feature:66:5
});

Then('user should be redirected to the View Leads page', async ({}) => {
  // Step: Then user should be redirected to the View Leads page
  // From: Features\Leads.feature:67:5
});

Given('user is on new Lead record page', async ({}) => {
  // Step: Given user is on new Lead record page
  // From: Features\Leads.feature:70:5
});

When('user clicks on Edit button', async ({}) => {
  // Step: When user clicks on Edit button
  // From: Features\Leads.feature:71:5
});

Then('User able to update new lead record fields', async ({}) => {
  // Step: Then User able to update new lead record fields
  // From: Features\Leads.feature:72:5
});

When('User clicks insights button', async ({}) => {
  // Step: When User clicks insights button
  // From: Features\Leads.feature:76:5
});

Then('User able to see insights of the new lead record', async ({}) => {
  // Step: Then User able to see insights of the new lead record
  // From: Features\Leads.feature:77:5
});

Given('user is on new lead record with actions dropdown', async ({}) => {
  // Step: Given user is on new lead record with actions dropdown
  // From: Features\Leads.feature:80:5
});

When('user clicks on actions drop down', async ({}) => {
  // Step: When user clicks on actions drop down
  // From: Features\Leads.feature:81:5
});

Then('User able to see the following options in the actions drop down:', async ({}, dataTable) => {
  // Step: Then User able to see the following options in the actions drop down:
  // From: Features\Leads.feature:82:5
});

When('user clicks on Delete option', async ({}) => {
  // Step: When user clicks on Delete option
  // From: Features\Leads.feature:93:5
});

Then('User able to see popup to delete Lead record', async ({}) => {
  // Step: Then User able to see popup to delete Lead record
  // From: Features\Leads.feature:94:5
});

When('user clicks on View Change Log option', async ({}) => {
  // Step: When user clicks on View Change Log option
  // From: Features\Leads.feature:98:5
});

Then('User able to see change log of the new lead record', async ({}) => {
  // Step: Then User able to see change log of the new lead record
  // From: Features\Leads.feature:99:5
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
