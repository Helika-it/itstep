import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    RouterModule
  ]
})
export class HomeModule { }
