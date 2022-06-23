import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../model';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable(
//   {
//   providedIn: 'root'
// }
)

export class UserService {

  private url = "http://localhost:3000/api/users";

  currentUserId = 0; //!ID активного пользователя

  private currentUserSubject = new BehaviorSubject<User>({} as User);//хранилище
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());//подписчик
  
  private isAuthSubject = new BehaviorSubject<boolean>(false);//хранилище
  public isAuth = this.isAuthSubject.asObservable();//подписчик

  constructor(
    //private apiService: ApiService,
    private http: HttpClient,
    // private jwtService: JwtService
    ) {}


    // ======================
  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  
  // populate() {
  //   // If JWT detected, attempt to get & store user's info
  //   if (this.jwtService.getToken()) {
  //     this.apiService.get('/user')
  //     .subscribe(
  //       data => this.setAuth(data.user),
  //       err => this.purgeAuth()
  //     );
  //   } else {
  //     // Remove any potential remnants of previous auth states
  //     this.purgeAuth();
  //   }
  // }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    // this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    // this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    // this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    // this.isAuthenticatedSubject.next(false);
  }

  // attemptAuth(type, credentials): Observable<User> {
  //   const route = (type === 'login') ? '/login' : '';
  //   return this.apiService.post('/users' + route, {user: credentials})
  //     .pipe(map(
  //     data => {
  //       this.setAuth(data.user);
  //       return data;
  //     }
  //   ));
  // }


    // Update the user on the server (email, pass, etc)
    
    // update(user): Observable<User> {
    //   return this.apiService
    //   .put('/user', { user })
    //   .pipe(map(data => {
    //     // Update the currentUser observable
    //     this.currentUserSubject.next(data.user);
    //     return data.user;
    //   }));
    // }
// ======================


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
      password: "1111",
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


   //!получение

  getCurrentUserId(){
    return this.currentUserId; // метод выводит id активного пользователя
  }

  // getCurrentUser(){
  //   return this.getById(this.currentUserId); // метод выводит объект с id активного пользователя
  // }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
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


//=====================

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

//=========================


// signIn(login:string, password:string){
//   console.log(login, password);
//   return this.http.get(`/api/users/?login=${login}&password=${password}`).pipe(
//     map(
//       (users:any) => { 
        
//         console.log(users);
//         if((<User[]>users).length > 0){
          
//            this.currentUserSubject.next((<User[]>users)[0]);
//            return true;
//         }
//           return false;
        
//       }
//     )
//   )

// }

// signIn(login:string, password:string){

//   return this.http.get(`/api/users/?login=${login}&password=${password}`).pipe(
//     map(
//       (users:any) => { 
        
//         console.log(users);
//         if((<User[]>users).length > 0){
          
//            this.currentUserSubject.next((<User[]>users)[0])

//         } 
//       }
//     )
//   )

// }

}