import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  articles: Article[] = [];
  constructor(private articleService: ArticleService) { }
  
  ngOnInit(): void {
    this.articles = this.articleService.get();
  }

}
