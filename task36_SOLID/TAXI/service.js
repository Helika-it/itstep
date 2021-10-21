class Service {
  name;
  price;
  length;

  constructor(name,price,length){
    this.name = name;
    this.price = price;
    this.length = length;
  }
  //! цена за км. Нужно расписывать по уровням комфорта? 
  getFullPrice() {
    return this.price * this.length;
  }
  
}
export {Service};