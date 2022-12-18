import { test, expect } from '@playwright/test';
import {CalculatorPage} from "../pages/calculator/calculator";

test.describe('Dimensions section', () => {
  test.beforeEach(async ({ page }) => {
    const calculatorPage = new CalculatorPage(page);
    await calculatorPage.goto();
  });

  test.afterEach(async ({ page }) => {
    await page.context().close();
  });

  test('User input item size and can see volume', async ({ page }) => {
    const calculatorPage = new CalculatorPage(page);
    await calculatorPage.dimensions.buttons.iKnowSizes.click();
    await calculatorPage.dimensions.inputs.length.fill('11');
    await calculatorPage.dimensions.inputs.width.fill('12');
    await calculatorPage.dimensions.inputs.height.fill('13');
    await expect(calculatorPage.dimensions.labels.volume).toContainText("1.7");
  });
})

