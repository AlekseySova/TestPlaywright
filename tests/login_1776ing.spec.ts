import { test, expect } from '@playwright/test';
import { Home1776Page } from '../Pages/1776HomePage';
import { Login1776Page } from '../Pages/1776LoginPage';

test.describe('1776 Login Test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://1776qa-test.dynamo-ny.com/');
    });

    test('Login with valid credentials', async ({ page }) => {
        const homePage = new Home1776Page(page);
        const loginPage = new Login1776Page(page);

        await homePage.clickLogInButton();
        await loginPage.fillEmail('asova+1776client001@techmagic.co');
        await loginPage.fillPassword('Testtest@47');
        await loginPage.clickLogInButton();
    });
})