import {expect, type Locator, Page} from '@playwright/test';

export class Home1776Page {

    private page: Page;
    private loginButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('main-header').getByRole('link', { name: 'Log in' });
    }

    async goto() {
        await this.page.goto('https://1776qa-test.dynamo-ny.com/');
    }

    async clickLogInButton() {
        await this.loginButton.click();
    }
}