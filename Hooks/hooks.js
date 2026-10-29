import 'dotenv/config';
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture.js';
import { expect } from '@playwright/test';


/*import log from '../Utils/logger.js';
import { fileURLToPath } from 'node:url';

const { BeforeAll, Before, After } = createBdd(test);

BeforeAll(async () => {
    log.info('========== One-time setup started ==========');

//const _filename = fileURLToPath(import.meta.url);

    expect(process.env.SCRM_URL).toBeTruthy();
    expect(process.env.SCRM_USERNAME).toBeTruthy();
    expect(process.env.SCRM_PASSWORD).toBeTruthy();

    log.info('Environment variables verified');
});*/

const { BeforeAll, Before, After } = createBdd(test);
let log; // CHANGE 1: Add this before BeforeAll

BeforeAll(async () => {
    // CHANGE 2: Dynamically import the logger
    const loggerModule = await import('../Utils/logger.js');
    log = loggerModule.default;

    log.info('========== One-time setup started ==========');

    expect(process.env.SCRM_URL).toBeTruthy();
    expect(process.env.SCRM_USERNAME).toBeTruthy();
    expect(process.env.SCRM_PASSWORD).toBeTruthy();

    log.info('Environment variables verified');
});

/*
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
*/

Before(async ({ page }) => {
    log.info('Opening SuiteCRM');

    await page.goto('/');

    const username = page.getByLabel(/username/i);
    const password = page.getByLabel(/password/i);

    await expect(username).toBeVisible();
    await expect(password).toBeVisible();

    log.info('Login page verified');

    // Enter credentials
    await username.fill(process.env.SCRM_USERNAME);
    await password.fill(process.env.SCRM_PASSWORD);

    // Click Login
    await page.getByRole('button', {
        name: /log in|login|sign in/i
    }).click();

    // Wait until Contacts is visible after login
    await expect(
        page.getByText('Contacts', { exact: true }).first()
    ).toBeVisible({ timeout: 30000 });

    log.info('Login successful');
});

After(async () => {
    log.info('Test finished');
});