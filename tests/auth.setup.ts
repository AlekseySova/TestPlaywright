import { test as setup, expect } from '@playwright/test';
import { Login1776Page } from '../Pages/1776LoginPage';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authentication', async ({ page }) => {

    const loginPage = new Login1776Page(page);
    await page.goto('https://rubicon-qa.dynamo-ny.com/login');
    await loginPage.fillEmail(process.env.LOGIN_INVESTOR_1776ING!);
    await loginPage.fillPassword(process.env.LOGIN_INVESTOR_1776ING_PASSWORD!);
    await loginPage.clickLogInButton();
    await page.waitForURL('https://rubicon-qa.dynamo-ny.com');
    
    await page.context().storageState({ path: authFile });
});