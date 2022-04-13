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

  newUserId = 3; // ID нового пользователя

  currentUserId = 0; //ID активного пользователя

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

  create(user: User){
    this.data.push(user);
    this.newUserId++;
  }

  remove(id: number):boolean{

    let index = this.data.findIndex(function(item:User){
      return item.id == id;
    });
  
    if(index !== -1)
        return Boolean(this.data.splice(index, 1));
  
    return false;
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
    return true;
  }

  return false;
  };

}
