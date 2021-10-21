import {Client} from "./client.js";
import {Driver} from "./driver.js";
import {Order} from "./order.js";
import {Service} from "./service.js";
import {Feedback} from "./feedback.js";


let client = new Client("Семён","Sem_ka","111111");

//client.addPet(cat);
//client.addPet(dog);

//console.log(client.checkPet("Сима"));

let service = new Service("Эконом-класс", 2, 5);
//let serviceBusiness = new Service("Бизнес-класс", 5, 15);
//let serviceVIP = new Service("VIP", 10, 10);

let feedback1 = new Feedback(client, "Все ок", 5, "11.10.2021");
let feedback2 = new Feedback(client, "Не ок", 3, "11.10.2021");

let driver = new Driver("Прокоп","Pro_kop", "222222");

driver.addService(service);
driver.addFeedback(feedback1);
driver.addFeedback(feedback2);


console.log(driver.checkService("Эконом-класс"));
console.log(driver.getRating());

