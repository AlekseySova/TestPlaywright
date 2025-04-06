import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.w3schools.com/');
  
    await page.locator(".ga-nav[title='Java Tutorial']").click();

    
    await expect(page).toHaveURL("https://www.w3schools.com/java/default.asp");
  });