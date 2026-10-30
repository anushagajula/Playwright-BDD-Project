import 'dotenv/config';
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import log from '../Utils/logger.js';

const { Before, After } = createBdd(test);

Before({ tags: '@LoginPage' }, async ({ loginPage }) => {
  log.info('Opening SuiteCRM login page');
  await loginPage.navigateToLoginPage();
  await loginPage.verifyLoginScreen();
  log.info('Login page verified');
});

Before({ tags: '@authenticated' }, async ({ loginPage }) => {
  log.info('Opening SuiteCRM login page for authenticated scenario');
  await loginPage.navigateToLoginPage();
  log.info('Signing in for authenticated scenario');
  await loginPage.loginWithEnvironmentCredentials();
  await loginPage.verifyHomePage();
});

After(async () => {
    log.info('Test finished');
});