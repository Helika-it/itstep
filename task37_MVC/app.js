import {ClientController} from "./controller/client.js";
import {CarController} from "./controller/car.js";
import {DriverController} from "./controller/driver.js";
import {OrderController} from "./controller/order.js";

let client = ClientController.create("Вася", "nvidj", "12345");

let car = CarController.create("BMV", "B2211tt", "red", "business", true, 3);

let driver = DriverController.create("Иван", "taxivan", "444444", 10);
DriverController.addCar(driver, car);

let request = ClientController.createRequest(client,40,"business", false, 2, "");

let order = OrderController.create(driver, request);
console.log(order);