
export class Item{
  purchase: string;
  done: boolean;
  price: number;
  number: number;
   
  constructor(purchase: string, price: number, number: number) {
      this.purchase = purchase;
      this.price = price;
      this.number = number;
      this.done = false;
  }
}

