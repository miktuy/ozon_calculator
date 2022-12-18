# TEST SAMPLE FOR OZON CALCULATOR
Simple test examples for webapp at https://calculator.ozon.ru/


### Used Page Object Model approach with separated blocks

1. Page is described in [/pages/calculator/calculator.ts](pages/calculator/calculator.ts)
with two blocks: for dimensions settings and for obligatory FBS settings
2. Custom input with close button and tooltip icon is described as class
[SmartInput](elements/smartInput.ts)
3. Custom element for selecting of `Тип точки приема` is described as class 
[ShipmentPointType](pages/calculator/blocks/obligatoryFBS.ts)


### How To Run
1. Install dependencies `npm ci`
2. Install Playwright Browsers `npx playwright install --with-deps`
3. Run Playwright tests `npx playwright test`.

### Reports
To open last HTML report run: `npx playwright show-report`
