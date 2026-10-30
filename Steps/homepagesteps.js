import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('User is logged into SuiteCRM', async ({ page }) => {

});

When('User views the Home page', async ({ page }) => {

});

Then('User should be able to see {string} on the Home page', async ({ page }, element) => {

});

Given('{string} is logged into SuiteCRM', async ({ page }, user) => {

});

When('User navigates to Edit Profile then clicks the Logout button', async ({ page }) => {

});

Then('User should be able to log out of SuiteCRM successfully', async ({ page }) => {

});