import {expect, type Locator, type Page} from '@playwright/test';

export class SignUpPage {
    
    constructor(private page: Page) {}

    private emailInput: Locator = this.page.getByRole('textbox', { name: 'email' });
    private passwordInput: Locator = this.page.getByRole('textbox', { name: 'password' });
    private firstNameInput: Locator = this.page.getByRole('textbox', { name: 'first name' });
    private lastNameInput: Locator = this.page.getByRole('textbox', { name: 'last name' });
    private signUpButton: Locator = this.page.getByRole('button', { name: 'Sign Up' });
    private errorMessage: Locator = this.page.locator("[class^='SignUpForm_error_text']");

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async enterFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

    async checkErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toHaveText(expectedMessage);
    }
}