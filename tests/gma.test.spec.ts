import { test, expect } from '@playwright/test';

test('Listado Solicitudes', async ({ page }) => {

  test.setTimeout(150_000);
  /* LogIn Step*/
  await page.goto('https://clientes-qa-acerogm.azurewebsites.net/#/');
  await page.waitForTimeout(8000);
  await page.locator('input[id=\'email\']').fill('natalia.granados@castor.com.co')
  await page.locator('input[id=\'password\']').fill('devNatalia2022')
  await page.locator('button[id=\'next\']').click();
  await page.waitForTimeout(10000);

  /* Listado Solicitudes */
  await page.locator('//span[text()=\'Solicitudes\']').click();
  await page.locator('//span[text()=\'Listado Solicitudes\']').click();
  await page.waitForTimeout(5000); // waits for 3 seconds  //await page.pause()
  await expect(page.locator('//h1[contains(text(),\'Listado Solicitudes\')]')).toBeVisible()
  await page.waitForTimeout(8000); // waits for 3 seconds

  /* Agregar Solicitud */
  await page.locator('button[class=\'BtnAdd\']').click();  
  await page.waitForTimeout(3000); // waits for 5 seconds   
  await page.getByLabel('Fecha').fill('2024-05-08');
  await page.locator('select[formcontrolname=\'typeId\']').click();
  await page.locator('#floatingSelect').nth(1).selectOption('1');
  await page.getByLabel('transaction type').selectOption('1');
  await page.locator('select[formcontrolname=\'navieraId\']').selectOption('6');
  await page.locator('select[formcontrolname=\'area\']').selectOption('2');
  await page.locator('select[formcontrolname=\'customerId\']').selectOption('24');
  await page.locator('select[formcontrolname=\'originPortId\']').selectOption('533');
  await page.locator('select[formcontrolname=\'destinationPortId\']').selectOption('406');
  await page.locator('input[formcontrolname=\'warehouseDate\']').fill('2024-05-15');
  await page.getByRole('button', { name: 'Enviar solicitud' }).click();
  await page.waitForTimeout(5000); // waits for 5 seconds 
 
  await page.pause()
});

