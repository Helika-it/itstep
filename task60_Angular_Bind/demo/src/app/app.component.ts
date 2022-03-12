import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Интерполяция'; // интерполяция
  age:number = 25; // интерполяция
  growth:number = 160; // интерполяция
  link: string = "https://image.shutterstock.com/image-vector/phoenix-logo-template-vector-eps10-260nw-1808325988.jpg" // привязка к атрибуту
  name: string = "Моё имя";
  red = "";

/*
  addAge():void{ // привязка к событию без параметра
    this.age++;
  }
*/
  addAge($event: any):void{ // привязка к событию с параметром
    this.age++;
    console.log($event.target);
  }

  subAge($event: any):void{
    this.age--;
    console.log($event.target);
  }

  addClass():void{
    this.red = "hover";
  }

  removeClass():void{
    this.red = "";
  }
}