import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile-routing.module';
// import { OrderModule } from '../order/order.module';
// import { UserRoutingModule } from '../user/user-routing.module';




@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    // UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // OrderModule
  ],
  providers:[
    //UserResolverService, 
    //ProfileResolverService
  ]
})
export class ProfileModule { }
