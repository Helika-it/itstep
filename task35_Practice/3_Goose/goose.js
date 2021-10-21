import {SmallAnimal} from "./smallAnimal.js";

class Goose extends SmallAnimal {

  constructor(size,view){
    super(size,view)
  }

  getSize(){
    console.log(`${this.view} ${this.size}`);
  }
}

export {Goose};
