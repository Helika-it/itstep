import { Component, OnInit } from '@angular/core';
import { Film, FilmService, User, UserService } from '../core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  films: Film[] = [];
  user: User = {} as User;

  constructor(private filmService: FilmService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getById(this.userService.getCurrentUserId()).subscribe(

      (data) => {
      this.user = data;
      }
    );

    this.filmService.get().subscribe(
      ((data) => this.films = data)
    );
  }

  // let visible:boolean = false;

  // if (user.role == "admin"){
  //   return this.visible = true;
  // }else{
  //   return this.visible = false;
  // }

}
