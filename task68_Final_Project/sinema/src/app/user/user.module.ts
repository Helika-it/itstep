import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { FilmRoutingModule } from '../film/film-routing.module';
//import { UserResolverService } from './user-resolver.service';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FilmRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  providers:[
    
  ]
})
export class UserModule { }
