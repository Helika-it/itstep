import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { SquareComponent } from './square/square.component';
import { StartPageComponent } from './start-page/start-page.component';
import {AppRoutingModule} from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BoardComponent,
    GameComponent,
    SquareComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
