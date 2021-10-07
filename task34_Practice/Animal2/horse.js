import {Animal} from "./animal.js";

class Horse extends Animal {
  
  constructor(food, location, view){
    super(food, location, view);
  }

  makeNoise(){
    console.log(`${this.view} быстро скачет.`);
  }

  eat(){
    console.log(`${this.view} ест много.`);
  }

}

export {Horse};