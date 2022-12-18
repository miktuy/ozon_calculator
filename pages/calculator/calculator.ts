import {Page} from '@playwright/test';
import {Dimensions} from "./blocks/dimensions";
import {ObligatoryFBS} from "./blocks/obligatoryFBS";

export class CalculatorPage {
  readonly page: Page;
  readonly dimensions: Dimensions;
  readonly obligatoryFBS: ObligatoryFBS;

  constructor(page: Page) {
    this.page = page;
    this.dimensions = new Dimensions(page);
    this.obligatoryFBS = new ObligatoryFBS(page);
  }

  async goto() {
    await this.page.goto('https://calculator.ozon.ru/');
  }

}