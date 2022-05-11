import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService, OrderService, SessionService, UserService } from './service';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService, 
    FilmService,
    SessionService,
    OrderService,
    AuthGuard,
    AdminGuard
  ]
})
export class CoreModule { }
