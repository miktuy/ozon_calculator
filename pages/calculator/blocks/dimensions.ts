import {Page, Locator} from "@playwright/test";
import {SmartInput} from "../../../elements/smartInput";

export class Dimensions {
  page: Page;
  buttons: {
    iKnowVolume: Locator,
    iKnowSizes: Locator,
  }
  inputs: {
    volume: SmartInput,
    weightForVolume: SmartInput,
    length: SmartInput,
    width: SmartInput,
    height: SmartInput,
    weightForSizes: SmartInput,
  }
  labels: {
    weightForVolume: Locator,
    weightForSize: Locator,
    volume: Locator,
  }

  constructor(page: Page) {
    this.page = page;
    this.buttons = {
      iKnowVolume: page.locator('a', {hasText: 'Я знаю объем'}),
      iKnowSizes: page.locator('a', {hasText: 'Я знаю габариты'})
    }
    this.inputs = {
      volume: new SmartInput(page, 'input-52'),
      weightForVolume: new SmartInput(page, 'input-57'),
      length: new SmartInput(page, 'Длина, см'),
      width:  new SmartInput(page, 'Ширина, см'),
      height:  new SmartInput(page, 'Высота, см'),
      weightForSizes:  new SmartInput(page, 'input-306', 1),
    }
    this.labels = {
      weightForVolume: page.locator('#volume').locator('div', {hasText: 'Объемный вес товара:'}).last(),
      weightForSize: page.locator('#dimensions').locator('div', {hasText: 'Объемный вес товара:'}).last(),
      volume: page.locator('#dimensions').locator('div', {hasText: 'Объем товара:'}).last(),
    }
  }

}