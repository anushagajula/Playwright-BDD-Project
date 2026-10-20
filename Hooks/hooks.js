import 'dotenv/config';
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';
import log from '../Utils/logger.js';

const { Before, After } = createBdd(test);

Before(async ({ page }) => {
  log.info('Starting test');
  console.log('Before hook executed');

  // Verify environment variables
  expect(process.env.BASE_URL, 'BASE_URL is missing in .env').toBeTruthy();

  expect(
    process.env.SUITECRM_USERNAME,
    'SUITECRM_USERNAME is missing in .env'
  ).toBeTruthy();

  expect(
    process.env.SUITECRM_PASSWORD,
    'SUITECRM_PASSWORD is missing in .env'
  ).toBeTruthy();

  // Verify browser page initialization
  expect(page).toBeTruthy();
  log.info('Browser page initialized');

  // Open application
  await page.goto('/');

  console.log('Current URL:', page.url());
  log.info(`Current URL: ${page.url()}`);

  // Verify URL
  const baseURL = process.env.BASE_URL.replace(/\/+$/, '');
  expect(page.url().startsWith(baseURL)).toBeTruthy();

  log.info('Application opened successfully');
});

After(async ({ page }) => {
  log.info('Finished test');

  // Optional screenshot for debugging
  // await page.screenshot({
  //   path: 'test-results/final-page.png',
  //   fullPage: true,
  // });
});