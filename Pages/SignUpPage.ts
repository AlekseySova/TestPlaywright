import {expect, type Locator, type Page} from '@playwright/test';

export class SignUpPage {
    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly signUpButton: Locator;
    private readonly errorMessage: Locator
    
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'email' });
        this.passwordInput = page.getByRole('textbox', { name: 'password' });
        this.firstNameInput = page.getByRole('textbox', { name: 'first name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'last name' });
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
        this.errorMessage = page.locator("[class^='SignUpForm_error_text']");
    }

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