import { test, expect } from '@playwright/test';
import {CalculatorPage} from "../pages/calculator/calculator";

test.describe('Obligatory FBS section', () => {
  test.beforeEach(async ({ page }) => {
    const calculatorPage = new CalculatorPage(page);
    await calculatorPage.goto();
  });

  test.afterEach(async ({ page }) => {
    await page.context().close();
  });

  test('User can select type "CЦ – сортировочный центр" for Delivering Point', async ({ page }) => {
    const calculatorPage = new CalculatorPage(page);
    await calculatorPage.obligatoryFBS.type.currentType.click();
    await calculatorPage.obligatoryFBS.type.selectType('СЦ');
    await calculatorPage.obligatoryFBS.type.currentTypeShouldBe('СЦ – сортировочный центр');
  });
})

