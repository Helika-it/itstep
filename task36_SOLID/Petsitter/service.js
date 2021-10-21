class Service {
  name;
  price;
  time;

  constructor(name,price,time){
    this.name = name;
    this.price = price;
    this.time = time;
  }
  //цена в час
  getFullPrice() {
    return this.price * this.time;
  }

}
export {Service};