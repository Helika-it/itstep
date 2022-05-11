import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film, FilmService, OrderService, SessionService, User, UserService } from 'src/app/core';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  film: Film = {} as Film;

  constructor(private route: ActivatedRoute, private filmService: FilmService, private sessionService: SessionService, private orderService: OrderService, private router: Router) { }


  ngOnInit(): void {

    this.filmService.getById(this.route.snapshot.params["id"]).subscribe(
      (data) => {
      this.film = data;
      console.log(this.film);
    }
    );
  }

    get(filmId: number): any{
    return this.filmService.getById(filmId);
  } 

}
