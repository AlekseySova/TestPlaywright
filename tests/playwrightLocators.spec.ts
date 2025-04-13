import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.w3schools.com/');
});

test.afterEach(async ({ page }) => {
    
    await page.close();
  });

  test('Role locator', async ({ page }) => {

    await page.getByRole('button', { name: 'Services' }).click();

    await page.getByRole('heading', {name: 'Free Tutorials'}).click();

    await expect(page.getByRole('heading', { name: 'An Overview of All Tutorials' })).toHaveText('An Overview of All Tutorials');

  });

  test('Get by Label locator', async ({ page }) => {

    await page.getByLabel('Search our tutorials').fill('Excel');

    await page.getByLabel('Search our tutorials').press('Enter');


  });

  test("Get by Placeholder locator", async ({ page }) => {

    await page.getByPlaceholder('Search our tutorials, e.g. HTML').fill('BOOTSTRAP');

    await page.getByPlaceholder('Search our tutorials, e.g. HTML').press('Enter');

    await expect(page).toHaveURL('https://www.w3schools.com/bootstrap/default.asp');

    await expect(page).toHaveTitle('Bootstrap 3 Tutorial');

    await expect(page.locator('#main > h1')).toHaveText('Bootstrap 3 Tutorial');



  });