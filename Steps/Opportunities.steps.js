import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';

const { Given, When, Then } = createBdd(test);

//---------------------------@OpportunitiesTab---------------------------------------

When('User Hover over Opportunities tab', async ({}) => {
  // Step: When User Hover over Opportunities tab
  // From: Features\Opportunities.feature:9:5
});

Then('Opportunities dropdown menu should expand', async ({}) => {
  // Step: Then Opportunities dropdown menu should expand
  // From: Features\Opportunities.feature:10:5
});

When('Opportunities dropdown menu is expanded', async ({}) => {
  // Step: When Opportunities dropdown menu is expanded
  // From: Features\Opportunities.feature:14:5
});


//-------------------------@Createopportunity--------------------------------------------

Given('User is on Create Opportunity screen', async ({}) => {
  // Step: Given User is on Create Opportunity screen
  // From: Features\Opportunities.feature:33:9
});

When('User View the Create Opportunity screen', async ({}) => {
  // Step: When User View the Create Opportunity screen
  // From: Features\Opportunities.feature:34:9
});

Then('The following tabs and buttons should display on Create Opportunity screen', async ({}, dataTable) => {
  // Step: Then The following tabs and buttons should display on Create Opportunity screen
  // From: Features\Opportunities.feature:35:9
});

//-------------------------@Createopportunity-Savepositive--------------------------------

Given('User is on the Create opportunity screen Basic tab', async ({}) => {
  // Step: Given User is on the Create opportunity screen Basic tab
  // From: Features\Opportunities.feature:45:9
});

When('User clicks the Save button on Basic tab by providing mandatory details', async ({}) => {
  // Step: When User clicks the Save button on Basic tab by providing mandatory details
  // From: Features\Opportunities.feature:46:9
});

Then('User should redirected to Opportunity record details screen', async ({}) => {
  // Step: Then User should redirected to Opportunity record details screen
  // From: Features\Opportunities.feature:47:9
});

//-------------------------@Createopportunity-Savenegative--------------------------------

When('User clicks the Save button on Basic tab with all fields empty', async ({}) => {
  // Step: When User clicks the Save button on Basic tab with all fields empty
  // From: Features\Opportunities.feature:53:9
});

Then('User should see error message on Basic tab Missing required field: <fieldname>', async ({}, dataTable) => {
  // Step: Then User should see error message on Basic tab Missing required field: <fieldname>
  // From: Features\Opportunities.feature:54:9
});

When('User enters Invalid data in <fieldname> on Basic tab', async ({}) => {
  // Step: When User enters Invalid data in <fieldname> on Basic tab
  // From: Features\Opportunities.feature:64:9
});

Then('User should see error message <message> on Basic tab', async ({}, dataTable) => {
  // Step: Then User should see error message <message> on Basic tab
  // From: Features\Opportunities.feature:65:9
});

Given('User is on Create opportunity screen Other tab', async ({}) => {
  // Step: Given User is on Create opportunity screen Other tab
  // From: Features\Opportunities.feature:72:9
});

When('User clicks the Save button on Other tab without providing mandatory details', async ({}) => {
  // Step: When User clicks the Save button on Other tab without providing mandatory details
  // From: Features\Opportunities.feature:73:9
});

Then('User should see error message on Other tab {string}', async ({}, arg) => {
  // Step: Then User should see error message on Other tab "There are validation errors,unable to perform action "
  // From: Features\Opportunities.feature:74:9
});

//-------------------------@Createopportunity-Cancelpositive--------------------------------

When('User clicks the Cancel button with all fields empty on Basic tab', async ({}) => {
  // Step: When User clicks the Cancel button with all fields empty on Basic tab
  // From: Features\Opportunities.feature:80:9
});

Then('User should navigate to View Opportunities screen with list of all existing contacts', async ({}) => {
  // Step: Then User should navigate to View Opportunities screen with list of all existing contacts
  // From: Features\Opportunities.feature:81:9
});
//-------------------------@Createopportunity-Cancelnegative--------------------------------

When('User clicks the Cancel button by entering the data in at least one field on Basic tab', async ({}) => {
  // Step: When User clicks the Cancel button by entering the data in at least one field on Basic tab
  // From: Features\Opportunities.feature:87:5
});

Then('User should see a popup that the record is not save with {string} and {string} buttons from Basic tab', async ({}, arg, arg1) => {
  // Step: Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from Basic tab
  // From: Features\Opportunities.feature:88:5
});

Given('User is on the Create opportunity screen Other tab', async ({}) => {
  // Step: Given User is on the Create opportunity screen Other tab
  // From: Features\Opportunities.feature:92:5
});

When('User clicks the Cancel button by entering the data in at least one field on Basic Tab', async ({}) => {
  // Step: When User clicks the Cancel button by entering the data in at least one field on Basic Tab
  // From: Features\Opportunities.feature:93:5
});

Then('User should see a popup that the record is not save with {string} and {string} buttons from Other tab', async ({}, arg, arg1) => {
  // Step: Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from Other tab
  // From: Features\Opportunities.feature:94:5
});


//-------------------------@Viewopportunities--------------------------------

Given('User is on the View opportunities screen', async ({}) => {
  // Step: Given User is on the View opportunities screen
  // From: Features\Opportunities.feature:99:5
});

Then('User should be able to see the selected Opportunity from list of Opportunities', async ({}) => {
  // Step: Then User should be able to see the selected Opportunity from list of Opportunities
  // From: Features\Opportunities.feature:101:5
});

When('User selects the Opportunity and click on Delete from Bulk Action drop down', async ({}) => {
  // Step: When User selects the Opportunity and click on Delete from Bulk Action drop down
  // From: Features\Opportunities.feature:116:5
});

Then('The selected Opportunity should be Deleted from the list', async ({}) => {
  // Step: Then The selected Opportunity should be Deleted from the list
  // From: Features\Opportunities.feature:117:5
});

When('User selects the Opportunity and click on Export from Bulk Action drop down', async ({}) => {
  // Step: When User selects the Opportunity and click on Export from Bulk Action drop down
  // From: Features\Opportunities.feature:121:5
});

Then('The selected Opportunity should be Exported into .csv file', async ({}) => {
  // Step: Then The selected Opportunity should be Exported into .csv file
  // From: Features\Opportunities.feature:122:5
});

Then('The selected opportunity records should be Merged', async ({}) => {
  // Step: Then The selected opportunity records should be Merged
  // From: Features\Opportunities.feature:127:5
});

When('User selects two or more opportunities and click on Mass Update from Bulk Action drop down', async ({}) => {
  // Step: When User selects two or more opportunities and click on Mass Update from Bulk Action drop down
  // From: Features\Opportunities.feature:131:5
});

Then('User should be able to Update the selected opportunity record', async ({}) => {
  // Step: Then User should be able to Update the selected opportunity record
  // From: Features\Opportunities.feature:132:5
});

When('User do not select at least one record from list of opportunities', async ({}) => {
  // Step: When User do not select at least one record from list of opportunities
  // From: Features\Opportunities.feature:136:5
});

Then('The Bulk Action Option should be disabled in View opportunities screen', async ({}) => {
  // Step: Then The Bulk Action Option should be disabled in View opportunities screen
  // From: Features\Opportunities.feature:137:5
});

//-------------------------@Importopportunities--------------------------------

Given('User is on Upload Import File screen on Import Opportunities screen', async ({}) => {
  // Step: Given User is on Upload Import File screen on Import Opportunities screen
  // From: Features\Opportunities.feature:142:9
});

When('User clicks on Download Import File Template link on Import Opportunities screen', async ({}) => {
  // Step: When User clicks on Download Import File Template link on Import Opportunities screen
  // From: Features\Opportunities.feature:143:9
});

Then('The File Template in .CSV format should be downloaded on Import Opportunities screen', async ({}) => {
  // Step: Then The File Template in .CSV format should be downloaded on Import Opportunities screen
  // From: Features\Opportunities.feature:144:9
});

When('User click on Choose File button to uploads a valid file on Import Opportunities screen', async ({}) => {
  // Step: When User click on Choose File button to uploads a valid file on Import Opportunities screen
  // From: Features\Opportunities.feature:149:9
});

Then('The system should display the imported file in related format on Import Opportunities screen', async ({}) => {
  // Step: Then The system should display the imported file in related format on Import Opportunities screen
  // From: Features\Opportunities.feature:150:9
});

When('User uploads valid file format and click on Next Button on Import Opportunities screen', async ({}) => {
  // Step: When User uploads valid file format and click on Next Button on Import Opportunities screen
  // From: Features\Opportunities.feature:154:9
});

Then('User should navigate to Confirm Import File Properties screen on Import Opportunities screen', async ({}) => {
  // Step: Then User should navigate to Confirm Import File Properties screen on Import Opportunities screen
  // From: Features\Opportunities.feature:155:9
});

Given('User is on Confirm Import File Properties screen -Import Opportunities screen', async ({}) => {
  // Step: Given User is on Confirm Import File Properties screen -Import Opportunities screen
  // From: Features\Opportunities.feature:159:9
});

When('User clicks Next button on Confirm Import File Properties screen -Import Opportunities screen', async ({}) => {
  // Step: When User clicks Next button on Confirm Import File Properties screen -Import Opportunities screen
  // From: Features\Opportunities.feature:160:9
});

Then('User should navigate to Confirm Field Mappings screen -Import Opportunities screen', async ({}) => {
  // Step: Then User should navigate to Confirm Field Mappings screen -Import Opportunities screen
  // From: Features\Opportunities.feature:161:9
});
Given('User is on Confirm Field Mappings screen -Import Opportunities screen', async ({}) => {
  // Step: Given User is on Confirm Field Mappings screen -Import Opportunities screen
  // From: Features\Opportunities.feature:165:9
});

When('User clicks Next button on Confirm Field Mappings screen -Import Opportunities screen', async ({}) => {
  // Step: When User clicks Next button on Confirm Field Mappings screen -Import Opportunities screen
  // From: Features\Opportunities.feature:166:9
});

Then('User should navigate to Check for Possible Duplicates screen -Import Opportunities screen', async ({}) => {
  // Step: Then User should navigate to Check for Possible Duplicates screen -Import Opportunities screen
  // From: Features\Opportunities.feature:167:9
});

Given('User is on Check for Possible Duplicates screen -Import Opportunities screen', async ({}) => {
  // Step: Given User is on Check for Possible Duplicates screen -Import Opportunities screen
  // From: Features\Opportunities.feature:170:9
});

When('User clicks Import Button on Check for Possible Duplicates screen-Import Opportunities screen', async ({}) => {
  // Step: When User clicks Import Button on Check for Possible Duplicates screen-Import Opportunities screen
  // From: Features\Opportunities.feature:171:9
});

Then('User should navigate to View Import Results Screen-Import Opportunities screen', async ({}) => {
  // Step: Then User should navigate to View Import Results Screen-Import Opportunities screen
  // From: Features\Opportunities.feature:172:9
});

Given('User is on  View Import Results screen-Import Opportunities screen', async ({}) => {
  // Step: Given User is on  View Import Results screen-Import Opportunities screen
  // From: Features\Opportunities.feature:175:9
});

When('User clicks {string} on  View Import Results screen-Import Opportunities screen', async ({}, arg) => {
  // Step: When User clicks "Exit" on  View Import Results screen-Import Opportunities screen
  // From: Features\Opportunities.feature:176:9
});

Then('User should navigate to View Opportunities screen-Import Opportunities screen', async ({}) => {
  // Step: Then User should navigate to View Opportunities screen-Import Opportunities screen
  // From: Features\Opportunities.feature:177:9
});

Given('User is on Upload Import File screen -Import Opportunities screen', async ({}) => {
  // Step: Given User is on Upload Import File screen -Import Opportunities screen
  // From: Features\Opportunities.feature:180:9
});
When('User click on Choose File button to uploads an Invalid file -Import Opportunities screen', async ({}) => {
  // Step: When User click on Choose File button to uploads an Invalid file -Import Opportunities screen
  // From: Features\Opportunities.feature:181:9
});

Then('The system should display the appropriate validation error message-Import Opportunities screen', async ({}) => {
  // Step: Then The system should display the appropriate validation error message-Import Opportunities screen
  // From: Features\Opportunities.feature:182:9
});

When('User click on Next button without uploading a valid file-Import Opportunities screen', async ({}) => {
  // Step: When User click on Next button without uploading a valid file-Import Opportunities screen
  // From: Features\Opportunities.feature:186:9
});

Then('The system should display an error message {string} in Red color-Import Opportunities screen', async ({}, arg) => {
  // Step: Then The system should display an error message "No file choosen" in Red color-Import Opportunities screen
  // From: Features\Opportunities.feature:187:9
});
