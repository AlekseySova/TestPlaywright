import {test} from '@playwright/test';
import {MemeGeneratorPage} from '../Pages/memeGeneratorPage';

test.beforeEach(async ({page}) => {
    const memeGeneratorPage = new MemeGeneratorPage(page);
    await memeGeneratorPage.goto();
});

test.afterEach(async ({page}) => {
    await page.close();
});

test('Upload file using uploadFile page method', async ({page}) => {
    const memeGeneratorPage = new MemeGeneratorPage(page);
    await memeGeneratorPage.uploadFilebysetInputFiles('./test-files/test.png');
    await memeGeneratorPage.expectImageVisibleInEditor();
});

