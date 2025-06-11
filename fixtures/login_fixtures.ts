import { test as base } from '@playwright/test';
import { Home1776Page} from '../Pages/1776HomePage';
import { Login1776Page } from '../Pages/1776LoginPage';

type MyFixtures = {
    Home: Home1776Page;
    Login: Login1776Page;
  };
  
export const test = base.extend<MyFixtures>({
    Home: async ({ page}, use) => {
        const homePage = new Home1776Page(page);
        await homePage.goto();
        await homePage.clickLogInButton();
        await use(homePage);
    },
    Login: async ({ page, Home }, use) => {
        const loginPage = new Login1776Page(page);
        await loginPage.fillEmail('asova+1776client001@techmagic.co');
        await loginPage.fillPassword('Testtest@47');
        await loginPage.clickLogInButton();
        await use(loginPage);
    },
});

export { expect } from '@playwright/test';
  

