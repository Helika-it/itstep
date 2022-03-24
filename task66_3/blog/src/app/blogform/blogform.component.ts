import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';



@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})

export class BlogformComponent implements OnInit {

  myForm : FormGroup; //определяем тип формы
  users: Array<string>;

  constructor(private articleService: ArticleService, private router: Router) {
    this.myForm = new FormGroup({
          
        "link": new FormControl("", [Validators.required, this.checkField]),
        "title": new FormControl("", [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        "date": new FormControl(new Date(), [Validators.required]),
        "preview": new FormControl("", [Validators.required]),
        "author": new FormControl("Выберите автора", [Validators.required]),
        "text": new FormControl("", [Validators.required]),
        "favorite": new FormControl("false", [Validators.required])
    })
    this.users = articleService.getUsers();
   }

  ngOnInit(): void {

  }
  
  addPost():void {

    if(this.myForm.invalid)
      return;

      let articles = this.articleService.get();
      let newId
      if(articles.length == 0)
      newId = 1;
      else
      newId = articles[articles.length - 1].id + 1;

      let article:Article = {
        id: newId,
        link: this.myForm.value.link,
        title: this.myForm.value.title,
        date: this.myForm.value.date,
        preview: this.myForm.value.preview,
        text: this.myForm.value.text,
        author: this.myForm.value.author,
        favorite: this.myForm.value.favorite
      };
          this.articleService.addData(article);
          this.myForm.reset();
          this.router.navigate(["/list"]);
          

  }

  // свой валидатор:

      checkField(control: FormControl): {[s:string]: boolean}|null{

        if(control.value == "no"){
            return {"check": true};
        }

        return null;
    }

    //checkbox

   


}

//

