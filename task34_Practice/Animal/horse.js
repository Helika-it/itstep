import {Animal} from "./animal.js";

class Horse extends Animal{
    
  constructor(name,food,location){
    super(name,food,location);
  }
  
  makeNoise(){
    console.log(`${this.name} ржёт.`);
  }
    

  eat(){
    console.log(`${this.name} с удовольствием ест ${this.food}.`);
  }

}

export {Horse};