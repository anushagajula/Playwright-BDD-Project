import 'dotenv/config';
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';
import log from '../Utils/logger.js';

const { BeforeAll, Before, After } = createBdd(test);

BeforeAll(async () => {
  log.info('========== One-time setup started ==========');

<<<<<<< HEAD

=======
>>>>>>> Integration
  expect(process.env.SCRM_URL).toBeTruthy();
  expect(process.env.SCRM_USERNAME).toBeTruthy();
  expect(process.env.SCRM_PASSWORD).toBeTruthy();

  log.info('Environment variables verified');
});

Before(async ({ page }) => {
  log.info('Opening SuiteCRM for this test');

  await page.goto('/');

  log.info(`Current URL: ${page.url()}`);

  await expect(page.getByLabel(/username/i)).toBeVisible();
  await expect(page.getByLabel(/password/i)).toBeVisible();

  log.info('Login page verified');
});

After(async () => {
  log.info('Test finished');
});