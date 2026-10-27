
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import testData from '../Testdata/testdata.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

Given('user is on Home page', async ({ loginPage }) => {
  await loginPage.verifyHomePage();
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

Given('User is on  create Lead from Vcard page', async ({leadPage}) => {
  await leadPage.clickLeadsOption('Create Lead From vCard');
});

When('User selects Vcard file', async ({leadPage}) => {
  //await leadPage.clickChooseFileButton();
  await leadPage.selectVcardFile('lead.vcf');
});

Then('User should see selected file on page', async ({leadPage}) => {
 await leadPage.verifySelectedFile('lead.vcf');
});

Given('User is on  create Lead from Vcard page with selcted file', async ({leadPage}) => {
  await leadPage.clickLeadsOption('Create Lead From vCard');
  await leadPage.selectVcardFile('lead.vcf');
    await leadPage.verifySelectedFile('lead.vcf');
});

When('User clicks Import Vcard button', async ({leadPage}) => {
  await leadPage.clickImportButton();
});

Then('User should see imported file details on page', async ({leadPage}) => {
 await leadPage.verifyImportedDetails();
});

Given('user is on Create Lead from vCard page', async ({leadPage}) => {
  await leadPage.clickLeadsOption('Create Lead From vCard');
});

When('user selects {string} from TestData', async ({ leadPage }, fileName) => {
  await leadPage.selectVcardFile(fileName);
  await leadPage.clickImportButton();
});

Then('user should see {string}', async ({ leadPage }, message) => {
  await leadPage.verifyValidationMessage(message);
});

Given('user is on View Leads page', async ({leadPage}) => {
  await leadPage.clickLeadsOption('View Leads');
});

When('User views features on View Leads page', async ({ leadPage }) => {
  await leadPage.viewLeadFeatures();
});

Then('user should see the following features in the View Leads page:', async ({leadPage}, dataTable) => {
  const features = dataTable.rows().map(row => row[0]);

        for (const feature of features) {
            await leadPage.verifyViewFeatureDisplayed(feature);
}
});

When('User clicks on Bulk Action drop down', async ({leadPage}) => {
 await leadPage.clickBulkActionDropdown();
});

Then('User able to see the following options in the Bulk Action drop down:', async ({leadPage}, dataTable) => {
   const expectedOptions = dataTable.raw().slice(1).map(([option]) => option.trim());
    await leadPage.verifyBulkActionOptions(expectedOptions);
    
  
});


When('User selects This Page from the selection menu', async ({ leadPage }) => {
  await leadPage.viewLeadFeatures();
  await leadPage.selectCurrentPageLeads();
});

Then('User should see only current page Leads records selected', async ({ leadPage }) => {
  await leadPage.verifyCurrentPageLeadsSelected();
});

When('User clicks on Filter', async ({leadPage}) => {
  await leadPage.openLeadFilters();
});

Then('User should see filter options to filter leads records', async ({leadPage}) => {
   await leadPage.verifyLeadFiltersDisplayed();
});

Given('user is on the View Leads page with filter options', async ({ leadPage }) => {
  await leadPage.clickLeadsOption('View Leads');
  await leadPage.openLeadFilters();
});

When('user enters a last name in the filter', async ({ leadPage }) => {
  await leadPage.enterLastNameFilter();
});

Then('the last name should be displayed in the filter field', async ({ leadPage }) => {
  await leadPage.verifyLastNameFilterValue();
});

Given('user is on View Leads page with specified lastname on filter options', async ({ leadPage }) => {
    await leadPage.clickLeadsOption('Create Lead');
await leadPage.createLeadWithValidData();
await leadPage.verifyNewCreatedLeadRecordisDisplayed();

await leadPage.clickLeadsOption('View Leads');
await leadPage.openLeadFilters();
await leadPage.enterLastNameFilter(testData.validLead.lastName);
await leadPage.verifyLastNameFilterValue();
});

When('user clicks the search button', async ({ leadPage }) => {
  await leadPage.searchLeadsByLastName();
});

Then('User should see leads records matching the specified last name', async ({ leadPage }) => {
  await leadPage.verifyLeadsMatchLastName();
});
Given('user is on the Import Leads page', async ({ leadPage }) => {
  await leadPage.clickLeadsOption('Import Leads');
});

When('user selects a valid import file from TestData', async ({ leadPage }) => {
  await leadPage.selectImportFile();
});

Then('the selected file name should be displayed', async ({ leadPage }) => {
  await leadPage.verifyImportFileSelected('leads.csv');
});

When('user clicks the Next button without selecting a file', async ({ leadPage }) => {
  await leadPage.clickNextWithoutImportFile();
});

Then('user should see a file validation message', async ({ leadPage }) => {
  await leadPage.verifyImportFileValidationMessage();
});