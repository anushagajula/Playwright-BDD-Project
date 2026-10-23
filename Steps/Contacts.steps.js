import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';

const { Given, When, Then } = createBdd(test);

//---------------------------@ContactsTab---------------------------------------

Given('User is on SuiteCRM Application Home page', async ({page }) => {
    console.log('Given step executed');
  // Step: Given User is on SuiteCRM Application Home page
  // From: Features\Contacts.feature:5:1
});


When('User Hover over Contacts tab', async ({}) => {
     // Step: When User Hover over Contacts tab
  // From: Features\Contacts.feature:6:1
});

Then('Contacts dropdown menu should expand', async ({}) => {
  // Step: Then Contacts dropdown menu should expand
  // From: Features\Contacts.feature:7:1
});

When('Contacts dropdown menu is expanded', async ({}) => {
  // Step: When Contacts dropdown menu is expanded
  // From: Features\Contacts.feature:14:7
});

Then('The following options should display', async ({}, dataTable) => {
  // Step: Then The following options should display
  // From: Features\Contacts.feature:15:5
});

When('User clicks <name>', async ({}) => {
  // Step: When User clicks <name>
  // From: Features\Contacts.feature:23:5
});

Then('User should be redirected to <page> screen', async ({}, dataTable) => {
  // Step: Then User should be redirected to <page> screen
  // From: Features\Contacts.feature:24:5
});


//---------------------------@CreateContacts---------------------------------------

Given('User is on Create contact screen', async ({}) => {
  // Step: Given User is on Create contact screen
  // From: Features\Contacts.feature:35:5
});

When('User View the Create contact screen', async ({}) => {
  // Step: When User View the Create contact screen
  // From: Features\Contacts.feature:36:5
});

Then('The following tabs and buttons should display', async ({}, dataTable) => {
  // Step: Then The following tabs and buttons should display
  // From: Features\Contacts.feature:37:5
});

//---------------------------@CreateContacts-Save Positive--------------------------------------

Given('User is on the Create Contact screen Overview tab', async ({}) => {
  // Step: Given User is on the Create Contact screen Overview tab
  // From: Features\Contacts.feature:47:5
});

When('User clicks the Save button by providing mandatory details', async ({}) => {
  // Step: When User clicks the Save button by providing mandatory details
  // From: Features\Contacts.feature:48:5
});

Then('User should redirected to record details screen', async ({}) => {
  // Step: Then User should redirected to record details screen
  // From: Features\Contacts.feature:49:5
});

//---------------------------@CreateContacts-Save Negative--------------------------------------

When('User clicks the Save button with all fields empty', async ({}) => {
  // Step: When User clicks the Save button with all fields empty
  // From: Features\Contacts.feature:52:5
});

Then('User should see error message on Overview tab {string}', async ({}, arg) => {
  // Step: Then User should see error message on Overview tab "Missing required field: Last Name"
  // From: Features\Contacts.feature:53:5
});

When('User enters Invalid data in <fieldname>', async ({}) => {
  // Step: When User enters Invalid data in <fieldname>
  // From: Features\Contacts.feature:57:5
});

Then('User should see error message <message>', async ({}, dataTable) => {
  // Step: Then User should see error message <message>
  // From: Features\Contacts.feature:58:5
});

Given('User is on Create Contact screen More Information tab', async ({}) => {
  // Step: Given User is on Create Contact screen More Information tab
  // From: Features\Contacts.feature:65:5
});

When('User clicks the Save button without providing mandatory details', async ({}) => {
  // Step: When User clicks the Save button without providing mandatory details
  // From: Features\Contacts.feature:66:5
});

Then('User should see error message on More Information tab {string}', async ({}, arg) => {
  // Step: Then User should see error message on More Information tab "Missing required field: Last Name"
  // From: Features\Contacts.feature:67:5
});

//---------------------------@CreateContacts-cancel Positive--------------------------------------
When('User clicks the Cancel button with all fields empty', async ({}) => {
  // Step: When User clicks the Cancel button with all fields empty
  // From: Features\Contacts.feature:72:5
});

Then('User should navigate to View Contacts screen with list of all existing contacts', async ({}) => {
  // Step: Then User should navigate to View Contacts screen with list of all existing contacts
  // From: Features\Contacts.feature:73:5
});

//---------------------------@CreateContacts-cancel Negative--------------------------------------
When('User clicks the Cancel button by entering the data in at least one field', async ({}) => {
  // Step: When User clicks the Cancel button by entering the data in at least one field
  // From: Features\Contacts.feature:78:5
});

Then('User should see a popup that the record is not save with {string} and {string} buttons from Overview tab', async ({}, arg, arg1) => {
  // Step: Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from Overview tab
  // From: Features\Contacts.feature:79:5
});

Given('User is on the Create Contact screen More Information tab', async ({}) => {
  // Step: Given User is on the Create Contact screen More Information tab
  // From: Features\Contacts.feature:83:5
});

When('User clicks the Cancel button by entering the data in at least one field on Overview Tab', async ({}) => {
  // Step: When User clicks the Cancel button by entering the data in at least one field on Overview Tab
  // From: Features\Contacts.feature:84:5
});

Then('User should see a popup that the record is not save with {string} and {string} buttons from More Information tab', async ({}, arg, arg1) => {
  // Step: Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from More Information tab
  // From: Features\Contacts.feature:85:5
});

//---------------------------@CreateContactsVcard-positive--------------------------------------

Given('User is on Create Contact from vCard screen', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('User click on Choose File button to uploads a valid vCard file', async ({}) => {
  // Step: When User click on Choose File button to uploads a valid vCard file
  // From: Features\Contacts.feature:91:5
});

Then('User should see the selected file in .vcf format', async ({}) => {
  // Step: Then User should see the selected file in .vcf format
  // From: Features\Contacts.feature:92:5
});

When('User clicks on Import Vcard button', async ({}) => {
  // Step: When User clicks on Import Vcard button
  // From: Features\Contacts.feature:96:5
});

Then('User should see the record details screen', async ({}) => {
  // Step: Then User should see the record details screen
  // From: Features\Contacts.feature:97:5
});

//---------------------------@CreateContactsVcard-negative--------------------------------------

When('User uploads an Invalid file format and clicks on Import Vcard button', async ({}) => {
  // Step: When User uploads an Invalid file format and clicks on Import Vcard button
  // From: Features\Contacts.feature:102:5
});

Then('User should see an error message {string}', async ({}, arg) => {
  // Step: Then User should see an error message "Vcard Doesnot have all required fields for this module.Please refer to suitecrm.log for details"
  // From: Features\Contacts.feature:103:5
});

When('User uploads an oversized file and clicks on Import Vcard button', async ({}) => {
  // Step: When User uploads an oversized file and clicks on Import Vcard button
  // From: Features\Contacts.feature:107:5
});

When('User clicks Import Vcard button without selecting a file', async ({}) => {
  // Step: When User clicks Import Vcard button without selecting a file
  // From: Features\Contacts.feature:112:5
});

Then('User should see an Alert popup', async ({}) => {
  // Step: Then User should see an Alert popup
  // From: Features\Contacts.feature:113:5
});

//---------------------------@ViewContacts--------------------------------------

Given('User is on the View Contacts screen', async ({}) => {
  // Step: Given User is on the View Contacts screen
  // From: Features\Contacts.feature:123:5
});

When('User selects the checkbox', async ({}) => {
  // Step: When User selects the checkbox
  // From: Features\Contacts.feature:124:5
});

Then('User should be able to see the selected Contact from list of contacts', async ({}) => {
  // Step: Then User should be able to see the selected Contact from list of contacts
  // From: Features\Contacts.feature:125:5
});

When('User clicks on Bulk Action drop down', async ({}) => {
  // Step: When User clicks on Bulk Action drop down
  // From: Features\Contacts.feature:129:5
});

Then('User able to see the following options in the Bulk Action drop down', async ({}, dataTable) => {
  // Step: Then User able to see the following options in the Bulk Action drop down
  // From: Features\Contacts.feature:130:5
});

When('User selects the Contact and click on Delete from Bulk Action drop down', async ({}) => {
  // Step: When User selects the Contact and click on Delete from Bulk Action drop down
  // From: Features\Contacts.feature:142:5
});

Then('The selected Contact should be Deleted from the list', async ({}) => {
  // Step: Then The selected Contact should be Deleted from the list
  // From: Features\Contacts.feature:143:5
});

When('User selects the Contact and click on Export from Bulk Action drop down', async ({}) => {
  // Step: When User selects the Contact and click on Export from Bulk Action drop down
  // From: Features\Contacts.feature:147:5
});

Then('The selected Contact should be Exported into .csv file', async ({}) => {
  // Step: Then The selected Contact should be Exported into .csv file
  // From: Features\Contacts.feature:148:5
});

When('User selects two or more contacts and click on Merge from Bulk Action drop down', async ({}) => {
  // Step: When User selects two or more contacts and click on Merge from Bulk Action drop down
  // From: Features\Contacts.feature:152:5
});
Then('The selected records should be Merged', async ({}) => {
  // Step: Then The selected records should be Merged
  // From: Features\Contacts.feature:153:5
});

When('User selects two or more Contacts and click on Mass Update from Bulk Action drop down', async ({}) => {
  // Step: When User selects two or more Contacts and click on Mass Update from Bulk Action drop down
  // From: Features\Contacts.feature:157:5
});

Then('User should be able to Update the selected records', async ({}) => {
  // Step: Then User should be able to Update the selected records
  // From: Features\Contacts.feature:158:5
});

When('User do not select at least one record from list of Contacts', async ({}) => {
  // Step: When User do not select at least one record from list of Contacts
  // From: Features\Contacts.feature:162:5
});

Then('The Bulk Action Option should be disabled', async ({}) => {
  // Step: Then The Bulk Action Option should be disabled
  // From: Features\Contacts.feature:163:5
});

//---------------------------@ImportContacts--------------------------------------

Given('User is on Upload Import File screen', async ({}) => {
  // Step: Given User is on Upload Import File screen
  // From: Features\Contacts.feature:168:5
});

When('User clicks on Download Import File Template link', async ({}) => {
  // Step: When User clicks on Download Import File Template link
  // From: Features\Contacts.feature:169:5
});

Then('The File Template in .CSV format should be downloaded', async ({}) => {
  // Step: Then The File Template in .CSV format should be downloaded
  // From: Features\Contacts.feature:170:5
});

When('User click on Choose File button to uploads a valid file', async ({}) => {
  // Step: When User click on Choose File button to uploads a valid file
  // From: Features\Contacts.feature:174:5
});

Then('The system should display the imported file in related format', async ({}) => {
  // Step: Then The system should display the imported file in related format
  // From: Features\Contacts.feature:175:5
});

When('User uploads valid file format and click on Next Button', async ({}) => {
  // Step: When User uploads valid file format and click on Next Button
  // From: Features\Contacts.feature:179:5
});

Then('User should navigate to Confirm Import File Properties screen', async ({}) => {
  // Step: Then User should navigate to Confirm Import File Properties screen
  // From: Features\Contacts.feature:180:5
});

Given('User is on Confirm Import File Properties screen', async ({}) => {
  // Step: Given User is on Confirm Import File Properties screen
  // From: Features\Contacts.feature:183:5
});

When('User clicks Next button on Confirm Import File Properties screen', async ({}) => {
  // Step: When User clicks Next button on Confirm Import File Properties screen
  // From: Features\Contacts.feature:184:5
});

Then('User should navigate to Confirm Field Mappings screen', async ({}) => {
  // Step: Then User should navigate to Confirm Field Mappings screen
  // From: Features\Contacts.feature:185:5
});

Given('User is on Confirm Field Mappings screen', async ({}) => {
  // Step: Given User is on Confirm Field Mappings screen
  // From: Features\Contacts.feature:188:5
});

When('User clicks Next button on Confirm Field Mappings screen', async ({}) => {
  // Step: When User clicks Next button on Confirm Field Mappings screen
  // From: Features\Contacts.feature:189:5
});

Then('User should navigate to Check for Possible Duplicates screen', async ({}) => {
  // Step: Then User should navigate to Check for Possible Duplicates screen
  // From: Features\Contacts.feature:190:5
});

Given('User is on Check for Possible Duplicates screen', async ({}) => {
  // Step: Given User is on Check for Possible Duplicates screen
  // From: Features\Contacts.feature:193:5
});

When('User clicks Import Button on Check for Possible Duplicates screen', async ({}) => {
  // Step: When User clicks Import Button on Check for Possible Duplicates screen
  // From: Features\Contacts.feature:194:5
});

Then('User should navigate to View Import Results Screen', async ({}) => {
  // Step: Then User should navigate to View Import Results Screen
  // From: Features\Contacts.feature:195:5
});

Given('User is on  View Import Results screen', async ({}) => {
  // Step: Given User is on  View Import Results screen
  // From: Features\Contacts.feature:198:5
});

When('User clicks {string} on  View Import Results screen', async ({}, arg) => {
  // Step: When User clicks "Exit" on  View Import Results screen
  // From: Features\Contacts.feature:199:5
});

Then('User should navigate to View Contacts screen', async ({}) => {
  // Step: Then User should navigate to View Contacts screen
  // From: Features\Contacts.feature:200:5
});

When('User click on Choose File button to uploads an Invalid file', async ({}) => {
  // Step: When User click on Choose File button to uploads an Invalid file
  // From: Features\Contacts.feature:204:5
});
Then('The system should display the appropriate validation error message', async ({}) => {
  // Step: Then The system should display the appropriate validation error message
  // From: Features\Contacts.feature:205:5
});

When('User click on Next button without uploading a valid file', async ({}) => {
  // Step: When User click on Next button without uploading a valid file
  // From: Features\Contacts.feature:209:5
});

Then('The system should display an error message {string} in Red color', async ({}, arg) => {
  // Step: Then The system should display an error message "No file choosen" in Red color
  // From: Features\Contacts.feature:210:5
});

