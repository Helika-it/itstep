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
    {date: "2022-03-03", name: "На курсы", text: "В ШАГ к 18:30"},
    {date: "2022-03-08", name: "Выходной", text: "В гости"},
    {date: "2022-03-01", name: "Первый день весны", text: "Не забыть всех поздравить"},
    {date: "2022-03-07", name: "На курсы", text: "В ШАГ к 18:30"},
  ];

  addSticker(data: any):void{
    this.stickers.push(new Sticker(data.date, data.name, data.text));

}
}
