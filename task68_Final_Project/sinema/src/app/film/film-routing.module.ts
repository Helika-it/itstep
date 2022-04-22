import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmComponent } from './film.component';


const routes: Routes = [
  {
    path: "", component: FilmComponent, pathMatch: 'full'
  },
  {
    path: "form", component: FilmFormComponent, pathMatch: 'full'
  },
  {
    path: ":id", component: FilmDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
