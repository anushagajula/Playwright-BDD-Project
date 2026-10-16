Given('user is on Home page', async ({}) => {
  // Step: Given user is on Home page
  // From: Features\Leads.feature:5:5
});

When('User mouse hover on Leads', async ({}) => {
  // Step: When User mouse hover on Leads
  // From: Features\Leads.feature:6:5
});

Then('User should see the following options in the Leads dropdown:', async ({}, dataTable) => {
  // Step: Then User should see the following options in the Leads dropdown:
  // From: Features\Leads.feature:7:5
});

When('user clicks {string}', async ({}, arg) => {
  // Step: When user clicks "Create Lead"
  // From: Features\Leads.feature:16:5
});

Then('user should be redirected to the {string} page', async ({}, arg) => {
  // Step: Then user should be redirected to the "Create Lead" page
  // From: Features\Leads.feature:17:5
});

Given('user is on Leads page', async ({}) => {
  // Step: Given user is on Leads page
  // From: Features\Leads.feature:27:5
});

When('User views features', async ({}) => {
  // Step: When User views features
  // From: Features\Leads.feature:28:5
});

Then('user should see the following features in the Leads page:', async ({}, dataTable) => {
  // Step: Then user should see the following features in the Leads page:
  // From: Features\Leads.feature:29:5
});

Given('user is on Create Lead page', async ({}) => {
  // Step: Given user is on Create Lead page
  // From: Features\Leads.feature:39:5
});

When('user clicks on Save button without entering any details', async ({}) => {
  // Step: When user clicks on Save button without entering any details
  // From: Features\Leads.feature:40:5
});

Then('User able to see error message {string}', async ({ page }, message) => {
  // Add an assertion that the expected error message is visible.
});

When('user clicks on Save button by entering {string}', async ({ page }, fieldname) => {
  // Enter invalid data for the requested field, then click Save.
});

When('user clicks on Save button by entering valid data in all mandatory fields', async ({ page }) => {
  // Enter valid values in the required fields, then click Save.
});

Then('user should be redirected to the View Leads page', async ({ page }) => {
  // Assert that the browser is on the View Leads page.
});
