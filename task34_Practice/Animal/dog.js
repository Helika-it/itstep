import {Animal} from "./animal.js";

class Dog extends Animal{
  
  constructor(name,food,location){
    super(name,food,location);
  }

  makeNoise(){
    console.log(`${this.name} лает.`);
  }
    

  eat(){
    console.log(`${this.name} всегда ест ${this.food}.`);
  }

}
export {Dog};