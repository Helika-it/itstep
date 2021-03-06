import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
//import { UserResolverService } from './user-resolver.service';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: "", component: UserComponent
  },
  {
    path: "add", component: UserFormComponent, pathMatch: 'full'
  }, 
  {
    path: "edit", component: UserFormComponent, pathMatch: 'full'
  }, 
    {
    path: "edit/:id", component: UserFormComponent, 
  },
    {
    path: ":id", component: UserDetailComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
