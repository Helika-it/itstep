import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPostComponent } from './formpost/formpost.component';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostResolverService } from './post-resolver.service';
import { CommentResolverService } from './post-detail/comment-resolver.service';
import { FormCommentComponent } from './post-detail/form-comment/form-comment.component';
import { CommentListComponent } from './post-detail/comment-list/comment-list.component';



@NgModule({
  declarations: [
    FormPostComponent,
    PostComponent,
    PostDetailComponent,
    FormCommentComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers:[PostResolverService, 
    CommentResolverService]

})
export class PostModule { }
