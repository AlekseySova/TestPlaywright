import {expect,type Locator, Page} from '@playwright/test';

export class Login1776Page {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private logInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.logInButton = page.getByRole('button', { name: 'Submit' });
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogInButton() {
        await this.logInButton.click();
    }
}