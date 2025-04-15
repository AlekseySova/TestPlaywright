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

  test('Get by Text locator', async ({ page }) => {

    await page.getByText('Video Tutorial', { exact: true }).click();
    
    await expect(page).toHaveURL('https://www.w3schools.com/videos/index.php');
    
    await expect(page).toHaveTitle('Video Tutorials - W3Schools');
    
    await expect(page.getByText('HTML Video Tutorial')).toHaveText('HTML Video Tutorial');
    
    await expect(page.getByText('Learn the basics of HTML in this fun and engaging video tutorial.')).toHaveText('Learn the basics of HTML in this fun and engaging video tutorial.');

  });

  test('Get by Alt locator', async ({ page }) => {

    await page.getByAltText('Colorpicker').click();

    await expect(page).toHaveURL('https://www.w3schools.com/colors/colors_picker.asp');

    await expect(page).toHaveTitle('HTML Color Picker');

    await expect(page.getByAltText('colormap')).toBeVisible();
    
  });

  test('Get by Title locator', async ({ page }) => {

    await page.getByTitle('How to', {exact: true}).click();

    await expect(page).toHaveURL('https://www.w3schools.com/howto/default.asp');

    await expect(page).toHaveTitle('W3Schools How TO - Code snippets for HTML, CSS and JavaScript');

    await expect(page.locator('#main > h1')).toHaveText('W3Schools How To');

  });