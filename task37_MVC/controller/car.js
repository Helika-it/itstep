import {Car} from "../model/car.js";

class CarController{

  static create(model, number, color, comfort, hasBabyChair, capacity) {
    let newCar = new Car(model, number, color, comfort, hasBabyChair, capacity);
    console.log(`Создали машину.`);
    return newCar;
  }
}

export {CarController};