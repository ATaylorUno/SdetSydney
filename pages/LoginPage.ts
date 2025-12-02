import { Page, Locator } from '@playwright/test';

export class LoginPage {

  emailTextField:Locator
  passwordTextField:Locator
  loginBtn:Locator
  createAccountBtn:Locator
  forgetPasswordLink:Locator

  constructor(page:Page){

    this.emailTextField = page.locator('#email');
    this.passwordTextField = page.getByRole('textbox', {name: 'Password', exact: true})
    this.loginBtn = page.getByRole('button', {name: 'LOG IN', exact: true})
    // todo - createAccountBtn
    this.forgetPasswordLink = page.getByRole('link', {name: 'FORGOT PASSWORD', exact:true})
  }

  async inputEmail(){
    await this.emailTextField.fill('test@email.com')
  }

  async inputPassword(){
    await this.passwordTextField.fill('password')
  }

  async selectLoginBtn(){
    await this.loginBtn.click()
  }

}