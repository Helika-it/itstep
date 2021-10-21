import {Driver} from "../model/driver.js";

class DriverController{

  static create(name, login, password, tax) {
    let driver = new Driver(name, login, password, tax);
    console.log(`Добавили водителя.`);
    return driver;
  }

  static addReview (driver, review) {
    driver.addReview(review);
    console.log(`Прикрепили отзыв к водителю.`);
  }
  static addCar (driver, car) {
    driver.addCar(car);
    console.log(`Прикрепили машину к водителю.`);
  }
}
export{DriverController};