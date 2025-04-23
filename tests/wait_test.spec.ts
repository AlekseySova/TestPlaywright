import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('http://uitestingplayground.com/autowait'); 
});

test.afterEach(async ({ page }) => {

    await page.close();
});

test('Wait for button to be Visible', async ({ page }) => {

    // precondition

    await page.getByRole('checkbox', { name: 'Visible' }).uncheck();

    await page.getByRole('button', { name: 'Apply 10s' }).click();

    //test

    await page.waitForSelector('#target ', { state: 'visible', timeout: 11000 });

    await page.getByRole('button', { name: 'Button'}).click({force: true});

    //assertion

    await expect(page.getByText('Target clicked')).toBeVisible();

});

test('Wait for element to be Enable', async ({ page }) => {

    // precondition

    await page.getByRole('checkbox', { name: 'Enabled' }).uncheck();
    
    await page.getByRole('button', { name: 'Apply 10s' }).click();

    // test
    
    await page.getByRole('button', { name: 'Button'}).waitFor({state: 'visible', timeout: 11000});

    await page.getByRole('button', { name: 'Button'}).click();

    // assertion

    await expect(page.getByText('Target clicked')).toBeVisible();

});

test('Wait for input to be Visible', async ({ page }) => {

    // precondition

    await page.getByRole('combobox', { name: 'Choose an element type: '}).selectOption('Input');
    await page.getByRole('checkbox', { name: 'Visible' }).uncheck();
    
    await page.getByRole('button', { name: 'Apply 10s' }).click();

    // test

    await page.waitForTimeout(11000);

    await page.locator('input#target').fill('Hello World');

    await page.locator('input#target').press('Enter');

    // assertion

    await expect(page.locator('#opstatus')).toHaveText('Text: Hello World');

});

test('Wait for textarea to be Editable', async ({ page }) => {

    // precondition

    await page.getByRole('combobox', { name: 'Choose an element type: '}).selectOption('Textarea');
    await page.getByRole('checkbox', { name: 'Editable' }).uncheck();
    
    await page.getByRole('button', { name: 'Apply 10s' }).click();

    // test

    await page.waitForTimeout(11000);
    
    await page.locator('#target').fill('Test Text');

    await page.locator("[for='element-type']").click();

    // assertion

    await expect(page.locator('#opstatus')).toHaveText('Text: Test Text');
    

});

test('Wait for select to be Non Zero Size', async ({ page }) => {

    // precondition

    await page.getByRole('combobox', { name: 'Choose an element type: '}).selectOption('Select');

    await page.getByRole('checkbox', { name: 'Non Zero Size' }).uncheck();

    await page.getByRole('button', { name: 'Apply 10s' }).click();

    // test

    await page.waitForSelector('#target ', { state: 'visible', timeout: 11000 });

    await page.locator('#target').click();
    
    // assertion

    await expect(page.getByText('Target clicked')).toBeVisible();


});