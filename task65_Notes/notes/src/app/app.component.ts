import { Component } from '@angular/core';
import { Sticker } from './sticker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes';
  
  stickers: Sticker[] = [
    {date: "03.03.2022", name: "На курсы", text: "В ШАГ к 18:30"},
    {date: "08.03.2022", name: "Выходной", text: "В гости"},
    {date: "01.03.2022", name: "Первый день весны", text: "Не забыть всех поздравить"},
    {date: "07.03.2022", name: "На курсы", text: "В ШАГ к 18:30"},
  ];

  addSticker(data: any):void{
    this.stickers.push(new Sticker(data.date, data.name, data.text));
    console.log(data.date);
    console.log(data.name);
    console.log(data.text); 
}
}
