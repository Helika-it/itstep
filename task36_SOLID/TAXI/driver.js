import {User} from "./user.js";
import {Service} from "./service.js";
import {Feedback} from "./feedback.js";

class Driver extends User{
  services;
  feedbacks;


  constructor(name,login,password){
    super(name,login,password)
    this.services = [];
    this.feedbacks = [];
  }

  addService(service){
    this.services.push(service);
}

  addFeedback(feedback) {
    this.feedbacks.push(feedback);
  }

  getRating() {
    let rating = this.feedbacks.reduce(function(sum,feedback){
      return sum + feedback.rating;
    },0);
    if(this.feedbacks.length > 0)
      return console.log(`Рейтинг водителя ${this.name} = ${Math.round(rating / this.feedbacks.length)}.`);
    else
      return undefined;
  }

  checkService(name){
    let service = this.services.find(function(service){
        return service.name == name;
    }); 
    return service;
}
}
export {Driver};