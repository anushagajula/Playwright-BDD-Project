import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { LeadPage } from '../Pages/leadpage.js';
import { QuotePage } from '../Pages/quotespage.js';


export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  leadPage: async ({ page }, use) => {
    const leadPage = new LeadPage(page);
    await use(leadPage);
  },

  quotesPage: async ({ page }, use) => {
    const quotesPage = new QuotesPage(page);
    await use(quotesPage);
  }

  
});

export { expect };