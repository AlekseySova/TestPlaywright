import {expect, type Locator, type Page} from '@playwright/test';

export class SignUpPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly signUpButton: Locator;
    readonly errorMessage: Locator
    
    constructor(page: Page) {

        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'email' });
        this.passwordInput = page.getByRole('textbox', { name: 'password' });
        this.firstNameInput = page.getByRole('textbox', { name: 'first name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'last name' });
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
        this.errorMessage = page.locator("[class^='SignUpForm_error_text']");

    }

    async signUp(email: string, password?: string, firstName?: string, lastName?: string) {

        await this.emailInput.fill(email);
        if (password) {
            await this.passwordInput.fill(password);
        }
        if (firstName) {
            await this.firstNameInput.fill(firstName);
        }
        if (lastName) {
            await this.lastNameInput.fill(lastName);
        }
        await this.signUpButton.click();

    }

    async checkErrorMessage(expectedMessage: string) {

        await expect(this.errorMessage).toHaveText(expectedMessage);

    }

}