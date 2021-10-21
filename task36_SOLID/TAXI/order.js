class Order {
  client;
  driver;
  service;

  constructor(client,driver,service){
    this.client = client;
    this.driver = driver;
    this.service = service;
  }
}
export {Order};