import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService, UserService } from 'src/app/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      if(data["post"])
        this.post = data['post'];
      if(data['comments'])
        this.comments = data['comments'];
    })
  }

  @Input()

  post: any;
  comments: any;


  constructor(private postService: PostService, private route: ActivatedRoute, private userService: UserService, private router: Router ) { 
  }

      
      getUserName(userId: number): string{
        return this.userService.getById(userId)?.name;
      }  

  }
