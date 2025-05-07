import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
})

test.afterEach(async ({ page }) => {

    await page.close();

})


test('Log in with wrong email', async ({ page }) => {

    const homePage = new HomePage(page);
    const signInPage = new LoginPage(page);
    

    await homePage.clickLogInButton();

    await signInPage.login('asova+W3Schoolwrong@techmagic.co', 'Testtest@47');

    await signInPage.checkErrorMessage('Sorry, looks like that’s the wrong email or password.');


})

test('log in with wrong password', async ({ page }) => {

    const homePage = new HomePage(page);
    const signInPage = new LoginPage(page);

    await homePage.clickLogInButton();

    await signInPage.login('asova+W3school@techmagic.co', 'WrongPassword');
    
    await signInPage.checkErrorMessage('Make sure you type your email and password correctly. Both your password and email are case-sensitive.');


})