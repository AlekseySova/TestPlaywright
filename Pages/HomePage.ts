import {expect, type Locator, Page} from '@playwright/test';

export class HomePage {

    constructor(private page: Page) {}

    private loginButton: Locator = this.page.locator('#top-nav-bar').getByRole('link', { name: 'Login to your account' });
    private signUpButton: Locator = this.page.locator('#top-nav-bar').getByRole('link', { name: 'Sign Up to Improve Your Learning Experience' });

    async goto() {
        await this.page.goto('https://www.w3schools.com');
    }

    async clickLogInButton() {
        await this.loginButton.click();
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }
}