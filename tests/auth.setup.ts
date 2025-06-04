import { test as setup, expect } from '@playwright/test';
import { Login1776Page } from '../Pages/1776LoginPage';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authentication', async ({ page }) => {

    const loginPage = new Login1776Page(page);
    await page.goto('https://rubicon-qa.dynamo-ny.com/login');
    await loginPage.fillEmail('asova+1776client001@techmagic.co');
    await loginPage.fillPassword('Testtest@47');
    await loginPage.clickLogInButton();
    await page.waitForURL('https://rubicon-qa.dynamo-ny.com');
    
    await page.context().storageState({ path: authFile });
});