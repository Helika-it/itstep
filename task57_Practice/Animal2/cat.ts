import {Animal} from "./animal";

class Cat extends Animal {
  
  constructor(food:string, location:string, view:string){
    super(food, location, view);
  }

  makeNoise():void{
    console.log(`${this.view} сидит.`);
  }

  eat():void{
    console.log(`${this.view} ест на столе.`);
  }


}

export {Cat};