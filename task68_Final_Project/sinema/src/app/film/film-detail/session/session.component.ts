import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService, Session, Film, SessionService, UserService } from 'src/app/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})

export class SessionComponent implements OnInit {

   sessions: Session[] = [];
  // film: Film = {} as Film
   films: Film[] = [];
  // session: Session = {} as Session

  // film: any;
  // session: any;

  constructor(private route: ActivatedRoute, private filmService: FilmService, private sessionService: SessionService, private userService: UserService, private router: Router ) { }


  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      if(data["film"])
        this.film = data['film'];
      if(data['session'])
        this.session = data['session'];
    })
  }

  @Input()
  film: any;
  session: any;


  //   ngOnInit(): void {

  //   this.sessionService.getById(this.route.snapshot.params["id"]).subscribe(data =>{
  //     if(data["film"])
  //       this.film = data['film'];
  //       console.log(this.film)
  //     if(data['session'])
  //       this.session = data['session'];
  //       console.log(this.session)
  //   })
  // }
  
  // get(filmId: number): any{
  //   return this.filmService.getById(filmId);
  // } 

  getSession(filmId: number): any{
    return this.sessionService.getById(filmId);
  } 

  
}
