import { test, expect } from '@playwright/test';
import { HeaderModalPage } from '../../pages/HeaderModalPage';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Log In E2E test', () => {
  test('Select Orders/Log in Button', async ({page}) => {

    const header = new HeaderModalPage(page);
    const loginPage = new LoginPage(page);

    await page.goto('https://ecommercepractice.letskodeit.com')

    await header.openOrders();

    await page.waitForURL('**/login*', { timeout: 5000 });

    await expect(page).toHaveURL('https://ecommercepractice.letskodeit.com/login/');
   
    await loginPage.inputEmail();

    await loginPage.inputPassword();

    await loginPage.selectLoginBtn();

    // await page.waitForTimeout(5000);

    await expect(page).toHaveURL('https://ecommercepractice.letskodeit.com/account/orders/')



  })
})