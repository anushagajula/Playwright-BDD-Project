import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';
import opportunityTestdata from '../Testdata/opportunityTestdata.json' with {type:'json'};


const { Given, When, Then} = createBdd(test);

//---------------------------@OpportunitiesTab---------------------------------------
Given('User is on SuiteCRM Application Home page and view Opportunities tab', async ({opportunitiesPage}) => {
 await opportunitiesPage.verifyHomePage();}
);

When('User Hover over Opportunities tab', async ({opportunitiesPage}) => {
  await opportunitiesPage.hoverOverOpportunities() 
});

Then('Opportunities dropdown menu should expand', async ({opportunitiesPage}) => {
  
  await opportunitiesPage.verifyDropdownExpanded()
});

When('Opportunities dropdown menu is expanded', async ({opportunitiesPage}) => {
  await opportunitiesPage.hoverOverOpportunities();
  await opportunitiesPage.verifyDropdownExpanded();
});
Then('The following options should display under opportunities', async ({opportunitiesPage}, dataTable) => {
  const expectedOptions = dataTable.raw().flat();
  await opportunitiesPage.verifyDropdownOptions(expectedOptions);
});


Given('User is on the Create opportunity screen Basic tab', async ({opportunitiesPage}) => {
  await opportunitiesPage.verifyCreateOpportunityPage();

});

When('User clicks the Save button on Basic tab by providing mandatory details', async ({opportunitiesPage}) => {
  const opportunity = opportunityTestdata.opportunities.Validdata;
  await opportunitiesPage.enterOpportunityDetails(opportunity);
  await opportunitiesPage.saveOpportunity();  
});

Then('User should redirected to Opportunity record details screen', async ({opportunitiesPage}) => {
  await opportunitiesPage.verifyopportunityDetails
});


Given('User is on the View opportunities screen', async ({opportunitiesPage}) => {
  await opportunitiesPage.hoverOverOpportunities();
  await opportunitiesPage.verifyDropdownExpanded(); 
  await opportunitiesPage.verifyviewOpportunityspage();
});

When('User selects the checkbox on the View opportunities screen', async ({opportunitiesPage}) => {
  await opportunitiesPage.verifyviewOpportunitydropdown();
});

Then('User should be able to see the selected Opportunity from list of Opportunities', async ({opportunitiesPage}) => {
  // Step: Then User should be able to see the selected Opportunity from list of Opportunities
  // From: Features\Opportunities.feature:80:9
});

When('User clicks on Opportunities Bulk Action drop down on View Opportunities screen and selects Export option', async ({opportunitiesPage}) => {
    await opportunitiesPage.verifyviewOpportunitydropdown();      
    await opportunitiesPage.clickBulkActionDropdownopportunities();
    await opportunitiesPage.exportOpportunity();
});
Then('the opportunities file is downloaded', async ({opportunitiesPage}) => {
  // Step: Then the opportunities file is downloaded
  // From: Features\Opportunities.feature:85:9
});

Given('User is on Upload Import File screen on Import Opportunities screen', async ({opportunitiesPage}) => {
  await opportunitiesPage.hoverOverOpportunities();
   await opportunitiesPage.verifyDropdownExpanded(); 
   await opportunitiesPage.importOpportunitypage();
});

When('User click on Choose File button to uploads a valid file on Import Opportunities screen', async ({opportunitiesPage}) => {
  await opportunitiesPage.uploadfileopportunities();
  await opportunitiesPage.clickNextButtonopportunities();
});

Then('The system should display the imported file in related format on Import Opportunities screen', async ({opportunitiesPage}) => {
 await opportunitiesPage.Importfilepropertiesopportunities();
});

