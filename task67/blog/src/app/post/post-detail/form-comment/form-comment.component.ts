import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService, PostService, UserService, Comment } from 'src/app/core';

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.scss']
})

export class FormCommentComponent implements OnInit {

  myForm: FormGroup; //определяем тип формы
  comment: Comment = {} as Comment;

  @Input()
  postId: number =0;

  constructor(private postService: PostService, private router: Router, private userService: UserService, private commentService: CommentService) { 

    this.myForm = new FormGroup({
      "text": new FormControl("", [Validators.required]),
    })
    this.userService.getCurrentUserId();
  }

  ngOnInit(): void {
  }

  addComment():void{
    if(this.myForm.invalid)
        return;

        let newCommentId = this.commentService.getNewCommentId();
        this.comment = {
          id: newCommentId,
          userId: this.userService.getCurrentUserId(),
          postId: this.postId,      
          date: (new Date()).toDateString(),
          text: this.myForm.value.text
        }

        this.commentService.create(this.comment); //если форма валидна добавляем комментарий в массив комментариев
        this.myForm.reset(); // очистка формы
        
  }

}
