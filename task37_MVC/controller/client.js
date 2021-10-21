import {Client} from "../model/client.js";
import {Review} from "../model/review.js";
import { Request } from "../model/request.js";

class ClientController{
  static create(name, login, password) {
    let newClient = new Client(name, login, password);
    return newClient;
  }

  static update(client, name, login, password) {
    client.name = name;
    client.login = login;
    client.password = password;

    return client;
  }

  static createReview(client, text, date, rating){
    let review = new Review (client, text, date, rating);
    console.log(`Создали отзыв.`);
    return review;
  }

  static createRequest(client, pathLenght, comfort, hasBabyChair, capacity, comment){
    let newRequest = new Request(client, pathLenght, comfort, hasBabyChair, capacity, comment);
    console.log(`Создали запрос.`);
    return newRequest;
  }
  
}
export{ClientController};

/*
  static delete(client){
    console.log(`Удалили клиента.`);
    delete client;
  }
*/
