import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly logInButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
    this.emailInput = page.getByRole('textbox', { name: 'Email'});
    this.passwordInput = this.page.getByRole('textbox', {name: 'Password'});
    this.logInButton = this.page.getByRole('button', { name: 'Login' });
    this.errorMessage = this.page.locator("[class^='LoginForm_error_text']");
    }

    async login(email: string, password?: string) {
        await this.emailInput.fill(email);
        if (password) {
            await this.passwordInput.fill(password);
        }
        await this.logInButton.click();
    }

    async checkErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toHaveText(expectedMessage)
    }
}

