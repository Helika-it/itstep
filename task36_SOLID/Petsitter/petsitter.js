import {User} from "./user.js";
import {Service} from "./service.js";
import {Review} from "./review.js";

class Petsitter extends User{
  services;
  reviews;


  constructor(name,login,password){
    super(name,login,password)
    this.services = [];
    this.reviews = [];
  }

  addReview(review) {
    this.reviews.push(review);
  }

  addService(service) {
    this.services.push(service);
  }

  getRating() {
    let rating = this.reviews.reduce(function(sum,review){
      return sum + review.rating;
    },0);
    if(this.reviews.length > 0)
      return Math.round(rating / this.reviews.length);
    else
      return undefined;
  }

  checkService(name) {
    let service = this.services.find(function(service){
      return service.name == name;
    });
    return service;
  }
}
export {Petsitter};