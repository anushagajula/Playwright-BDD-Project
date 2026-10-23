import { expect } from '@playwright/test';

export class AccountsPage {
    constructor(page) {
        this.page = page;
        this.accountsLink = page.locator('a').filter({ hasText: /^Accounts$/ });
        this.createAccountLink = page.getByRole('link', { name: 'Create Account' });
        this.viewAccountsLink = page.getByRole('link', { name: 'View Accounts' });
        this.importAccountsLink = page.getByRole('link', { name: 'Import Accounts' });
        this.Createaccountaction = page.getByRole('link', { name: 'Create Account' });
        this.Createaccountpage = this.page.getByText('Create', { exact: true });
        this.name = page.getByRole('textbox').nth(1);

        this.Website = page.getByRole('textbox').nth(2);

        this.officePhone = page.getByRole('textbox').nth(3);

        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.accountConfirmText = (accountName) => page.getByRole('tabpanel', { name: 'OVERVIEW' }).getByText(accountName, { exact: true });
        this.accountNameValue = (name) =>
            page
                .getByRole('tabpanel', { name: 'OVERVIEW' })
                .locator('scrm-varchar-detail')
                .filter({ hasText: name });
        this.websiteValue = (website) => page.getByText(website, { exact: true });
        this.officePhoneValue = (phone) => page.getByText(phone, { exact: true });


        this.accountexpect = page.locator('div').filter({ hasText: /^NAME$/ });


        this.Websiteexpect = page.locator('div').filter({ hasText: /^WEBSITE$/ });
        this.officePhoneexpect = page.locator('div').filter({ hasText: /^OFFICE PHONE$/ });

        this.errormessageEmptyName = page.locator('div').filter({ hasText: /^Missing required field: Name$/ }).nth(2);
        this.email = page.locator('scrm-composite-field').getByRole('textbox');
        this.emailfill = page.locator('scrm-composite-field').getByRole('textbox');

        this.errormessageInvalidEmail = page.getByText('Invalid email format.');
        //view accounts page locators
        this.Accountspagetoview = page.getByText('ACCOUNTS', { exact: true });
        this.Filterbutton = page.getByRole('button', { name: 'Filter' });
        this.Namefield = page.getByText('Name').first();

        this.NameTextbox = page.getByRole('textbox').nth(1);

        this.Searchbutton = page.locator('scrm-list-filter').getByRole('button', { name: 'Search' });
        this.Insightsbutton = page.getByRole('button', { name: 'Insights' });
        this.QuickChartspanel = page.getByText('Quick Charts');
        this.Namecolumnheader = page.getByRole('columnheader', { name: 'Name' });

        this.accountRow = (accountName) =>
            this.page.getByRole('row').filter({ hasText: accountName });



    }















    async mouseHoverOnAccountsModule() {
        await this.accountsLink.hover();
    }
    async viewAccountsModule() {
        await expect(this.accountsLink).toBeVisible();
        await expect(this.createAccountLink).toBeVisible();
        await expect(this.viewAccountsLink).toBeVisible();
        await expect(this.importAccountsLink).toBeVisible();
    }
    async clickCreateAccount() {
        await this.mouseHoverOnAccountsModule();
        await this.Createaccountaction.click();
        await this.Createaccountpage.waitFor({ state: 'visible' });
    }
    async verifyCreateAccountPage() {
        await expect(this.Createaccountpage).toBeVisible();
    }


    async fillAccountDetails(name, website, officePhone) {
        await this.name.fill(name);
        await this.Website.fill(website);
        await this.officePhone.fill(officePhone);
        await this.saveButton.click();
    }

    async verifyAccountCreated(accountName) {
        await expect(this.accountConfirmText(accountName)).toBeVisible({ timeout: 30000 });
    }
    async verifyAccountDetails(name, website, officePhone) {

        await expect(this.accountNameValue(name)).toBeVisible();
        await expect(this.websiteValue(website)).toBeVisible();
        await expect(this.officePhoneValue(officePhone)).toBeVisible();
    }


    async verifyErrorMessageEmptyName() {
        await this.saveButton.click();
        await expect(this.errormessageEmptyName).toBeVisible();

    }
    async fillInvalidEmail(email) {
        await this.email.fill(email);
        await this.saveButton.click();

    }

    async verifyErrorMessageInvalidEmail(errorMessage) {

        await expect(this.errormessageInvalidEmail).toBeVisible();


    }

    async clickViewAccounts() {
        await this.mouseHoverOnAccountsModule();
        await this.viewAccountsLink.click();
    }
    async verifyViewAccountsPage() {
        await expect(this.Accountspagetoview).toBeVisible();
    }
    async clickFilterButton(searchAccountName) {
        await this.Filterbutton.click();
        await expect(this.Namefield).toBeVisible();
        await expect(this.NameTextbox).toBeVisible();
        await this.NameTextbox.fill(searchAccountName);
        await this.Searchbutton.click();


    }
    async verifyAccountInSearchResults(accountName) {
        await expect(this.accountRow(accountName)).toBeVisible();
        await expect(this.Namecolumnheader).toBeVisible();
        await expect(this.Namefield).toBeVisible();




    }
    async clickInsightsButton() {
        await expect(this.Insightsbutton).toBeVisible();
        await this.Insightsbutton.click();

    }
    async verifyInsightsPanel(panelName) {
        await expect(this.QuickChartspanel).toBeVisible();
        await expect(this.page.getByText(panelName)).toBeVisible();
    }

}
