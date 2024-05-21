import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://clientes-qa-acerogm.azurewebsites.net/#/');
  await page.goto('https://acerogm.b2clogin.com/acerogm.onmicrosoft.com/b2c_1_login/oauth2/v2.0/authorize?client_id=baae0406-b79d-4a99-a370-06f930268c47&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fclientes-qa-acerogm.azurewebsites.net%2F&client-request-id=55d6dace-dd74-4efe-a9d0-9934af535705&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.28.1&client_info=1&code_challenge=GVR4gxti7X46ZkNDrZkUkWJtOS81CxOJ0Q2Yh4tQCVA&code_challenge_method=S256&nonce=33e0f528-0848-441e-9094-32c8ca06cfb8&state=eyJpZCI6IjY5ZWJlYTFlLWFkNjYtNGI3My04ODQ1LThmYmVjNzU2MmQxNSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');
  await page.getByPlaceholder('Dirección de correo electró').click();
  await page.getByPlaceholder('Dirección de correo electró').fill('natalia.granados@castor.com.co');
  await page.getByPlaceholder('Dirección de correo electró').click();
  await page.getByPlaceholder('Dirección de correo electró').click();
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('devNatalia2022');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByText('Solicitudes', { exact: true }).click();
  await page.getByRole('link', { name: 'Listado Solicitudes' }).click();
  await page.getByRole('button', { name: 'Agregar solicitud' }).click();
  await page.locator('#floatingSelect').nth(1).selectOption('1');
  await page.getByLabel('transaction type').selectOption('1');
  await page.locator('#kt_toolbar_container').click();
});