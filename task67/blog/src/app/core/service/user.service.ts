import { BehaviorSubject } from 'rxjs';
import { User } from '../model';


export class UserService {

  constructor() { }

  data: Array<User> = [
    {
      id: 1,
      name: 'Макс',
      login: "Maks111",
      password: "12345",
      role: 'admin',
    },
    {
      id: 2,
      name: 'Ангелина',
      login: "Angel222",
      password: "23456",
      role: "user",
    },
  ]

  currentUserId = 0; //ID активного пользователя

  currentUserSubject = new BehaviorSubject<User>({} as User);//хранилище
  currentUser = this.currentUserSubject.asObservable();//подписчик

  isAuthSubject = new BehaviorSubject<boolean>(false);//хранилище
  isAuth = this.isAuthSubject.asObservable();//подписчик

  newUserId = 3; // ID нового пользователя


//получение
  getCurrentUserId(){
    return this.currentUserId; // метод выводит id активного пользователя
}

  getCurrentUser(){
    return this.getById(this.currentUserId); // метод выводит объект с id активного пользователя
}

  getNewUserId(){
    return this.newUserId;
}
  get(): Array<User>{
    return this.data;
  }

//добавление
  create(user: User){
    this.data.push(user);
    this.newUserId++;
  }

//удаление
  remove(id: number):boolean{

    let index = this.data.findIndex(function(item:User){
      return item.id == id;
    });
  
    if(index !== -1)
        return Boolean(this.data.splice(index, 1));
  
    return false;
  }

//обновление
  update(user: User):void{
    let index = this.data.findIndex(function(item:User){
      return item.id == user.id;
  });
    this.data[index].name=user.name;
    this.data[index].login=user.login;
    this.data[index].password=user.password;
  }


  getById(id: number): User{
    let index = this.data.findIndex(function(item:User){
        return item.id == id;
    });

    return this.data[index];
  }

  //!Регистрация
signUp(user: User){
     this.create(user);

 };

  //!Авторизация
  signIn(login:string, password:string):boolean{
    let index = this.data.findIndex(function(item:User){
      return item.login == login && item.password == password;
    });

  if(index != -1){
    this.currentUserId = this.data[index].id;
    this.currentUserSubject.next(this.data[index]);//обновление данных в хранилище
    this.isAuthSubject.next(true);//обновление данных в хранилище
    return true;
  }

  return false;
  };

}
