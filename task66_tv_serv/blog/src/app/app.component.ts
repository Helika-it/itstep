import { Component } from '@angular/core';
import { Card } from './card.model';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BlogService]
})
export class AppComponent {
  title = 'blog';
    
  cards: Card[] = [
    {link: "https://avatars.mds.yandex.net/get-ynews/2356057/1e66c80b3a9ac0444691a3ecf635d665/400x200", title: "Вышел тизер сиквела «Кота в сапогах» с датой релиза трейлера", date: "2022-03-03", preview: "Через восемь дней ждите трейлер «Кота в сапогах 2: Последнее желание», — сказано в описании к ролику. ...", text: "Через восемь дней ждите трейлер «Кота в сапогах 2: Последнее желание», — сказано в описании к ролику. ...", user: "Автор поста"},
    
  ];

  addCard(data: any):void{
    this.cards.push(new Card(data.link, data.title, data.date, data.preview, data.text, data.user));

}
}
