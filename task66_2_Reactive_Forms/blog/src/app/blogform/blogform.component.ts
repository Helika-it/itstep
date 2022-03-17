import { Component, OnInit} from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})



export class BlogformComponent implements OnInit {

  myForm : FormGroup;

  constructor(private articleService: ArticleService) {
    this.myForm = new FormGroup({
          
        "link": new FormControl("", Validators.required),
        "title": new FormControl("", Validators.required),
        "date": new FormControl("", Validators.required),
        "preview": new FormControl("", Validators.required),
        "user": new FormControl("", Validators.required),
        "text": new FormControl("", Validators.required)
    });
   }

  link: string = "";
  title: string = "";
  date: string = "";
  preview: string = "";
  text: string = "";
  user: string = "";



  ngOnInit(): void {

  }
  
  enterPost():void {
      
      let article = new Article(
        this.myForm.value.link,
        this.myForm.value.title,
        this.myForm.value.date,
        this.myForm.value.preview,
        this.myForm.value.text,
        this.myForm.value.user,
        false
          );

          this.myForm.reset();
  

  this.articleService.addData(article);

  }

}

//

