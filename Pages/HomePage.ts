import {expect, type Locator, Page} from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly signUpButton: Locator;
    readonly registerLink: Locator;
    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginSubmitButton: Locator;
    readonly loginErrorMessage: Locator;
    readonly registerFirstNameInput: Locator;
    readonly registerLastNameInput: Locator;
    readonly resisterEmailInput: Locator;
    readonly registerPasswordInput: Locator;
    readonly registerSubmitButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.locator("#tnb-login-btn");
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.loginEmailInput = page.locator("#tnb-login-dropdown-email");
        this.loginPasswordInput = page.locator("#tnb-login-dropdown-password");
        this.loginSubmitButton = page.locator("#loginFormElement").getByRole('button', { name: 'Sign In' });
        this.registerFirstNameInput = page.locator('#tnb-signup-first-name')
        this.registerLastNameInput = page.locator('#tnb-signup-last-name');
        this.resisterEmailInput = page.locator('#tnb-signup-email');
        this.registerPasswordInput = page.locator('#tnb-signup-password');
        this.registerSubmitButton = page.getByRole('button', { name: 'Create account' });
        this.loginErrorMessage = page.locator("#loginStatus");
    }

    async goto() {
        await this.page.goto('https://www.w3schools.com');
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

    async enterLoginEmail(email: string) {
        await this.loginEmailInput.fill(email);
    }

    async enterLoginPassword(password: string) {
        await this.loginPasswordInput.fill(password);
    }

    async clickLoginSubmitButton() {
        await this.loginSubmitButton.click();
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async enterRegisterFirmName(firmName: string) {
        await this.resisterEmailInput.fill(firmName);
    }

    async enterRegisterLastName(lastName: string) {
        await this.registerLastNameInput.fill(lastName);
    }

    async enterRegisterEmail(email: string) {
        await this.resisterEmailInput.fill(email);
    }

    async enterRegisterPassword(password: string) {
        await this.registerPasswordInput.fill(password);
    }

    async clickRegisterSubmitButton() {
        await this.registerSubmitButton.click();
    }

    async checkLoginErrorMessage(expectedMessage: string) {
        await expect(this.loginErrorMessage).toHaveText(expectedMessage)
    }
}