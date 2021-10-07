import {Animal} from "./animal.js";

class Cat extends Animal {
  
  constructor(food, location, view){
    super(food, location, view);
  }

  makeNoise(){
    console.log(`${this.view} сидит.`);
  }

  eat(){
    console.log(`${this.view} ест на столе.`);
  }


}

export {Cat};