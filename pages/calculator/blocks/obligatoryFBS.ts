import {Page, Locator, expect} from "@playwright/test";
import {SmartInput} from "../../../elements/smartInput";

class ShipmentPointType {
  page: Page;
  currentType: Locator;
  tooltip: Locator;
  modal: {
    buttons: {
      close: Locator,
      apply: Locator,
    },
    options: {
      receivingDeliveringPoint: Locator,
      sortingCenter: Locator,
      transitSortingCenter: Locator,
    }
  }

  constructor(page: Page) {
    this.page = page;
    this.currentType = this.page.locator('//label[@for="input-116"]/../../..');
    this.tooltip = this.page.locator('//label[@for="input-116"]/../..')
      .locator('div').last();
    this.modal = {
      buttons: {
        close: this.page.locator('button', {hasText: 'Закрыть'}),
        apply: this.page.locator('button', {hasText: 'Применить'}),
      },
      options: {
        receivingDeliveringPoint: this.page.locator('//div[@aria-labelledby="input-186"]').first(),
        sortingCenter: this.page.locator('//div[@aria-labelledby="input-186"]').nth(1),
        transitSortingCenter: this.page.locator('//div[@aria-labelledby="input-186"]').last(),
      }
    }
  }

  async modalShouldBeOpened() {
    await expect(this.page.locator('//div[@role="dialog"]')).toContainText('Выберите кластер')
  }

}

export class ObligatoryFBS {
  page: Page;
  buttons: {
    shipmentToReceivingPoint: Locator,
    shipmentToOzonCurrier: Locator,
  }
  inputs: {
    itemsInShipmentReceivingPoint: SmartInput,
    itemsInShipmentCurrier: SmartInput,
    shipmentInDelivering: SmartInput,
  }
  modal: ShipmentPointType;

  constructor(page: Page) {
    this.page = page;
    this.modal = new ShipmentPointType(page);
    this.buttons = {
      shipmentToReceivingPoint: page.locator('//a[@href="#drop-off"]'),
      shipmentToOzonCurrier: page.locator('//a[@href="#pick-up"]'),
    }
    this.inputs = {
      itemsInShipmentReceivingPoint: new SmartInput(page, 'input-109'),
      itemsInShipmentCurrier: new SmartInput(page, 'input-203'),
      shipmentInDelivering: new SmartInput(page, 'input-208'),
    }
  }
}