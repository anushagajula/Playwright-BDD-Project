import { test as base} from 'playwright-bdd';
import{expect} from '@playwright/test';
import{ContactsPage} from '../Pages/ContactsPage.js';
import {OpportunitiesPage} from '../Pages/OpportunitiesPage.js';


export const test = base.extend({
  contactsPage: async ({ page }, use) => {
  const contactsPage = new ContactsPage(page);
  await use(contactsPage);
},

  opportunitiesPage: async ({ page }, use) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await use(opportunitiesPage);
},
  
  
});

export { expect };