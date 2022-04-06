import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService, UserService } from 'src/app/core';
import { Post, User } from 'src/app/core';


@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.scss']
})
export class FormPostComponent implements OnInit {

    myForm: FormGroup; //определяем тип формы
    
      
    constructor(private postService: PostService, private router: Router, private userService: UserService) {
      this.myForm = new FormGroup({
            
          "link": new FormControl("", [Validators.required]),
          "title": new FormControl("", [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
          "date": new FormControl(new Date(), [Validators.required]),
          "preview": new FormControl("", [Validators.required]),
          "text": new FormControl("", [Validators.required]),
          
      })
      this.userService.getCurrentUserId();

     }
  
    ngOnInit(): void {
    }


    
    addPost():void {
  
      if(this.myForm.invalid)
        return;
  
        let posts = this.postService.get();
        let newId
        if(posts.length == 0)
        newId = 1;
        else
        newId = posts[posts.length - 1].id + 1;
  
        let post:Post = {
          id: newId,
          link: this.myForm.value.link,
          title: this.myForm.value.title,
          date: this.myForm.value.date,
          preview: this.myForm.value.preview,
          text: this.myForm.value.text,
          userId: this.userService.getCurrentUserId(),
        };

        this.postService.create(post); //если форма валидна добавляем пост в массив постов
        this.myForm.reset(); // очистка формы
        this.router.navigate(["/post"]); // переход на страницу с постами
            
  
    }

/*
    getUserName(userId: number): string{
      return this.userService.getById(userId)?.name;
    } 
*/

}
