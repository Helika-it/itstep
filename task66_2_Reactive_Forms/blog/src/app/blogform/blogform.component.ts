import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';



@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})

export class BlogformComponent implements OnInit {

  myForm : FormGroup;
  users: Array<string>;

  constructor(private articleService: ArticleService) {
    this.myForm = new FormGroup({
          
        "link": new FormControl("", [Validators.required, this.checkField]),
        "title": new FormControl("", [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        "date": new FormControl(new Date(), [Validators.required]),
        "preview": new FormControl("", [Validators.required]),
        "author": new FormControl("Выберите автора", [Validators.required]),
        "text": new FormControl("", [Validators.required])
    })
    this.users = articleService.getUsers();
   }

  ngOnInit(): void {

  }
  
  addPost():void {
      
    if(this.myForm.invalid)
      return;

      let article:Article = {
        link: this.myForm.value.link,
        title: this.myForm.value.title,
        date: this.myForm.value.date,
        preview: this.myForm.value.preview,
        text: this.myForm.value.text,
        author: this.myForm.value.author,
        favorite: false
      };
          this.articleService.addData(article);
          this.myForm.reset();
          

  }

  // свой валидатор:

      checkField(control: FormControl): {[s:string]: boolean}|null{

        if(control.value == "no"){
            return {"check": true};
        }

        return null;
    }


}

//

