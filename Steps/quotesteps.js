import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import testData from '../Testdata/testdata.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

When('User mouse hover on Quotes', async ({quotesPage}) => {
  await quotesPage.hoverOnQuotes();
});

Then('User should see the following options in the Quotes dropdown is Displayed:', async ({quotesPage}, dataTable) => {
   const options = dataTable.raw().slice(1).map(([option]) => option);
  await quotesPage.verifyDropdownOptions(options);
});

When('User clicks {string} on Quotes drop down', async ({quotesPage}, name) => {
  await quotesPage.clickQuotesOption(name);
});
Then('user should be redirected to the {string} Page', async ({quotesPage}, pageName) => {
  await quotesPage.redirectedpage(pageName);
});
Given('user is on Create Quote page', async ({quotesPage}) => {
    await quotesPage.clickQuotesOption('Create Quote');
});

When('User views features on Quote page', async ({quotesPage}) => {
  await quotesPage.viewCreateQuoteFeatures();
});

Then('user should see the following features in the Create Quote page is Displayed:', async ({quotesPage}, dataTable) => {
  const features = dataTable.rows().map(row => row[0]);

        for (const feature of features) {
            await quotesPage.verifyCreateQuoteFeatureDisplayed(feature);
}
});

When('User clicks on Save button without entering any details', async ({ quotesPage }) => {
  await quotesPage.saveQuoteWithoutDetails();
});
When('user clicks on Save button by entering {string} on Create Quote page', async ({ quotesPage }, fieldName) => {
  await quotesPage.saveQuoteWithInvalidDetails(fieldName);
});

Then('user able to see error message {string}', async ({ quotesPage }, message) => {
  await quotesPage.verifyQuoteErrorMessage(message);
});

When('user clicks on Save button by entering valid data in all mandatory fields', async ({ quotesPage }) => {
    await quotesPage.createQuoteWithValidData();
  }
);

Then('user should be redirected to the new Quote record page with features',async ({ quotesPage }) => {
    await quotesPage.verifyNewQuoteCreated();
  }
);

When('user clicks on Cancel button by entering valid data in all mandatory fields', async ({quotesPage}) => {
  await quotesPage.clickCancelButtonWithValidData();
});


Then('user should be redirected to the View Quotes page', async ({quotesPage}) => {
  await quotesPage.viewQuotesPageDisplayed();
});

Given('user is on new Quote record page', async ({quotesPage}) => {
  await quotesPage.createNewQuoteRecord();
});
When('user clicks on Edit button', async ({quotesPage}) => {
  await quotesPage.clickEditQuoteButton();
});
Then('User able to update new Quote record fields', async ({quotesPage}) => {
  await quotesPage.updateAndVerifyQuoteTitle();
});

Given('user is on new Quote record with actions dropdown', async ({quotesPage}) => {
  await quotesPage.createNewQuoteRecord();
});

When('user opens the actions drop down on Quote record', async ({quotesPage}) => {
  await quotesPage.openQuoteActionsDropdown();
});

Then('User able to see the following options in the actions drop down of new Quote record page:', async ({quotesPage}, dataTable) => {
  const options = dataTable.rows().map(([option]) => option.trim());
  await quotesPage.verifyQuoteActionsOptions(options);
});

When('user selects Delete for the Quote record', async ({quotesPage}) => {
  await quotesPage.clickDeleteQuoteAndVerifyPrompt();
});

Then('User able to see popup to delete Quote record', async ({quotesPage}) => {
  await quotesPage.verifyDeleteQuotePrompt();
});
Given('user is on an updated Quote record page', async ({quotesPage}) => {
  await quotesPage.createUpdatedQuoteRecord();
});

When('user opens the View Change Log for Quote', async ({quotesPage}) => {
  await quotesPage.openQuoteChangeLog();
});

Then('user should see the updated Quote title in the change log', async ({quotesPage}) => {
  await quotesPage.verifyUpdatedQuoteTitleInChangeLog();
});
Given('user is on View Quotes page', async ({quotesPage}) => {
  await quotesPage.openViewQuotesPage();
});
Given('user is on View Quotes page with a Quote record', async ({quotesPage}) => {
  await quotesPage.createQuoteAndOpenList();
});
When('User opens the Bulk Action drop down on Quotes page', async ({quotesPage}) => {
  await quotesPage.openBulkActionDropdownForQuote();
});
Then('User able to see the following options in the Bulk Action drop down on Quotes page:', async ({quotesPage}, dataTable) => {
  const options = dataTable.raw().slice(1).map(([option]) => option.trim());
  await quotesPage.verifyQuoteBulkActionOptions(options);
});
When('User views features on Quotes page', async ({quotesPage}) => {
  await quotesPage.viewQuotesPageDisplayed();
});
Then('user should see the following features in the View Quotes page:', async ({quotesPage}, dataTable) => {
  const features = dataTable.rows().map(([feature]) => feature.trim());
  for (const feature of features) {
    await quotesPage.verifyViewQuotesFeature(feature);
  }
});
Then('User should see filter options to filter quotes records', async ({quotesPage}) => {
  await quotesPage.verifyQuoteTitleFilterDisplayed();
});
When('User clicks on Filter on Quotes page', async ({quotesPage}) => {
  await quotesPage.openQuoteFilters();
});
Given('user is on the View Quotes page with filter options', async ({quotesPage}) => {
  await quotesPage.openViewQuotesPage();
  await quotesPage.openQuoteFilters();
});
When('user enters a title in the filter', async ({quotesPage}) => {
  await quotesPage.enterQuoteTitleFilter();
});
Then('title should be displayed in the filter field', async ({quotesPage}) => {
  await quotesPage.verifyQuoteTitleFilterValue();
});
Given('user is on View Quotes page with specified title on filter options', async ({quotesPage}) => {
  await quotesPage.openViewQuotesWithTitleFilter();
});
When('user clicks the Quote filter search button', async ({quotesPage}) => {
  await quotesPage.searchQuotesByTitle();
});
Then('User should see quotes records matching the specified title', async ({quotesPage}) => {
  await quotesPage.verifyQuotesMatchTitle();
});

Given('User is on  import page', async ({quotesPage}) => {
  await quotesPage.openQuoteImportPage();
});

When('User clicks choose file button with invalid file', async ({quotesPage}) => {
  await quotesPage.selectQuoteImportFile('invalid.vcf');
  await quotesPage.clickQuoteImportNext();
});

Then('User should see the CSV import file properties error', async ({quotesPage}) => {
  await quotesPage.verifyQuoteImportError();
});

Given('user is on Quotes page', async ({quotesPage}) => {
  await quotesPage.prepareRecentlyViewedQuote();
});

When('user mouse hover on Recently Viewed option', async ({quotesPage}) => {
  await quotesPage.hoverRecentlyViewed();
});
Then('user should see the recent opened quote appears in Recently Viewed option', async ({quotesPage}) => {
  await quotesPage.verifyRecentQuoteDisplayed();
});

When('User clicks choose file button with valid csv file', async ({quotesPage}) => {
  await quotesPage.selectQuoteImportFile('quotes.csv');
});

Then('User should see selected Quote CSV file on import page', async ({quotesPage}) => {
  await quotesPage.verifyQuoteImportFileSelected('quotes.csv');
});

When('User clicks next button', async ({quotesPage}) => {
  await quotesPage.clickQuoteImportNext();
});

Then('User should see error message {string}', async ({quotesPage}, message) => {
  await quotesPage.verifyQuoteImportValidationMessage(message);
});