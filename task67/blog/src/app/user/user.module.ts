import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { PostRoutingModule } from '../post/post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormUserComponent } from './formuser/formuser.component';
import { UserDetailComponent } from './userdetail/userdetail.component';
//import { UserResolverService } from './user-resolver.service';




@NgModule({
  declarations: [
    UserComponent,
    FormUserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ], 
  providers:[
    //UserResolverService
  ]
})
export class UserModule { }
