import { Component, OnInit} from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';


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

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {

  }
  
  enterPost():void {
      if(this.link == "" || this.title == "" || this.preview == "" || this.date == "" || this.text == "" || this.user == "")
          return;

      let article = new Article(
            this.link,
            this.title,
            this.date,
            this.preview,
            this.text,
            this.user,
            false
          );

      this.link = "";
      this.title = "";
      this.date = "";
      this.preview = "";
      this.text = "";
      this.user = "";
  

  this.articleService.addData(article);

  }

}