import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService, UserService } from './service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserService, FilmService]
})
export class CoreModule { }
