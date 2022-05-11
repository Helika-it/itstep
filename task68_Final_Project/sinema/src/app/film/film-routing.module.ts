import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guard/admin.guard';
import { AuthGuard } from '../core/guard/auth.guard';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmComponent } from './film.component';


const routes: Routes = [
  {
    path: "", component: FilmComponent
  },
  {
    path: "add", component: FilmFormComponent, pathMatch: 'full'
    // , canActivate: [AuthGuard, AdminGuard]
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
