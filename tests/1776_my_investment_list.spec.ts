import { test, expect } from '@playwright/test';
import { Home1776Page } from '../Pages/1776HomePage';
import { MyInvestmentList1776Page } from '../Pages/1776MyInvestmentList';

test.describe('1776 My Investment List Test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://rubicon-qa.dynamo-ny.com');
    });

    test('Check investments table on My Investment List page', async ({ page }) => {
        const homePage = new Home1776Page(page);
        const myInvestmentListPage = new MyInvestmentList1776Page(page);

        await homePage.clickMenuButton();
        await homePage.clickMyInvestmentsMenuItem();
        await myInvestmentListPage.checkInvestmentTableExists();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});
