import {expect, Locator, Page} from '@playwright/test';

export class MemeGeneratorPage {

    readonly page: Page;
    readonly uploadImageButton: Locator;
    readonly imageInEditor: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadImageButton = this.page.getByRole('link', { name: 'Upload Image' });
        this.imageInEditor = this.page.locator('#file');
    }

    async goto() {
        await this.page.goto('https://www.iloveimg.com/meme-generator');
    }

    async uploadFileByFileChooser(filePath: string) {
        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.uploadImageButton.click(),
          ]);
        await fileChooser.setFiles('./test-files/test.png');
    }

    async uploadFilebysetInputFiles(filePath: string) {
        await this.page.setInputFiles("input[type='file']",filePath);
      }

    async expectImageVisibleInEditor() {
        await expect(this.imageInEditor).toBeVisible({ timeout: 10000 });
    }
}