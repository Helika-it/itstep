import { Component } from '@angular/core';
import { Player } from './Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sities';
  //
  player1: Player = new Player("Вася");
  player2: Player = new Player("Петя");
  //
  city: string = "Витебск";
  letter: string = "любую";
  lastLetter: string = "";
  current1: boolean = true;
  current2: boolean = false;
 

  addCity($event: any):void{
    if($event.keyCode != 13)
        return;
   
    if(this.player1.cities.length == 0){
        this.player1.cities.push(this.city);
        this.current1 = false;
        this.current2 = true;
        this.lastLetter = this.city[this.city.length-1].toLowerCase();
          if(this.lastLetter != 'ё' && this.lastLetter != 'ь' && this.lastLetter != 'ъ' && this.lastLetter != 'ы') {
            this.letter = this.city[this.city.length-1].toLowerCase();
          } else{
            this.letter = this.city[this.city.length-2].toLowerCase();
          }
        this.city = "";
        return;
    }

    let firstLetter = this.city[0].toLowerCase(); 
       
    if(this.letter != firstLetter || !this.checkCity(this.city)){
        return;
    }

    this.lastLetter = this.city[this.city.length-1].toLowerCase();
          if(this.lastLetter != 'ё' && this.lastLetter != 'ь' && this.lastLetter != 'ъ' && this.lastLetter != 'ы') {
            this.letter = this.city[this.city.length-1].toLowerCase();
          } else{
            this.letter = this.city[this.city.length-2].toLowerCase();
          }
          
    if(this.current1){
        this.player1.cities.push(this.city);
        this.current1 = false;
        this.current2 = true;
    } else {
        this.player2.cities.push(this.city);
        this.current1 = true;
        this.current2 = false;
    }
    this.city = "";
}

checkCity(city:string): boolean{
    if(this.player1.cities.includes(city) || this.player2.cities.includes(city))
        return false;
    
    return true;
}
}
