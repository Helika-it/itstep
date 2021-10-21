import {Phone} from "./phone.js";

  
let phone1 = new Phone("+375291111111", "LG", 120);
let phone2 = new Phone("+375292222222", "Samcung", 130);
let phone3 = new Phone("+375293333333", "Huawei", 140);

console.log(phone1);
console.log(phone2);
console.log(phone3);

phone1.receiveCall("Bob");
phone1.getNumber();

phone2.receiveCall("Rob");
phone2.getNumber();

phone3.receiveCall("Ann");
phone3.getNumber();
