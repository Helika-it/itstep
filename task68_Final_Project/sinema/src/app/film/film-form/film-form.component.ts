import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film, FilmService } from 'src/app/core';


@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})

export class FilmFormComponent implements OnInit {

  filmAddForm: FormGroup = {} as FormGroup; //определяем тип формы
  film: Film = {} as Film;

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //   if(this.route.snapshot.params['id'] > 0)

  //   this.filmService.getById(this.route.snapshot.params['id']).subscribe(

  //   (data) => {

  //   this.film = data;
    
  //   this.filmAddForm = new FormGroup({
            
  //     "title": new FormControl(this.film.title, [Validators.required]),
  //     "genre": new FormControl(this.film.genre, [Validators.required]),
  //     "duration": new FormControl(this.film.duration, [Validators.required]),
  //     "age": new FormControl(this.film.age, [Validators.required]),
  //     "previev": new FormControl(this.film.previev, [Validators.required]),
  //     "picture": new FormControl(this.film.picture, [Validators.required]),
  //     "start": new FormControl(this.film.start, [Validators.required]),

  //       })
  //     }
  //   );
  
  
  // else{

    this.filmAddForm = new FormGroup({
            
      "title": new FormControl("", [Validators.required]),
      "genre": new FormControl("", [Validators.required]),
      "duration": new FormControl("", [Validators.required]),
      "age": new FormControl("", [Validators.required]),
      "previev": new FormControl("", [Validators.required]),
      "picture": new FormControl("", [Validators.required]),
      "start": new FormControl("", [Validators.required]),

    })
  // }
}

//! добавление

addFilm(){
  if(this.filmAddForm.invalid){
    return;
  }
    
  let data = {
    
    title: this.filmAddForm.controls["title"].value,
    genre: this.filmAddForm.controls["genre"].value,
    duration: this.filmAddForm.controls["duration"].value,
    age: this.filmAddForm.controls["age"].value,
    previev: this.filmAddForm.controls["previev"].value,
    picture: this.filmAddForm.controls["picture"].value,
    start: this.filmAddForm.controls["start"].value,

  } 

  this.filmService.create(data).subscribe(
    // data => {
      
    // }
  );
  this.filmAddForm.reset();
  this.router.navigate(["/film"]);

}

//!редактирование

// editFilm(){
//   if(this.filmAddForm.invalid)
//     return;
          
//   this.film = {
//     id: this.film.id,
//     title: this.filmAddForm.controls["title"].value,
//     genre: this.filmAddForm.controls["genre"].value,
//     duration: this.filmAddForm.controls["duration"].value,
//     age: this.filmAddForm.controls["age"].value,
//     previev: this.filmAddForm.controls["previev"].value,
//     picture: this.filmAddForm.controls["picture"].value,
//     start: this.filmAddForm.controls["start"].value
//   }
  
//   this.filmService.edit(this.film).subscribe();
//   this.filmAddForm.reset();
//   this.router.navigate(["/film"]);

// }

}
