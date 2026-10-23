import { expect } from '@playwright/test';
import log from '../Utils/logger.js';
import testData  from '../Testdata/testdata.json' with { type: 'json' };

export class LeadPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByRole('textbox', {
      name: 'Username'
    });

    this.passwordInput = page.getByRole('textbox', {
      name: 'Password'
    });

    this.loginButton = page.getByRole('button', {
      name: 'Log In',
      exact: true
    });

    this.leadsMenu = page.getByText('Leads', {
      exact: true
    }).first();

    this.leadsDropdown = this.page.locator('.nav-link').filter({
  hasText: /^Leads$/
});

this.createLead= this.page.getByRole('link', {
  name: 'Create Lead',
  exact: true
});
this.createLeadFromvCard= this.page.getByRole('link', {
  name: 'Create Lead From vCard',
  exact: true
});
this.viewLeads= this.page.getByRole('link', {
  name: 'View Leads',
  exact: true
});
this.importLeads= this.page.getByRole('link', {
  name: 'Import Leads',
  exact: true
});
//this.lastNameInput = this.page.getByLabel('Last Name');
this.saveButton = this.page
        .getByRole('button', { name: 'Save', exact: true });
this.cancelButton = this.page
        .getByRole('button', { name: 'Cancel', exact: true });
        this.editButton = this.page
        .getByRole('button', { name: 'Edit', exact: true });

        this.insightButton=this.page
        .getByRole('button', { name: ' Insights ', exact: true });
        this.deleteButton = this.page.getByText('Delete', { exact: true });
this.viewChangelogButton = this.page.getByText('View Change Log', { exact: true });
        this.actionsDropdown = this.page.getByRole('button', {
  name: 'Actions',
  exact: true
});
// this.email = this.page.getByLabel('EMAIL ADDRESS', {
//     exact: true
// });
// this.mobile = this.page.getByLabel('MOBILE PHONE', {
//     exact: true
// });
// this.officePhone = this.page.getByLabel('OFFICE PHONE', {
//     exact: true
// });
this.email = this.page
    .getByText('Email Address', { exact: true })
    .locator('xpath=ancestor::div[.//input][1]')
    .locator('input');
this.mobile = this.page
    .getByText('MOBILE', { exact: true })
    .locator('xpath=ancestor::div[.//input][1]')
    .locator('input');
this.officePhone = this.page
    .getByText('OFFICE PHONE', { exact: true })
    .locator('xpath=ancestor::div[.//input][1]')
    .locator('input');
    this.firstName = this.page
  .getByText('First Name', { exact: true })
  .locator('xpath=ancestor::div[.//input][1]')
  .locator('input');

this.lastName = this.page
  .getByText('Last Name', { exact: true })
  .locator('xpath=ancestor::div[.//input][1]')
  .locator('input');

this.title = this.page
  .getByText('JOB TITLE', { exact: true })
  .locator('xpath=ancestor::div[.//input][1]')
  .locator('input');
  }

  async login() {
    const url = process.env.SCRM_URL;
    const username = process.env.SCRM_USERNAME;
    const password = process.env.SCRM_PASSWORD;

    if (!url || !username || !password) {
      throw new Error(
        'SCRM_URL, SCRM_USERNAME, and SCRM_PASSWORD must be set in .env'
      );
    }

    await this.page.goto(url);

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    await expect(this.leadsMenu).toBeVisible({
      timeout: 30000
    });

    log.info('Login successful');
  }

  async hoverOnLeads() {
    await this.leadsMenu.hover();
  }

  async verifyDropdownOptions(options) {

    const links = await this.page.locator('a:visible').allInnerTexts();

  const leadsOptions = links.filter(text =>
    options.includes(text.trim())
  );

  console.log('Leads dropdown options found:', leadsOptions);

    for (const option of options) {
      await expect(
        this.page.getByRole('link', {
        name: option,
        exact: true
        })
      ).toBeVisible();
    }

    log.info('All Leads dropdown options are visible');
  }

  async clickLeadsOption(name) {
    await this.hoverOnLeads();
        switch (name) {
            case 'Create Lead':
                await this.createLead.click();
                break;

            case 'Create Lead From vCard':
                await this.createLeadFromvCard.click();
                break;

            case 'View Leads':
                await this.viewLeads.click();
                break;

            case 'Import Leads':
                await this.importLeads.click();
                break;

            default:
                throw new Error(`Invalid Leads option: ${name}`);
        }
        log.info(`Clicked Leads option: ${name}`);
    }


// async redirectedpage(expectedPage) {
//     const expectedUrl = testData.urls[expectedPage];

//     if (!expectedUrl) {
//         throw new Error(
//             `No expected URL configured for: ${expectedPage}`
//         );
//     }

//     await expect(this.page).toHaveURL(expectedUrl, {
//         timeout: 15000
//     });

//     log.info(`Successfully navigated to ${expectedPage}`);
// }
async redirectedpage(expectedPage) {
  if (expectedPage === 'View Leads') {
    await expect(this.page).toHaveURL(
      /#\/leads(?:\/index(?:\?.*)?)?$/,
      { timeout: 15000 }
    );
  } else {
    const expectedUrl = testData.urls[expectedPage];

    if (!expectedUrl) {
      throw new Error(`No expected URL configured for: ${expectedPage}`);
    }

    await expect(this.page).toHaveURL(expectedUrl, { timeout: 15000 });
  }

  log.info(`Successfully navigated to ${expectedPage}`);
}
async viewCreateLeadFeatures() {
    await this.page
        .getByRole('tab', { name: 'OVERVIEW', exact: true })
        .waitFor({ state: 'visible' });

    log.info('Create Lead page is displayed');
}
async verifyFeatureDisplayed(feature) {
    
     await expect(page).toHaveURL(/module=Leads.*record=/i);

    await expect(
      page.getByText(testData.validLead.lastName, { exact: true }).first()
    ).toBeVisible();

    log.info('Successfully features are verified in CreateLead page');
}

async getErrorMessage(message) {
     const errorMessage = this.page.getByText(
        message,{ exact: true }
    );

    await errorMessage.waitFor({ state: 'visible' });

    log.info(`Verified error message: ${message}`);
}

async clickSaveButton(fieldname) {
    switch (fieldname.trim().toLowerCase()) {

        case 'empty':
        case 'without entering any details':
            // Do not enter any data
            break;

        case 'invalid email':
            await this.email.click();
            await this.email.fill(testData.invalidEmail.email);
            break;

        case 'invalid mobile':
             await this.mobile.click();
            await this.mobile.fill(testData.invalidMobile.mobile);
            break;

        case 'invalid office phone':
            await this.officePhone.click();
            await this.officePhone.fill(testData.invalidOfficePhone.officePhone);
            break;

        default:
            throw new Error(`Unknown Save scenario: ${fieldname}`);
    }

    await this.saveButton.click();

    log.info(`Clicked Save button for scenario: ${fieldname}`);
}

async createLeadWithValidData() {
    const data = testData.validLead;

    await this.firstName.click();
    await this.firstName.fill(data.firstName);

    await this.lastName.click();
    await this.lastName.fill(data.lastName);

    await this.title.click();
    await this.title.fill(data.title);

    await this.email.click();
    await this.email.fill(data.email);

    await this.mobile.click();
    await this.mobile.fill(data.mobile);

    await this.officePhone.click();
    await this.officePhone.fill(data.officePhone);

    await this.saveButton.click();

    log.info('Entered valid lead data and clicked Save');
}
async verifyNewCreatedLeadRecordisDisplayed() {
  // Verify navigation away from the Create Lead form
  await expect(this.page).not.toHaveURL(
    /action=EditView/i,
    { timeout: 15000 }
  );

  // Verify the saved Lead record contains the entered last name
  const data = testData.validLead;

  await expect(
    this.page.getByText(data.lastName, { exact: true }).first()
  ).toBeVisible({ timeout: 15000 });

  log.info('Successfully redirected to the new Lead record page');
}
async clickCancelButton() {
    await this.cancelButton.click();

}
async clicksaveButton() {
    await this.saveButton.click();

}
async clickDeleteButton() {
    await this.deleteButton.click();

}
async clickViewChangeLogButton() {
    await this.viewChangelogButton.click();

}
async clickEditButton() {
    await this.editButton.click();

  await expect(this.saveButton).toBeVisible();

  log.info('Clicked Edit button on Lead record page');

}
async clickInsightButton() {
    await this.insightButton.click();

 // await expect(this.saveButton).toBeVisible();

  log.info('Clicked Insight button on Lead record page');

}
async verifyCancelPopup() {
 await expect(this.page.getByRole('dialog')).toBeVisible();
  log.info(`Verified cancel confirmation popup is displayed`);
}
async verifyDeletePopup() {
 await expect(this.page.getByRole('dialog')).toBeVisible();
  //await expect(dialog).toContainText(/delete|confirm/i);
  log.info(`Verified delete confirmation popup is displayed`);
}
async verifyViewChangeLogPopup() {
 await expect(this.page.getByRole('dialog')).toBeVisible();
  //await expect(dialog).toContainText(/change log/i);
  log.info(`Verified view change log popup is displayed`);
}
async clickCancelButtonWithValidData() {
  await this.fillValidLeadData();
 await this.cancelButton.click();
}
async fillValidLeadData() {
  const data = testData.validLead;
  
  await this.firstName.fill(data.firstName);
  await this.lastName.fill(data.lastName);
  await this.title.fill(data.title);
  await this.email.fill(data.email);
  await this.mobile.fill(data.mobile);
  await this.officePhone.fill(data.officePhone);
}

async clickOkButtonInPopup() {
  const okButton = this.page.getByRole('button', { name: 'Ok' });
  await okButton.click();
  log.info('Clicked "Ok" button in the popup');

}
async viewLeadsPageDisplayed() {
  await expect(this.page).toHaveURL(/module=Leads&view=ListView/i, {
    timeout: 15000
  });
  await expect(this.page).toHaveURL(testData.urls['View Leads']);

  log.info('Successfully redirected to the View Leads page');
}
async updateLeadRecordFields() {
  const updatedTitle = testData.updatedJobTitle.JobTitle;

  await this.title.fill(updatedTitle);
  await this.saveButton.click();

  await expect(
    this.page.getByText(updatedTitle, { exact: true }).first()
  ).toBeVisible({ timeout: 15000 });

  log.info('Lead record fields updated successfully');
}
async verifyLeadInsightsDisplayed() {
  await expect(this.insightButton).toBeVisible();

  log.info('Lead insights are displayed');
}
async verifyActionsDropdownOptions(options) {
  for (const option of options) {
    await expect(
      this.page.getByText(option, { exact: true })
    ).toBeVisible();
  }
}
}