import { Component, OnInit } from '@angular/core';
import { Film, FilmService } from '../core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  films: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.get().subscribe(
      ((data) => this.films = data)
    );
  }

}
