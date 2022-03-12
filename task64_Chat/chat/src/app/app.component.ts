import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';
    //
    user1: User = new User("Лена");
    user2: User = new User("Катя");
    //


}
