import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.CRMlogo = page.locator('form[name="login"] img');
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.invalidloginerrorMessage = page.getByText('Login credentials incorrect,');
        this.emptypassword = page.getByText('Missing required field');
        this.emptyusername = page.getByText('Missing required field');
        this.emptycredentials = page.getByText('Missing required field');
        // Loading spinner locator
        this.spinner = page.locator('app-full-page-spinner');
        //homepage locator
        this.homepage = page.getByRole('link');
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
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
    async verifyHomePage() {
        await expect(this.homepage).toBeVisible({ timeout: 15000 });

        await expect(this.homepage).toBeVisible();
    }
}
