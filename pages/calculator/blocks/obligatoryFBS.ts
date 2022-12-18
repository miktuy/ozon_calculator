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
        receivingDeliveringPoint: this.page
          .locator('label', {hasText: 'ППЗ/ПВЗ – пункт приёма/выдачи заказов'}),
        sortingCenter: this.page
          .locator('label', {hasText: 'СЦ – сортировочный центр'}),
        transitSortingCenter: this.page
          .locator('label', {hasText: 'ТСЦ – транзитный  сортировочный центр'})
      }
    }
  }

  async modalShouldBeOpened() {
    await expect(this.page.locator('//div[@role="dialog"]')).toContainText('Выберите кластер')
  }

  async selectType(pointType: string) {
    await this.modalShouldBeOpened();
    switch (pointType) {
      case 'ППЗ': {
        await this.modal.options.receivingDeliveringPoint.click();
        break;
      }
      case 'СЦ': {
        await this.modal.options.sortingCenter.click();
        break;
      }
      case 'ТСЦ': {
        await this.modal.options.transitSortingCenter.click();
        break;
      }
    }
    await this.modal.buttons.apply.click();
  }

  async currentTypeShouldBe(pointType: string) {
    await expect(this.currentType).toHaveAttribute('title', pointType)
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
  type: ShipmentPointType;

  constructor(page: Page) {
    this.page = page;
    this.type = new ShipmentPointType(page);
    this.buttons = {
      shipmentToReceivingPoint: page.locator('//a[@href="#drop-off"]'),
      shipmentToOzonCurrier: page.locator('//a[@href="#pick-up"]'),
    }
    this.inputs = {
      itemsInShipmentReceivingPoint: new SmartInput(page, 'Товары в отправлении, шт.'),
      itemsInShipmentCurrier: new SmartInput(page, 'Товары в отправлении, шт.', 1),
      shipmentInDelivering: new SmartInput(page, 'Отправления в отгрузке, шт.'),
    }
  }
}