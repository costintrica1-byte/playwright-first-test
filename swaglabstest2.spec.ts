import { test, expect } from '@playwright/test';
import { error } from 'console';

test('saucedemo', async ({ page }) => {
  // 1. Navigate to the page
  await page.goto('https://www.saucedemo.com/');

  // 2. Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.waitForTimeout(1500);
  const login = await page.getByText('Login');
  // const login = await page.waitForSelector('#login-button');
  if (login)
    await login.click();
  await page.waitForTimeout(1500);

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.getByText('Sauce Labs Backpack').click();
  await page.waitForTimeout(1500);
  const addcart = await page.waitForSelector('#add-to-cart');
  if (addcart)
    await addcart.click();
  const checkoutpage = await page.waitForSelector('.shopping_cart_link');
  if (checkoutpage)
    await checkoutpage.click();
  await page.getByText('Checkout').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  await page.waitForTimeout(1500);
  await page.getByRole('textbox', { name: 'First Name' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Swag');
  await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('031845');
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(1500);
  await page.getByText('Shipping Information:')
  const finishcheckout = await page.waitForSelector('#finish');
  if (finishcheckout)
    await finishcheckout.click();
  await page.waitForTimeout(1500);
  const confirmcheckout = await page.waitForSelector('#back-to-products');
  if (confirmcheckout)
    await confirmcheckout.click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  const hamburgermenu = await page.waitForSelector('#react-burger-menu-btn');
  if (hamburgermenu)
    await hamburgermenu.click();
  await page.waitForTimeout(1500);
  const logout = await page.waitForSelector('#logout_sidebar_link');
  if (logout)
    await logout.click();
  await page.waitForTimeout(1500);
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.getByRole('textbox', { name: 'Username' }).fill('locked_out_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.waitForTimeout(1500);
  if (login)
    await login.click();
  await page.waitForTimeout(1500);
  const errorlogin = await page.getByText('Epic sadface');
  if (errorlogin)
    await page.waitForTimeout(1500);
  await page.getByRole('textbox', { name: 'Username' }).clear();
  await page.getByRole('textbox', { name: 'Password' }).clear();
await page.waitForTimeout(1500);
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
await page.waitForTimeout(1500);
if (login)
  await login.click();
await page.waitForTimeout(500);
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
const addbackpack = await page.waitForSelector('#add-to-cart-sauce-labs-backpack');
if (addbackpack)
  await addbackpack.click();
  await page.waitForTimeout(1500);
// if (addcart)
//     await addcart.click();
const addjacket = await page.waitForSelector('#add-to-cart-sauce-labs-fleece-jacket');
if (addjacket)
  await addjacket.click();
  await page.waitForTimeout(1500);
const cart = await page.waitForSelector('.shopping_cart_link');
if (cart)
  await cart.click();
await page.waitForTimeout(1500);
const continueshopping = await page.waitForSelector('#continue-shopping');
if (continueshopping)
  await continueshopping.click();
const addbikelight = await page.waitForSelector('#add-to-cart-sauce-labs-bike-light');
if (addbikelight)
  await addbikelight.click();
// if (checkoutpage)
//   await checkoutpage.click();
const checkoutbutton = await page.waitForSelector('#shopping_cart_container');
if (checkoutbutton)
    await checkoutbutton.click();
  await page.getByText('Checkout').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  await page.waitForTimeout(1500);
  await page.getByRole('textbox', { name: 'First Name' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Swag');
  await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('031845');
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(1500);
  await page.getByText('Shipping Information:');
  const checkoutpagetwo = await page.waitForSelector('#finish')
  if (checkoutpagetwo)
    await checkoutpagetwo.click();
  await page.waitForTimeout(1500);
  //page.close();
});
