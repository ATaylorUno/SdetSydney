import { Page, Locator } from '@playwright/test';

export class HeaderModalPage {

  page:Page 
  search:Locator
  favorites:Locator
  orders:Locator
  cart:Locator

  
  shop:Locator
  journal:Locator
  about:Locator


 

  constructor(page:Page){

    this.page = page;
    this.search = page.getByLabel('Search');
    this.favorites = page.getByLabel('Favorites');
    this.orders = page.getByLabel('Orders');
    this.cart = page.getByLabel('Cart');

    this.shop = page.getByRole('link', { name: 'Shop', exact: true });
    this.journal = page.getByRole('link', { name: 'Journal', exact: true });
    this.about = page.getByRole('link', { name: 'About', exact: true });
    
  }

  async openSearch() {
    await this.orders.click();
  }

  async openFavorites() {
    await this.orders.click();
  }

  async openOrders() {
    await this.orders.click();
  }

  async openCart() {
    await this.orders.click();
  }

  async openShop() {
    await this.shop.click();
  }

  async openJournal() {
    await this.journal.click();
  }

  async openAbout() {
    await this.about.click();
  }



  
}