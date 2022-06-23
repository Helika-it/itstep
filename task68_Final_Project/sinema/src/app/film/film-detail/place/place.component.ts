import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService, OrderService, UserService } from 'src/app/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  constructor(private router: Router, private order: OrderService, private userService: UserService, private route: ActivatedRoute, private film: FilmService) { }

  ngOnInit(): void {
    
  }

  chooseTicket: string = "0"
  amountTicket: number = 0;
  chooseTickets:string [] = [];

  choose(event: any){

    if (!event.target.classList.contains("booked") && !event.target.classList.contains("legend")) {
      event.target.classList.toggle('active');
      if (event.target.classList.contains("active")){
        this.amountTicket++
        
        this.chooseTickets.push()

      }else {
        this.amountTicket--
      }

      return this.chooseTicket = event.target.getAttribute("value")

      // this.chooseTicket = event.target.getAttribute("value");
      // this.chooseTickets.push(this.chooseTicket);

      // return this.chooseTickets
    }
  }



    toBook(){
    if (this.amountTicket == 0){
      return
    }
    
/*?*/
     let order = {
    userId: this.userService.currentUserId,
    filmId: this.film.currentFilm,
    dateId: "Выбранная дата",
    startId: "Выбранное время",
    chooseTicket: this.chooseTicket
    }

    // this.elem.add.class('booked');
    // this.elem.remove.class('active');
    //this.router.navigate(["/profile"]);
  }
 
} 


