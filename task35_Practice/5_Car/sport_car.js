import {Car} from "./car.js";

class SportCar {
  speed;


  constructor(carClass,engine,driver,marka,speed){
    super(carClass,engine,driver,marka);
    this.speed = speed;
  }

  toString() {}
}
export {SportCar};