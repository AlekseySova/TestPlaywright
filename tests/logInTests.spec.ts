import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test('Log in with wrong email @smoke', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickSignUpButton();
    await homePage.enterLoginEmail('asova+W3Schoolwrong@techmagic.co');
    await homePage.enterLoginPassword('Testtest@47');
    await homePage.clickLoginSubmitButton();
    await homePage.checkLoginErrorMessage('Invalid username or password');
})

test('log in with wrong password', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickSignUpButton();
    await homePage.enterLoginEmail('asova+W3school@techmagic.co');
    await homePage.enterLoginPassword('WrongPassword');
    await homePage.clickLoginSubmitButton();
    await homePage.checkLoginErrorMessage('Invalid username or password');
})