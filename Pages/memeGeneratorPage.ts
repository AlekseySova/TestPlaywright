import {expect, Locator, Page} from '@playwright/test';
import path from 'path';

export class MemeGeneratorPage {

    constructor(private page: Page) {}

    private uploadImageButton: Locator = this.page.getByRole('link', { name: 'Upload Image' });
    private imageInEditor: Locator = this.page.locator('#file');

    async goto() {
        await this.page.goto('https://www.iloveimg.com/meme-generator');
    }

    async clickUploadImageButton() {
        await this.uploadImageButton.click();
    }

    async uploadFilebysetInputFiles(filePath: string) {
        await this.page.setInputFiles("input[type='file']",filePath);
      }

    async expectImageVisibleInEditor() {
        await expect(this.imageInEditor).toBeVisible({ timeout: 10000 });
    }
}