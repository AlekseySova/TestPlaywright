import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { SignUpPage } from '../Pages/SignUpPage';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
})

test.afterEach(async ({ page }) => {

    await page.close();

})

test('Sign up with wrong format of email without @', async ({ page }) => {

    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    
    await homePage.clickSignUpButton();

    await signUpPage.signUp('asova', 'Testtest@47', 'Oleksii', 'Sova');

    await signUpPage.checkErrorMessage('Please enter a valid email address');

})