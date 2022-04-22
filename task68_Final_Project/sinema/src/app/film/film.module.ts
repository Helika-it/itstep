import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmRoutingModule } from './film-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilmComponent,
    FilmDetailComponent,
    FilmFormComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers:[]
})
export class FilmModule { }
