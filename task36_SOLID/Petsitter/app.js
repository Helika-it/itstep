import {Client} from "./client.js";
import {Petsitter} from "./petsitter.js";
import {Pet} from "./pet.js";
import {Order} from "./order.js";
import {Service} from "./service.js";
import {Review} from "./review.js";

let cat = new Pet("Сима", "сиамская", "кошка", 9);
let dog = new Pet("Снупик", "чихуа", "собака", 6);

let client = new Client("Семён","Sem_ka","111111");

client.addPet(cat);
client.addPet(dog);

console.log(client.checkPet("Сима"));

let service = new Service("Выгул", 10, 5);

let review1 = new Review(client, "Все ок", 5, "11.10.2021");
let review2 = new Review(client, "Не ок", 1, "11.10.2021");

let petsitter = new Petsitter("Прокоп","Pro_kop", "222222");

petsitter.addService(service);
petsitter.addReview(review1);
petsitter.addReview(review2);


console.log(petsitter.checkService("Выгул"));
console.log(petsitter.getRating());

