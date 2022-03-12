import { Component } from '@angular/core';
import { Item } from './Item';
/*
class Item{
  code: number;
  purchase: string;
  done: boolean;
  price: number;
  number: number;
   
  constructor(code: number, purchase: string, price: number, number: number) {
      this.code = code;
      this.purchase = purchase;
      this.price = price;
      this.number = number;
      this.done = false;
  }
}
*/
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})

export class AppComponent { 
    text: string = "";
    price: number = 0;
    number: number = 0;
     
    items: Item[] = 
    [
        { purchase: "Хлеб", done: false, price: 15.9, number: 2 },
        { purchase: "Масло", done: false, price: 60, number: 1  },
        { purchase: "Картофель", done: true, price: 22.6, number: 1  },
        { purchase: "Сыр", done: false, price:310, number: 1  }
    ];

    // добавление
    addItem(text: string, price: number, number: number): void {
         
        if(text==null || text.trim()=="" || price==null || number==null)
            return;
        this.items.push(new Item(text, price, number));

    }

    // редактирование
    
    editItem(text: string, price: number, number: number): void {
         
      text = this.text, price = this.price, number = this.number;
}

    // удаление
    deleteItem(i:number):void{
    this.items.splice(i,1);
  }

  /*
    deleteItem(code: number, text: string, price: number, number: number): void {
      let index:number = this.items.findIndex(function(item:Item) {
        item == item;
      });
      if(index !== -1){
          this.items.splice(index, 1);
    }
  }
  */

    // подсчет суммы покупок
    countPurchase(): number{
      return this.items.filter(function(item){
        return item.done == true;
      }).reduce(function(sum,item){
        return sum + item.price*item.number
      },0)
     } 
}