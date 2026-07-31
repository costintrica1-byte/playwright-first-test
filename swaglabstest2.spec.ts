import { test, expect } from '@playwright/test';

test('saucedemo', async ({ page }) => {
  // 1. Navigate to the page
  await page.goto('https://www.saucedemo.com/');

  // 2. Expect a title "to contain" a substring.
await expect(page).toHaveTitle(/Swag Labs/);
await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
await page.waitForTimeout(1000);
const login = await page.waitForSelector('#login-button');
if (login)
  await login.click();
await page.waitForTimeout(1500);

await expect(page).toHaveURL ('https://www.saucedemo.com/inventory.html');
await page.getByText('Sauce Labs Backpack').click();
await page.waitForTimeout(1500);
const addcart = await page.waitForSelector ('#add-to-cart');
if (addcart)
  await addcart.click();
const checkoutpage = await page.waitForSelector ('.shopping_cart_link');
if (checkoutpage)
  await checkoutpage.click();
await page.getByText('Checkout').click();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
await page.getByRole('textbox', { name: 'First Name'}).fill('Tester');
await page.getByRole('textbox', { name: 'Last Name'}).fill('Swag');
await page.getByRole('textbox', { name: 'Zip/Postal Code'}).fill('031845');
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Continue'}).click();
await page.waitForTimeout(2000);
await page.getByText('Shipping Information:')
const finishcheckout = await page.waitForSelector ('#finish');
if (finishcheckout)
  await finishcheckout.click();
await page.waitForTimeout(2000);
const confirmcheckout = await page.waitForSelector ('#back-to-products');
if (confirmcheckout)
  await confirmcheckout.click();
await expect(page).toHaveURL ('https://www.saucedemo.com/inventory.html');
const hamburgermenu = await page.waitForSelector ('#react-burger-menu-btn');
if (hamburgermenu)
  await hamburgermenu.click();
await page.waitForTimeout(1500);
const logout = await page.waitForSelector ('#logout_sidebar_link');
if (logout)
  await logout.click();
});
