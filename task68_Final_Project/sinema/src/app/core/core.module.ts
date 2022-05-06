import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService, OrderService, SessionService, UserService } from './service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService, 
    FilmService,
    SessionService,
    OrderService
  ]
})
export class CoreModule { }
