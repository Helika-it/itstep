import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import ('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: "film",
    loadChildren: () => import ('./film/film.module').then(module => module.FilmModule)
  },
  {
    path: "profile",
    loadChildren: () => import ('./profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: "user",
    loadChildren: () => import ('./user/user.module').then(module => module.UserModule)
  },

  {
    path: "**", component: NotFoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }