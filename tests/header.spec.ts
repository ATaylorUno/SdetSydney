import { test, expect } from '@playwright/test';
import { HeaderModalPage } from '../pages/HeaderModalPage';

test.describe('Log In E2E test', () => {
  test('Select Orders/Log in Button', async ({page}) => {

    const header = new HeaderModalPage(page);

    await page.goto('https://ecommercepractice.letskodeit.com/')

    await header.openOrders();

    await expect(page).toHaveURL('https://ecommercepractice.letskodeit.com/login/');


  })
})