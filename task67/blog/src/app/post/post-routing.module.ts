import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPostComponent } from './formpost/formpost.component';
import { CommentResolverService } from './post-detail/comment-resolver.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostResolverService } from './post-resolver.service';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: "", component: PostComponent, pathMatch: 'full'
  },
  {
    path: "form", component: FormPostComponent, pathMatch: 'full'
  },
  {
    path: ":id", component: PostDetailComponent, resolve: {post: PostResolverService, comments: CommentResolverService}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
