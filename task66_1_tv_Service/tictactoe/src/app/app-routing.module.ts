import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component';
import { SquareComponent } from './square/square.component';
import { StartPageComponent } from './start-page/start-page.component';

const appRoutes: Routes = [
  
  {path: '', component: StartPageComponent},
  {path: 'game', component: GameComponent},
  {path: 'square', component: SquareComponent},
  {path: 'main', component: MainComponent}
  
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}