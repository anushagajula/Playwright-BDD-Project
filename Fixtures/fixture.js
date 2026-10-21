import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage.js';


export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }


});

export { expect };