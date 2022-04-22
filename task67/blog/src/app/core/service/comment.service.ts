import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comment } from '../model';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http: HttpClient) { }

  data: Array<Comment> = [
    {
      id: 1,
      userId: 2,
      postId: 1,
      date: "2022-03-27",
      text: "Хорошая статья"
    },
    {
      id: 2,
      userId: 1,
      postId: 1,
      date: "2022-03-28",
      text: "Я старался"
    },
  ]

  newCommentId = 3 // ID нового комментария

  currentCommentsSubject = new BehaviorSubject<Comment>({} as Comment);//!хранилище
  currentComments= this.currentCommentsSubject.asObservable();//!подписчик

  //получить массив комментариев по id поста
  getByPostId(id: number){
  return this.data.filter(function(item: Comment){
    return item.postId == id;
  })
}



  //!создать (добавить в массив новый коммент + id следующего)
  // create(comment: Comment){

  //   this.data.push(comment);
  //   this.newCommentId++;
    
  //   //this.currentCommentsSubject.next(); //?обновление данных в хранилище
  // }
  create(comment: any): Observable<any>{
    console.log(comment);
    return this.http.post("/api/comments",
    JSON.stringify(comment),
    {'headers':{'content-type': 'application/json'}  });
  }


  // получить id нового комментария
  getNewCommentId(){
    return this.newCommentId;
}

  // получать (массив comments)
  // get():Array<Comment>{ 
  //   return this.data;
  // }
  get():Observable<any>{
    return this.http​.get("/api/comments")
  }

}
