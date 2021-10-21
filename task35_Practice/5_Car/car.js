class Car {
  carClass;
  engine;
  driver;
  marka;

  constructor(carClass,engine,driver,marka){
    this.carClass = carClass;
    this.engine = new Engine();
    this.driver = new Driver();
    this.marka = marka;
  }
  start() {}
  stop() {}
  turnRight() {}
  turnLeft() {}
  toString() {}

}
export {Car};