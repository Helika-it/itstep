import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'game';
  num1: number = 0;
  randomNum: number = Math.floor(Math.random()*100)

  get():string{
    if(this.num1==this.randomNum){
      this.randomNum = Math.floor(Math.random()*100);
        return "Угадал!";
    } else if (this.num1>this.randomNum){
      return "Я загадал число поменьше.";
    }else{
      return "Я загадал число побольше.";
    }
   
  }

}
