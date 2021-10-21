import {Car} from "./car.js";

class Lorry {
  carrying;


  constructor(carClass,engine,driver,marka,carrying){
    super(carClass,engine,driver,marka);
    this.carrying = carrying;
  }

  toString() {}
}
export {Lorry};