import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {

    await page.goto('https://www.w3schools.com/');
});

test.afterEach(async ({ page }) => {
    
    await page.close();
  });

test('Has proper URL', async ({ page }) => {
  
    await page.locator(".ga-nav[title='Java Tutorial']").click();

    
    await expect(page).toHaveURL("https://www.w3schools.com/java/default.asp");

  });

test('Search for typescript tutorial', async ({ page }) => {

    await page.locator('#tnb-google-search-input').fill('typescript');

    await page.locator('#tnb-google-search-input').press('Enter');

    await expect(page).toHaveURL('https://www.w3schools.com/typescript/index.php');

})