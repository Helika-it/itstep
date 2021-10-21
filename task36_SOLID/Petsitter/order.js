class Order {
  client;
  petsitter;
  service;
  pet;

  constructor(client,petsitter,service,pet){
    this.client = client;
    this.petsitter = petsitter;
    this.service = service;
    this.pet = pet;
  }

}
export {Order};