import {expect, type Locator, Page} from '@playwright/test';

export class MyInvestmentList1776Page {
    private page: Page;
    private investmentsTable: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async checkInvestmentTableExists(){
        await expect(this.page).toHaveTitle('Rubicon Capital (QA sandy)');
    }

}