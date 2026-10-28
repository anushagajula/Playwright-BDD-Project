
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.CRMlogo = page.locator('form[name="login"] img');
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Log In' });

    this.invalidloginerrorMessage = page.getByText(
      'Login credentials incorrect,'
    );

    this.emptypassword = page.getByText('Missing required field');
    this.emptyusername = page.getByText('Missing required field');
    this.emptycredentials = page.getByText('Missing required field');

    this.spinner = page.locator('app-full-page-spinner');

    this.homepage = page.getByRole('link');

    this.dashboardLink = page
      .locator('iframe')
      .contentFrame()
      .getByRole('link', { name: 'SUITECRM DASHBOARD' });
  }

  async navigateToLoginPage() {
    const loginUrl = process.env.SCRM_URL;

    if (!loginUrl) {
      throw new Error('SCRM_URL must be set in .env');
    }

    await this.page.goto(loginUrl);
  }

  async verifyLoginScreen() {
    await expect(this.CRMlogo).toBeVisible();
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async loginWithEnvironmentCredentials() {
    const { SCRM_USERNAME, SCRM_PASSWORD } = process.env;

    if (!SCRM_USERNAME || !SCRM_PASSWORD) {
      throw new Error(
        'SCRM_USERNAME and SCRM_PASSWORD must be set in .env'
      );
    }

    await this.login(SCRM_USERNAME, SCRM_PASSWORD);
  }

  async verifyInvalidLoginErrorMessage() {
    await expect(this.invalidloginerrorMessage).toBeVisible();
  }

  async verifyEmptyPasswordErrorMessage() {
    await expect(this.emptypassword).toBeVisible();
  }

  async verifyEmptyUsernameErrorMessage() {
    await expect(this.emptyusername).toBeVisible();
  }

  async verifyEmptyCredentialsErrorMessage() {
    await expect(this.emptycredentials).toBeVisible();
  }

  async verifyLoginPageUrl() {
    const loginUrl = process.env.SCRM_URL;

    if (!loginUrl) {
      throw new Error('SCRM_URL must be set in .env');
    }

    const expectedUrl = new URL(loginUrl);
    const normalizedBaseUrl = `${expectedUrl.origin}${expectedUrl.pathname.replace(/\/+$/, '')}`;
    const escapedBaseUrl = normalizedBaseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const loginPathPattern = new RegExp(
      `^${escapedBaseUrl}(?:/)?(?:#/Login)?(?:\\?.*)?$`,
      'i'
    );

    await expect(this.page).toHaveURL(loginPathPattern, { timeout: 15000 });
  }

  async verifyHomePage() {
    await expect(this.dashboardLink).toBeVisible({ timeout: 10000 });
  }
}
