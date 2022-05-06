import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmRoutingModule } from './film-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from '../user/user-routing.module';
import { PlaceComponent } from './film-detail/place/place.component';
import { SessionComponent } from './film-detail/session/session.component';
import { OrderModule } from '../order/order.module';



@NgModule({
  declarations: [
    FilmComponent,
    FilmDetailComponent,
    FilmFormComponent,
    SessionComponent,
    PlaceComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule, 
    OrderModule
  ],
  providers:[]
})
export class FilmModule { }
