import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {

  link: string = "";
  title: string = "";
  date: string = "";
  preview: string = "";
  text: string = "";
  user: string = "";

  @Output() 
  onClick = new EventEmitter<{link: string, title: string, date: string, preview: string, user: string}>();
  
  enterPost($event: any) {


      if(this.link == "" || this.title == "" || this.preview == "" || this.date == "" || this.text == "" || this.user == "")
          return;

      let data: any = {link: this.link, title: this.title, date: this.date, preview: this.preview, text: this.text, user: this.user}; //!

      this.onClick.emit(data); //!

      this.link = "";
      this.title = "";
      this.date = "";
      this.preview = "";
      this.text = "";
      this.user = "";
  }

  constructor() { }

  ngOnInit(): void {

  }

}