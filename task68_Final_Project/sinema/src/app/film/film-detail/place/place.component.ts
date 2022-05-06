import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService, UserService } from 'src/app/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  constructor(private router: Router, private order: OrderService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  chooseTicket: string = "0"
  amountTicket: number = 0;
  // chooseTicketArr: [] = [];

  choose(event: any){

    if (!event.target.classList.contains("booked") && !event.target.classList.contains("legend")) {
      event.target.classList.toggle('active');
      if (event.target.classList.contains("active")){
        this.amountTicket++
        

      }else {
        this.amountTicket--
      }

      console.log(event.target)
      return this.chooseTicket = event.target.getAttribute("value")
    }
  }



    toBook(){
    if (this.amountTicket == 0){
      return
    }
    
/*?*/
     let order = {
    userId: this.userService.currentUserId,
    filmId: "Название фильма",
    sessionId: "Выбранный сеанс",
    chooseTicket: "Место"
    }

    // this.elem.add.class('booked');
    // this.elem.remove.class('active');
    this.router.navigate(["/profile"]);
  }
 
} 


