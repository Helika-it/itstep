import {BigAnimal} from "./bigAnimal.js";

class Dragon extends BigAnimal {

  constructor(size,view){
    super(size,view)
  }

  getSize(){
    console.log(`${this.view} ${this.size}`);
  }
}

export {Dragon};
