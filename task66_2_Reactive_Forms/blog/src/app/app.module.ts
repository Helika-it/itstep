import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogformComponent } from './blogform/blogform.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ArticleService } from './article.service';
import { ReactiveFormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NoteFoundComponent } from './note-found/note-found.component';
import {RouterModule, Routes} from '@angular/router';
import { AticleDetailComponent } from './aticle-detail/aticle-detail.component'


let routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'list', component: BloglistComponent, pathMatch: 'full'},
  {path: "list/:id", component: AticleDetailComponent},
  {path: 'form', component: BlogformComponent},
  {path: '**', component: NoteFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BlogformComponent,
    BloglistComponent,
    ArticleComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
