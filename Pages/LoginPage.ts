import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    private emailInput: Locator = this.page.getByRole('textbox', { name: 'Email'});
    private passwordInput: Locator = this.page.getByRole('textbox', {name: 'Password'});
    private logInButton: Locator = this.page.getByRole('button', { name: 'Login' });
    private errorMessage: Locator = this.page.locator("[class^='LoginForm_error_text']");

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

