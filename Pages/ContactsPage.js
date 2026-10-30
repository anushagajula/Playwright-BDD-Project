
import { expect } from '@playwright/test';
import path from 'node:path';

export class ContactsPage 
{
    constructor(page) 
        {
            this.page = page;        
          
            this.contactsTab = page.locator('a.top-nav-link').filter({ hasText: /^Contacts$/ });
            //  this.contactsTab = page.locator('a.top-nav-link').filter({ hasText: /^Contacts$/ });                            
            this.createContactOption = page.getByRole('link', { name: 'Create Contact', exact: true });            
            this.createContactVCardOption = page.locator('a[href="#/contacts/importvcard"]');        
            this.viewContactsOption = page.getByRole('link', {name: 'View Contacts',exact: true});        
            this.importContactsOption = page.getByRole('link', {name: 'Import Contacts',exact: true});      
            this.createcontactpage=page.getByText('Create', { exact: true });     
            this.overviewTab=page.getByRole('tab', { name: 'OVERVIEW' });      
            this.firstName = page.getByRole('textbox').nth(1);
            this.lastName = page.getByRole('textbox').nth(2);
            this.officePhone = page.getByRole('textbox').nth(3);
            this.mobile = page.getByRole('textbox').nth(4);
            this.jobTitle = page.getByRole('textbox').nth(5);
            this.department = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-department > div > .d-flex > .flex-grow-1 > .form-control');
            this.emailAddress = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control');        
            this.primaryStreet = page.locator('scrm-group-field').filter({ hasText: 'Primary Address Street' }).locator('textarea');
            this.primaryPostalCode = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
            this.primaryCity = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_city > div > .d-flex > .flex-grow-1 > .form-control');
            this.primaryState = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_state > div > .d-flex > .flex-grow-1 > .form-control');
            this.primaryCountry = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_country > div > .d-flex > .flex-grow-1 > .form-control');
            this.saveButton=page.getByRole('button', { name: 'Save' });
            this.cancelButton=page.getByText('Cancel', { exact: true });
            this.missinglastName=page.getByText('Missing required field: Last Name',{ exact: true });
            this.unSavedRecordpopup=page.getByText('You are about to leave this record without saving any changes you may have made to the record. Are you sure you want to navigate away from this record?');
            this.popupCancelButton=page.getByRole('button', { name: 'Cancel',exact: true  });
            this.popupOkButton=page.getByRole('button', { name: 'Ok',exact: true  });
            //this.moreinformationtab=page.getByRole('tab', { name: 'MORE INFORMATION' });
            this.savecontacterrormessage=page.getByText('There are validation errors,');
            this.importvcard=page.locator('iframe').contentFrame().getByText('Automatically create a new contact by importing a vCard from your file system.');
            this.vCardchoosefile=page.frameLocator('iframe').locator('#vcard_file');
            this.importVCardButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
            this.viewcontactscheckbox=page.locator('scrm-table-header').getByLabel('Select Action Menu')
            this.selectall=page.locator('a').filter({ hasText: 'Select All' }).first();
            this.selectthispage=page.locator('scrm-table-header a').filter({ hasText: 'Select This Page' });
            this.deselectall=page.locator('scrm-table-header a').filter({ hasText: 'Deselect All' });           
            this.bulkActionDropdownButton=page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
            this.exportcontcts=page.locator('a').filter({ hasText: 'Export' }).nth(1);   
            this.contactsimportfile=page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' }); 
            this.importfilepage=page.locator('iframe').contentFrame().getByText('Select a file on your computer that contains the data that you would like to import, or download the template to get a head start on creating the import file.');       
            this.contactsselectfile=page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
            this.nextbutton=page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
            this.confirmimportfileprop=page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
        }

    async verifyHomePage() 
        {
            await expect(this.contactsTab).toBeVisible();
        }

    async hoverOverContacts() 
        {
            await this.contactsTab.hover();
            
        }

    async verifyDropdownExpanded() 
        {
            await expect(this.createContactOption).toBeVisible();
            await expect(this.createContactVCardOption).toBeVisible();
            await expect(this.viewContactsOption).toBeVisible();
            await expect(this.importContactsOption).toBeVisible();
        }

    async verifyDropdownOptions(expectedOptions)
        {
            const optionLocators=
            {   'Create Contact': this.createContactOption,
                'Create Contact From vCard': this.createContactVCardOption,
                'View Contacts': this.viewContactsOption,
                'Import Contacts' : this.importContactsOption
            }
            for (const optionName of expectedOptions) 
            {
            await expect(optionLocators[optionName]).toBeVisible();
            }
        }

    async verifyCreateContactPage()
        {        
            await this.hoverOverContacts();
            await this.verifyDropdownExpanded();

            await expect(this.createContactOption).toBeVisible();
            //await this.createContactOption.waitFor({ state: 'visible' });
            await this.createContactOption.click();
            await expect(this.page).toHaveURL(/#\/contacts\/edit/);
                     
        }
    
    async verifyCreateContactfromvCard()
        {
            await expect(this.createContactVCardOption).toBeVisible();
            await this.createContactVCardOption.click();
            await expect(this.page).toHaveURL(/#\/contacts\/importvcard/);
            await expect(this.importvcard).toBeVisible();
            await this.page.waitForTimeout(2000);
        }
    async verifyviewContactspage()
        {
            await this.hoverOverContacts();
            await expect(this.viewContactsOption).toBeVisible();
            await this.viewContactsOption.click();
            await expect(this.page).toHaveURL(/#\/contacts\/index/, {timeout: 10000} );     
        }

    async importcontactspage()
    {
        await this.importContactsOption.click();
        await expect(this.page).toHaveURL(/#\/import\/step1\?import_module=Contacts&return_module=Contacts&return_action=index/);

    }

     
    
        
    async enterContactDetails(contact)
    {
        //await expect(this.createcontactpage).toBeVisible();
        await this.verifyCreateContactPage();
        //await expect(this.overviewTab).toBeVisible();
        await this.firstName.fill(contact['First Name']);
        await this.lastName.fill(contact['Last Name']); 
        await this.officePhone.fill(contact['OFFICE PHONE']);
        await this.mobile.fill(contact['MOBILE']); 
        await this.jobTitle.fill(contact['JOB TITLE']);
        await this.department.fill(contact['DEPARTMENT']); 
        await this.emailAddress.fill(contact['EMAIL ADDRESS']);        
        await this.primaryStreet.fill(contact['Primary Address Street']);
        await this.primaryPostalCode.fill(contact['Primary Address Postal Code']);
        await this.primaryCity.fill(contact['Primary Address City']);
        await this.primaryState.fill(contact['Primary Address State']);
        await this.primaryCountry.fill(contact['Primary Address Country']);

    }

    async saveContact()
    {
                  
    await this.saveButton.click();         
    }
    

    async verifyContactDetails()
    {
        //await expect(this.page).toHaveURL(/#\/contacts\/record\/[^/?]+/);
         await expect(this.page).toHaveURL(/#\/contacts\/(record|edit)/);
        
    }
    
    async mandatoryfieldcheck()
    {
        const lastNameValue = await this.lastName.inputValue();

        if (lastNameValue.trim() =='') 
        {
            await this.saveButton.click();
            await expect(this.missinglastName).toBeVisible();        
        }
    }

    async emptyfieldcheck()
    {
        const lastNameValue = await this.lastName.inputValue();

        if (lastNameValue.trim() =='') 
        {
            await this.cancelButton.click();
            await this.page.waitForTimeout(2000);      
        }
    }

    async verifyContactlist()
    {
        await expect(this.page).toHaveURL(/#\/contacts/);        
    }


    async cancelContactButton_overviewtab(contact)
    {
        
        //await expect(this.createcontactpage).toBeVisible();
        //await this.verifyCreateContactPage();
        //await expect(this.overviewTab).toBeVisible();

        await this.firstName.fill(contact['First Name']);
        //await this.page.waitForTimeout(2000);
        await this.cancelButton.click();           
    }    

    async verifyUnsavedRecordPopupchk() 
    {
        await expect(this.unSavedRecordpopup).toBeVisible();
        await expect(this.popupCancelButton).toBeVisible();
        await expect(this.popupOkButton).toBeVisible();
    }
    async clickOkOnUnsavedRecordPopup() 
    {
        await this.popupOkButton.click();
    }
    /*async verifyContact_moreinformationtab(contact)
    {
        await expect(this.moreinformationtab).toBeVisible();
        await this.firstName.fill(contact['First Name']);
        await this.moreinformationtab.click();
        await this.verifyCreateContactPage();        
    }*/
    async verifyvCardchoosefile()
    {
        
	        await expect(this.vCardchoosefile).toBeVisible();
	        await this.vCardchoosefile.click();
        
    }
    async uploadVCardFile() 
    {
        await expect(this.page).toHaveURL(/#\/contacts\/importvcard/);

        //const filePath = path.resolve('Testdata/contactstest.vcf');

        //await this.vCardchoosefile.setInputFiles(filePath);
        await this.vCardchoosefile.setInputFiles('Testdata/contactstest.vcf')

        //await this.page.waitForTimeout(1000);
         console.log('VCF file selected');
    }  

    async verifySelectedVCardFile() 
    {
    await expect(this.vCardchoosefile).toHaveValue(/\.vcf$/i);
    }
    async clickImportVCard() 
    {
    await expect(this.page).toHaveURL(/#\/contacts\/importvcard/);
    await expect(this.importVCardButton).toBeVisible();
    await this.importVCardButton.click();
    await this.page.waitForTimeout(2000);    
    }    
    async exportContacts() 
    {
     
    await expect(this.exportcontcts).toBeVisible();

    await this.exportcontcts.click();
}

async verifyviewcontactchkdropdowm()
    {
        await this.viewcontactscheckbox.click();
        await this.page.waitForTimeout(2000);
        await this.selectall.click();
        await this.page.waitForTimeout(2000);
                     
    }    
   
    async clickBulkActionDropdown() 
    {
       
    await this.bulkActionDropdownButton.click();
    await this.page.waitForTimeout(2000);
    }
       
async uploadfile()
{
    await expect(this.page).toHaveURL(/#\/import\/step1\?import_module=Contacts&return_module=Contacts&return_action=index/);
       
    await this.contactsselectfile.setInputFiles('Testdata/SampleContacts.csv')
        
    await this.page.waitForTimeout(2000);
}

async clickNextButton() 

{
   await this.nextbutton.click();
}
async Importfileproperties()
{
    
    await expect(this.confirmimportfileprop).toBeVisible();
}
}
