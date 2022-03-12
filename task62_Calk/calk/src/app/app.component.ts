import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calk';
  num1: number = 5;
  num2: number = 2;

/*
  notNul():boolean{
    if(this.num2==0){
      return false;
    }
    return true;
  }
*/

  getDiv():number | string{
    if(this.num1 == null || this.num2 == null)
        return `Ошибка ввода данных`;
    if(this.num2 == 0)
        return "Деление на ноль"; 

    return this.num1 / this.num2;
}

/*
  get():number | string{
    if(this.num2==0){
      return "На ноль делить нельзя!";
    }
   
  }
  */
}
