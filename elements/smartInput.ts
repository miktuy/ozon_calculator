import { Locator, Page } from '@playwright/test';

export class SmartInput {
  readonly page: Page;
  readonly label: Locator;
  readonly input: Locator;
  readonly cleanBtn: Locator;
  readonly tooltip: Locator;

  /**
   * @param index Position of element in DOM structure.
   */
  constructor(page: Page, label: string, index: number = 0) {
    this.page = page;
    const parent = page.locator(`//label[contains(text(), '${label}')]/..`).nth(index)
    this.label = parent.locator('label');
    this.input = parent.locator('input');
    this.cleanBtn = parent.locator('//..//button');
    this.tooltip = parent.locator('//..//i');
  }

  async fill(value: string) {
    await this.input.fill(value);
  }
}