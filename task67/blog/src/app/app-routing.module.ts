import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { AuthGuard } from './core/guard/auth.guard';
import { NotFoundComponent } from './shared';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import ('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: "post",
    loadChildren: () => import ('./post/post.module').then(module => module.PostModule)
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
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
