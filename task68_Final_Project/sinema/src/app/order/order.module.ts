import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { FilmRoutingModule } from '../film/film-routing.module';
import { UserRoutingModule } from '../user/user-routing.module';
import { RouterModule } from '@angular/router';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FilmRoutingModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class OrderModule { }
