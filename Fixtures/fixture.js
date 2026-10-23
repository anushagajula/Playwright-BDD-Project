import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage.js';
import { AccountsPage } from '../Pages/accountPage.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  accountsPage: async ({ page }, use) => {
    const accountsPage = new AccountsPage(page);
    await use(accountsPage);
  },
});

export { expect };