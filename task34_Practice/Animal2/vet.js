import {Animal} from "./animal.js";

class Vet{
  
  constructor(){
    
  }

  treatAnimal(animals){
    console.log(`${animals.view} ест ${animals.food} ${animals.location}.`);
  }


}

export {Vet};