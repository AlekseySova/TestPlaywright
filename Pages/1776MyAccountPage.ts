import {expect, type Locator, Page} from '@playwright/test';

export class MyAccount1776Page {

    private page: Page;
    private myAccountEmail: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountEmail = page.locator("#email");
    }

    async checkUsersEmail(expectedEmail: string) {
        await expect(this.myAccountEmail).toHaveValue(expectedEmail);
    }
}