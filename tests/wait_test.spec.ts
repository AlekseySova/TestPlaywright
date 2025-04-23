import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('http://uitestingplayground.com/autowait'); 
});

test.afterEach(async ({ page }) => {

    await page.close();
});

test('Wait for button to be Visible', async ({ page }) => {

    // precondition

    await page.getByRole('checkbox', { name: 'Visible' }).check();

    await page.getByRole('button', { name: 'Apply 10s' }).click();

    //test

    await page.waitForSelector('#target ', { state: 'visible', timeout: 11000 });

    await page.getByRole('button', { name: 'Button'}).click({force: true});

    //assertion

    await expect(page.getByText('Target clicked')).toBeVisible();

});

test('Wait for element to be Enable', async ({ page }) => {

    // precondition

    await page.getByRole('checkbox', { name: 'Enabled' }).check();
    
    await page.getByRole('button', { name: 'Apply 10s' }).click();

    // test
    
    await page.getByRole('button', { name: 'Button'}).waitFor({state: 'visible', timeout: 11000});

    await page.getByRole('button', { name: 'Button'}).click();

    // assertion

    await expect(page.getByText('Target clicked')).toBeVisible();

});