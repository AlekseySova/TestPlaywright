import {expect, type Locator, Page} from '@playwright/test';

export class Home1776Page {

    private page: Page;
    private loginButton: Locator;
    private MenuButton: Locator;
    private MyAccountMenuItem: Locator;
    private MyInvestmentsMenuItem: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator("[class$='desktop']").getByRole('link', { name: 'Log in'});
        this.MenuButton = page.locator("button[class$='desktop']");
        this.MyAccountMenuItem = page.locator("a[href='/account/profile']");
        this.MyInvestmentsMenuItem = page.locator("a[href='/my/investments/list']");
    }

    async goto() {
        await this.page.goto('https://rubicon-qa.dynamo-ny.com');
    }

    async clickLogInButton() {
        await this.loginButton.click();
    }

    async clickMenuButton() {
        await this.MenuButton.click();
    }

    async clickMyAccountMenuItem() {
        await this.MyAccountMenuItem.click();
    }

    async clickMyInvestmentsMenuItem() {
        await this.MyInvestmentsMenuItem.click();
    }
}