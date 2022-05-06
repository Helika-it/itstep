import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  {
    path: "", component: AuthComponent    
  },
  {
    path: "signIn", component: SignInComponent, pathMatch: 'full'
  }, 
  {
    path: "signUp", component: SignUpComponent, pathMatch: 'full'
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
