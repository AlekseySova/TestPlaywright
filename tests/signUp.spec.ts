import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test('Sign up with wrong format of email without @', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickSignUpButton();
    await homePage.clickRegisterLink();
    await homePage.enterRegisterFirmName('Oleksii');
    await homePage.enterRegisterLastName('Sova');
    await homePage.enterRegisterEmail('asova');
    await homePage.enterRegisterPassword('Testtest@47');
    await homePage.clickRegisterSubmitButton();
    await homePage.checkEmailValidationMessage("Please include an '@' in the email address. 'asova' is missing an '@'.");
})

