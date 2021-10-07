import {Animal} from "./animal.js";

class Cat extends Animal{
    
  constructor(name,food,location){
    super(name,food,location);
  }

  makeNoise(){
    console.log(`${this.name} мяучит.`);
  }
    

  eat(){
    console.log(`${this.name} ест только ${this.food}.`);
  }

}

export {Cat};