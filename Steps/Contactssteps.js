import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';
import contactsTestdata from '../Testdata/contactsTestdata.json' with {type:'json'};

const { Given, When, Then } = createBdd(test);

//---------------------------@Contacttab---------------------------------------

Given('User is on SuiteCRM Application Home page', async ({contactsPage  }) => {
  await contactsPage.verifyHomePage();});


When('User Hover over Contacts tab', async ({ contactsPage }) => {
  await contactsPage.hoverOverContacts();
});

Then('Contacts dropdown menu should expand', async ({ contactsPage }) => {
  await contactsPage.verifyDropdownExpanded();
});

When('Contacts dropdown menu is expanded', async ({contactsPage}) => {
  await contactsPage.hoverOverContacts();
  await contactsPage.verifyDropdownExpanded();
});

Then('The following options should display', async ({contactsPage}, dataTable) => {
  const expectedOptions = dataTable.raw().flat();
  await contactsPage.verifyDropdownOptions(expectedOptions);
});

When('User clicks <name>', async ({contactsPage}) => {
  await contactsPage.hoverOverContacts();
  await contactsPage.verifyDropdownExpanded();
});

Then('User should be redirected to <page> screen', async ({contactsPage}, dataTable) => {
  await contactsPage.verifyCreateContactPage();
  });

//---------------------------@CreatecontactSavepositive--------------------------------------

Given('User is on the Create Contact screen Overview tab', async ({contactsPage}) => {
  await contactsPage.hoverOverContacts();
  await contactsPage.verifyDropdownExpanded();
  await contactsPage.verifyCreateContactPage();
});

When('User clicks the Save button by providing mandatory details', async ({contactsPage}) => {
  const contact = contactsTestdata.Contacts.Validcontact;
  await contactsPage.enterContactDetails(contact);
  await contactsPage.saveContact();  
});

Then('User should redirected to record details screen', async ({contactsPage}) => {  
  await contactsPage.verifyContactDetails();
});

//--------------------------- @CreatecontactSavenegative--------------------------------------

When('User clicks the Save button with all fields empty', async ({contactsPage}) => {
  await contactsPage.mandatoryfieldcheck();
});

Then('User should see error message on Overview tab {string}', async ({contactsPage}, message) => {
   await expect(contactsPage.missinglastName).toHaveText(message);
});


//---------------------------@CreatecontactCancelpositive --------------------------------------
When('User clicks the Cancel button with all fields empty', async ({contactsPage}) => {
  await contactsPage.emptyfieldcheck();
  //await contactsPage.cancelContact();
});

Then('User should navigate to View Contacts screen with list of all existing contacts', async ({contactsPage}) => {
  await contactsPage.verifyContactlist();
});

//---------------------------@Createcontactcancelnegative--------------------------------------
When('User clicks the Cancel button by entering the data in at least one field', async ({contactsPage}) => {
  await contactsPage.cancelContactButton_overviewtab(contactsTestdata.Contacts.Validcontact);
});

Then('User should see a popup that the record is not save with {string} and {string} buttons from Overview tab', async ({contactsPage}, arg, arg1) => {
  
    await contactsPage.verifyUnsavedRecordPopupchk();
    await contactsPage.clickOkOnUnsavedRecordPopup();
  });

/*Given('User is on the Create Contact screen More Information tab', async ({contactsPage}) => {
  await contactsPage.hoverOverContacts();
  await contactsPage.verifyDropdownExpanded();
  await contactsPage.verifyCreateContactPage();
  await contactsPage.verifyContact_moreinformationtab(contactsTestdata.Contacts.Validcontact);

});

When('User clicks the Cancel button by entering the data in at least one field on Overview Tab', async ({contactsPage}) => {
    await contactsPage.cancelButton.click();
  
});

Then('User should see a popup that the record is not save with {string} and {string} buttons from More Information tab', async ({contactsPage}, arg, arg1) => {
  // Step: Then User should see a popup that the record is not save with "Cancel" and "Ok" buttons from More Information tab
  // From: Features\Contacts.feature:85:5
  await contactsPage.verifyUnsavedRecordPopupchk();
  await contactsPage.clickOkOnUnsavedRecordPopup(); 
});*/

//---------------------------@CreatecontactVcardpositive--------------------------------------

Given('User is on Create Contact from vCard screen', async ({contactsPage}) => {
  // Write code here that turns the phrase above into concrete actions
    await contactsPage.hoverOverContacts();
    await contactsPage.verifyDropdownExpanded();    
    await contactsPage.verifyCreateContactfromvCard();    

});

When('User click on Choose File button to uploads a valid vCard file', async ({contactsPage}) => {
     
    await contactsPage.uploadVCardFile();
});

Then('User should see the selected file in .vcf format', async ({contactsPage}) => {
  
  await contactsPage.verifySelectedVCardFile();
        
});

When('User clicks on Import Vcard button', async ({contactsPage}) => {
  
    await contactsPage.clickImportVCard();
  
});

Then('User should see the record details screen', async ({contactsPage}) => {
  
  await contactsPage.verifyContactDetails();
  
});

//---------------------------@Viewcontacts--------------------------------------

Given('User is on the View Contacts screen', async ({contactsPage}) => {
  // Step: Given User is on the View Contacts screen
  // From: Features\Contacts.feature:123:5
  await contactsPage.hoverOverContacts();
  await contactsPage.verifyDropdownExpanded(); 
  await contactsPage.verifyviewContactspage();
});

When('User selects the checkbox on the View Contacts screen', async ({contactsPage}) => {
  await contactsPage.verifyviewcontactchkdropdowm();
  
  
});

Then('User should be able to see the list of contacts selected', async ({contactsPage}) => {
  // Step: Then User should be able to see the selected Contact from list of contacts
  // From: Features\Contacts.feature:125:5
  
  
});

When('User clicks on Contacts Bulk Action drop down on View Contacts screen and selects Export option', async ({contactsPage}) => {
      await contactsPage.verifyviewcontactchkdropdowm();      
       await contactsPage.clickBulkActionDropdown();
       await contactsPage.exportContacts();

});

Then('the contacts file is downloaded', async ({contactsPage}) => {
  
});


//---------------------------@ImportContacts--------------------------------------

Given('User is on Upload Import File screen', async ({contactsPage}) => {
   await contactsPage.hoverOverContacts();
   await contactsPage.verifyDropdownExpanded(); 
   await contactsPage.importcontactspage();

});

When('User click on Choose File button to uploads a valid file and click on Next Button', async ({contactsPage}) => {
  // Step: When User click on Choose File button to uploads a valid file
  // From: Features\Contacts.feature:174:5
await contactsPage.uploadfile();
await contactsPage.clickNextButton();
});

Then('User should navigate to Confirm Import File Properties screen', async ({contactsPage}) => {
  // Step: Then User should navigate to Confirm Import File Properties screen
  // From: Features\Contacts.feature:180:5
  await contactsPage.Importfileproperties();
});





