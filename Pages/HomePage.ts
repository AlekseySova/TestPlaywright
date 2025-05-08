import {expect, type Locator, type Page} from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    private readonly logInButton: Locator;
    private readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logInButton = page.locator('#top-nav-bar').getByRole('link', { name: 'Login to your account' });
        this.signUpButton = page.locator('#top-nav-bar').getByRole('link', { name: 'Sign Up to Improve Your Learning Experience' });
    }

    async goto() {
        await this.page.goto('https://www.w3schools.com');
    }

    async clickLogInButton() {
        await this.logInButton.click();
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

}