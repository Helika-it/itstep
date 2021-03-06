import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-aticle-detail',
  templateUrl: './aticle-detail.component.html',
  styleUrls: ['./aticle-detail.component.scss']
})
export class AticleDetailComponent implements OnInit {
  article: any;
  private ArticleSubcription: Subscription;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { 
      this.ArticleSubcription = route.params.subscribe(
        params => this.article = articleService.getById(params['id'])
      );
  }
  ngOnInit(): void {
  }

}
