import {Animal} from "./animal.js";
import {Dog} from "./dog.js";
import {Cat} from "./cat.js";
import {Horse} from "./horse.js";

class Vet{
  
  treatAnimal(animal){
    console.log(`${animal.name} ест ${animal.food} ${animal.location}.`);
  }
    
}

export {Vet};