import { Component } from '@angular/core';
import { Tvit } from './tvit.model';
import { TvitService } from './tvit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TvitService]
})
export class AppComponent {
    posts: Tvit[] = [];

    user: string = "";
    text: string = "";

    addPost():void{
        if(this.user != "" && this.text != ""){
            this.posts.push({
                user: this.user,
                date: new Date(),
                text: this.text
            })
            this.user = "";
            this.text = "";
        }

    }
}
