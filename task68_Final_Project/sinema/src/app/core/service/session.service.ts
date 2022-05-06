import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from '../model';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  data: Array<Session> = [
  // {
  //   id: 1,
  //   date: "04.05.2022",
  //   start: "10:00",
  //   filmId: 1
  // },
  // {
  //   id: 1,
  //   date: "04.05.2022",
  //   start: "14:00",
  //   filmId: 1
  // },
  // {
  //   id: 1,
  //   date: "04.05.2022",
  //   start: "20:00",
  //   filmId: 1
  // }
  ];

  constructor(private http: HttpClient) { }

  currentSessionSubject = new BehaviorSubject<Session>({} as Session);//хранилище
  currentSession = this.currentSessionSubject.asObservable();//подписчик

   //!получение


  get():Observable<any>{
    return this.http​.get("/api/sessions")
  }

  getById(id: number):Observable<any>{
    return this.http.get("/api/sessions/"+id);
  };

  getByFilmId(id:number){
    return this.http.get("/api/sessions/?filmId="+id);
  }



  //! добавление
  create(session: any): Observable<any>{
    return this.http.post(
      "/api/sessions",
      JSON.stringify(session),
      {'headers':{'content-type': 'application/json'}  
    });
  }

  //! удаление
  remove(id: number): Observable<any>{
    return this.http.delete("/api/sessions/"+id);
  }

  //! обновление/изменение/редактирование
  edit(session: Session):Observable<any>{
    return this.http.put(
      "/api/sessions/" + session.id,
      JSON.stringify(session),
      {'headers':{'content-type': 'application/json'}}
    );
  }

}
