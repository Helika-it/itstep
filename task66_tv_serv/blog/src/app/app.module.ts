import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogformComponent } from './blogform/blogform.component';
import { BloglistComponent } from './bloglist/bloglist.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogformComponent,
    BloglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
