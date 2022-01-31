import {Animal} from "./animal";

class Dog extends Animal {
  
  constructor(food:string, location:string, view:string){
    super(food, location, view);
  }

  makeNoise():void{
    console.log(`${this.view} бегает и лает.`);
  }

  eat():void{
    console.log(`${this.view} ест ${this.food}.`);
  }

}

export {Dog};