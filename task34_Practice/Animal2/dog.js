import {Animal} from "./animal.js";

class Dog extends Animal {
  
  constructor(food, location, view){
    super(food, location, view);
  }

  makeNoise(){
    console.log(`${this.view} бегает и лает.`);
  }

  eat(){
    console.log(`${this.view} ест ${this.food}.`);
  }

}

export {Dog};