import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
})

test.afterEach(async ({ page }) => {

    await page.close();

})

test('Sign up with wrong email', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.clickSignUpButton();
})