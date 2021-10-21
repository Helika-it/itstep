import {Basket} from "./basket.js";
import {Product} from "./product.js";

class User {
  login;
  password;
  basket;

  constructor(login, password){
    this.basket = new Basket();
    this.login = login;
    this.password = password;
  }

  addProductToBasket(product) {
    this.basket.addToBasket(product);
  }

  show() {
    console.log(`${this.login}'s basket`);
      this.basket.products.forEach(function (product, index) {
        console.log(`${index+1}. ${product.name} cost ${product.price}$`)
      });
  }
}
export {User};