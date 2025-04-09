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

test('Assert Javascript tutorial JS Data Types', async ({page}) => {

    await page.locator(".ga-nav[title='JavaScript Tutorial']").click();

    await page.locator("[href='js_datatypes.asp']").click();

    await expect(page).toHaveURL('https://www.w3schools.com/js/js_datatypes.asp');

})

test('Incorrect login', async ({page}) => {

    await page.locator(".ga-top-login").click();

    await page.locator("[name='email']").fill('asova+incorrect@techmagic.co');

    await page.locator("[name='password']").fill("IncorrectPassword");

    await page.locator("[type='submit']").click();

    await expect(page.locator("[class^='LoginForm_error_text']")).toHaveText("Sorry, looks like that’s the wrong email or password.")

})