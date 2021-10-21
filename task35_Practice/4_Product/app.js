import {Product} from "./product.js";
import {Category} from "./category.js";
import {Basket} from "./basket.js";
import {User} from "./user.js";

//!Продукты
let milk15 = new Product("Молоко 1,5%", "1.40", 3);
let milk32 = new Product("Молоко 3,2%", "1.65", 5);
let kefir = new Product("Кефир 3,2%", "1.40", 3);

let arrProduct = [];

arrProduct.push(milk15);
arrProduct.push(milk32);
arrProduct.push(kefir);


let foodCategory = new Category("Продукты", arrProduct);

console.log(foodCategory);

//!Хозтовары
let toiletPaper = new Product("Туалетная бумага", "1.89", 4);
let bucket = new Product("Ведро", "33.00", 2);
let napkins = new Product("Салфетки", "0.90", 4);

let arrHousehold = [];

arrHousehold.push(toiletPaper);
arrHousehold.push(bucket);
arrHousehold.push(napkins);


let householdGoodsCategory = new Category("Хозтовары", arrHousehold);

console.log(householdGoodsCategory);

//!Пользователь
let userBob = new User("Bob", "Bobbi1", 1111);

userBob.getUser();

//!Корзина

let basketBob = new Basket()

basketBob = [];

//basketBob.putInBasket(basketBob, toiletPaper);

//basketBob.getBasket();

basketBob.push(toiletPaper);
basketBob.push(milk15);



basketBob.forEach(function(item){
  console.log(item);
});

