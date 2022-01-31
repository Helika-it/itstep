import {Animal} from "./animal";

class Horse extends Animal {
  
  constructor(food:string, location:string, view:string){
    super(food, location, view);
  }

  makeNoise():void{
    console.log(`${this.view} быстро скачет.`);
  }

  eat():void{
    console.log(`${this.view} ест много.`);
  }

}

export {Horse};