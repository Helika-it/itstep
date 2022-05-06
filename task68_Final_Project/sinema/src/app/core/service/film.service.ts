import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film } from '../model';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  data: Array<Film> = [
    // {
    //   id:1,
    //   title: "Первый Оскар",
    //   genre: "военный, история, драма",
    //   duration: "2 ч 5 мин",
    //   age: "12+",
    //   previev: "1941 год. Двадцатилетние студенты-операторы Лев Альперин и Иван Майский соперничают за звание лучшего оператора курса и за любовь красавицы Юны с актерского факультета. Когда начинается эвакуация, они втроем отказываются уезжать и отправляются на фронт: Юне предстоит выступать в концертной бригаде, а Иван и Лев становятся военными кинооператорами. Их соперничество продолжается и здесь, но испытания и ужасы войны, мужество и подвиги советских солдат, свидетелями которых они становятся, меняют их взгляды на творчество и жизнь. Только благодаря этому им удается снять кадры, которые войдут в историю…",
    //   picture: "https://portal.silverscreen.by:8448/meadiaStorage/bin/system/cinema/eventsphoto/medium/8710.JPEG",
    // start: "21 апреля 2022"
    // },
  ]

  constructor(private http: HttpClient) { }

  currentFilmSubject = new BehaviorSubject<Film>({} as Film);//хранилище
  currentFilm = this.currentFilmSubject.asObservable();//подписчик

   //!получение



  get():Observable<any>{
    return this.http​.get("/api/films")
  }

  getById(id: number):Observable<any>{
    return this.http.get("/api/films/"+id);
  };



  //! добавление
  create(film: any): Observable<any>{
    return this.http.post(
      "/api/films",
      JSON.stringify(film),
      {'headers':{'content-type': 'application/json'}  
    });
  }

  //! удаление
  remove(id: number): Observable<any>{
    return this.http.delete("/api/films/"+id);
  }

  //! обновление/изменение/редактирование
  edit(film: Film):Observable<any>{
    return this.http.put(
      "/api/films/" + film.id,
      JSON.stringify(film),
      {'headers':{'content-type': 'application/json'}}
    );
  }

}
