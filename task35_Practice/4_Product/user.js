import {Basket} from "./basket.js";
import {Product} from "./product.js";

class User {
  name;
  login;
  password;

  constructor(name, login, password){
    this.name = name;
    this.login = login;
    this.password = password;
  }

  getUser(){
    console.log(`User: ${this.name}`);
  }




/*
  getBasket(basket){
    console.log(`Корзина ${this.name}: ${this.basket}`);
  }

  putInBasket(basket, product) {
    basket.push(product)
  }
  */
}
export {User};