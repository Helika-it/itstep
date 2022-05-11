import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { AuthGuard } from './core/guard/auth.guard';
import { AccessDeniedComponent, NotFoundComponent } from './shared';

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
    loadChildren: () => import ('./profile/profile.module').then(module => module.ProfileModule), canActivate: [AuthGuard]
  },
  {
    path: "user",
    loadChildren: () => import ('./user/user.module').then(module => module.UserModule), canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: "order",
    loadChildren: () => import ('./order/order.module').then(module => module.OrderModule)
  },
  {
    path: "auth",
    loadChildren: () => import ('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: "notAccess",
    component: AccessDeniedComponent
  },

  {
    path: "**", component: NotFoundComponent
  }  
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    }
    )],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }