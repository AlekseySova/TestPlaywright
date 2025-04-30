import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://techmagic.co');
});

test.afterEach(async ({ page }) => {

    await page.close();

});

test('Get by locators filters', async ({ page }) => {

    const blogSlide = page.locator('.blog-slide').filter({ hasText: "Revolutionising Banking: The Best Open Banking Apps" });

    const arrow = blogSlide.locator('[alt="arrow"]');

    await arrow.click();

});