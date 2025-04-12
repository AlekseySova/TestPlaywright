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

    await expect(page).toHaveTitle("Java Tutorial");

    await expect(page.locator("#main > h1")).toHaveText("Java Tutorial");

    await expect(page.locator(".ws-info.intro > h2")).toHaveText("Learn Java");


  })

test('Search for typescript tutorial', async ({ page }) => {

    await page.locator("#navbtn_tutorials").click();

    await page.locator('#filter-tutorials-input').fill('typescript');

    await page.locator(".ga-top-drop-tut-typescript[title='TypeScript Tutorial']").click();

    await expect(page).toHaveURL('https://www.w3schools.com/typescript/index.php');

    await expect(page).toHaveTitle("TypeScript Tutorial");

    await expect(page.locator("#main > h1")).toHaveText("TypeScript Tutorial");

    await expect(page.locator(".ws-info.intro > h2")).toHaveText("Learn TypeScript");    

})

test('Assert Javascript tutorial JS Data Types', async ({page}) => {

    await page.locator(".ga-nav[title='JavaScript Tutorial']").click();

    await page.locator("[href='js_datatypes.asp']").click();

    await expect(page).toHaveURL('https://www.w3schools.com/js/js_datatypes.asp');

    await expect(page).toHaveTitle("JavaScript Data Types");

    await expect(page.locator("#main > h1")).toHaveText("JavaScript Data Types");

    await expect(page.locator(".ws-info > h3:first-of-type")).toHaveText("JavaScript has 8 Datatypes");

})

test('Incorrect login', async ({page}) => {

    await page.locator(".ga-top-login").click();

    await page.locator("[name='email']").fill('asova+incorrect@techmagic.co');

    await page.locator("[name='password']").fill("IncorrectPassword");

    await page.locator("[type='submit']").click();

    await expect(page.locator("[class^='LoginForm_error_text']")).toHaveText("Sorry, looks like that’s the wrong email or password.")

})