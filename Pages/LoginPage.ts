import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly logInButton: Locator;
    private readonly errorMessage: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.logInButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator("[class^='LoginForm_error_text']");
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

