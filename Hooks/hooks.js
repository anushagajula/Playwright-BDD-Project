import 'dotenv/config';
import { test as base, expect } from '../Fixtures/fixture.js';

base.beforeEach(async ({ page, loginPage }) => {
    log.info(`Starting test: ${testInfo.title}`);
  await page.goto('/');

  await loginPage.login(
    process.env.SUITECRM_USERNAME,
    process.env.SUITECRM_PASSWORD
  );
});

base.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({
      path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}.png`,
      fullPage: true,
    });
  }

  log.info(`Finished test: ${testInfo.title}`);
});

export const test = base;
export { expect };