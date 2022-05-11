import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<Array<User>>(this.url);
}


  data: Array<User> = [
    {
      id: 1,
      name: 'Макс',
      login: "Maks111",
      password: "123456",
      role: 'admin',
    },
    {
      id: 2,
      name: 'Анатолий',
      login: "Tol111",
      password: "111111",
      role: "user",
    },    {
      id: 3,
      name: 'Юлий',
      login: "Yul111",
      password: "111111",
      role: "user",
    },    {
      id: 4,
      name: 'Елена',
      login: "Len111",
      password: "111111",
      role: "user",
    },
    {
      id: 5,
      name: 'Ангелина',
      login: "Angel111",
      password: "23456",
      role: "user",
    },
  ]


  currentUserId = 0; //ID активного пользователя

  currentUserSubject = new BehaviorSubject<User>({} as User);//хранилище
  currentUser = this.currentUserSubject.asObservable();//подписчик
  
  isAuthSubject = new BehaviorSubject<boolean>(false);//хранилище
  isAuth = this.isAuthSubject.asObservable();//подписчик
  


   //!получение

  getCurrentUserId(){
    return this.currentUserId; // метод выводит id активного пользователя
  }

  getCurrentUser(){
    return this.getById(this.currentUserId); // метод выводит объект с id активного пользователя
  }



  get():Observable<any>{
    return this.http​.get("/api/users")
  }

  getById(id: number):Observable<any>{
    return this.http.get("/api/users/"+id);
  };



  //! добавление
  create(user: any): Observable<any>{
    return this.http.post(
      "/api/users",
      JSON.stringify(user),
      {'headers':{'content-type': 'application/json'}  
    });
  }

  //! удаление
  remove(id: number): Observable<any>{
    console.log(id)
    return this.http.delete("/api/users/"+id);
  }

  //! обновление/изменение/редактирование
  edit(user: User):Observable<any>{
    return this.http.put(
      "/api/users/" + user.id,
      JSON.stringify(user),
      {'headers':{'content-type': 'application/json'}}
    );
  }



//!Регистрация
signUp(user: any):any{
  this.create(user).subscribe(
          data => {
        //console.log(data);
      }
  );

};

//!Авторизация
// signIn(login:string, password:string):boolean{

//   //! нужно переписать так, чтобы перебирал не локальный массив данных, а api!
//  let index = this.data.findIndex(function(item:User){
//    return (item.login == login) && (item.password == password);
//  });

//   if(index !== -1){
//   this.currentUserId = this.data[index].id;
//   this.currentUserSubject.next(this.data[index]); //!обновление данных в хранилище
//   this.isAuthSubject.next(true); //!обновление данных в хранилище
//   return true;
//   }

// return false;
// };


//=====================
signIn(login:string, password:string):boolean{

  //! нужно переписать так, чтобы перебирал не локальный массив данных, а api!
 let index = this.data.findIndex(function(item:User){
   return (item.login == login) && (item.password == password);
 });

  if(index !== -1){
  this.currentUserId = this.data[index].id;
  this.currentUserSubject.next(this.data[index]); //!обновление данных в хранилище
  this.isAuthSubject.next(true); //!обновление данных в хранилище
  return true;
  }

return false;
};

//=========================
}
