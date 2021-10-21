import {Product} from "./product.js";
import {Category} from "./category.js";
import {Basket} from "./basket.js";
import {User} from "./user.js";

//!Продукты
let milk15 = new Product("Молоко 1,5%", "1.40", 3);
let milk32 = new Product("Молоко 3,2%", "1.65", 5);
let kefir = new Product("Кефир 3,2%", "1.40", 3);

let foodCategory = new Category("Продукты");

foodCategory.addProduct(milk15);
foodCategory.addProduct(milk32);
foodCategory.addProduct(kefir);

foodCategory.showProducts();


//!Хозтовары
let toiletPaper = new Product("Туалетная бумага", "1.89", 4);
let bucket = new Product("Ведро", "33.00", 2);
let napkins = new Product("Салфетки", "0.90", 4);

let householdGoodsCategory = new Category("Хозтовары");

householdGoodsCategory.addProduct(toiletPaper);
householdGoodsCategory.addProduct(bucket);
householdGoodsCategory.addProduct(napkins);

householdGoodsCategory.showProducts();

//!Пользователь
let userBob = new User("Bobbi1", 1111);

//!Корзина
userBob.addProductToBasket(toiletPaper)
userBob.addProductToBasket(milk15)

userBob.show();