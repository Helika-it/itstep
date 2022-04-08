import { Comment } from '../model';


export class CommentService {

  constructor() { }

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


  //получить массив 
  getByPostId(id: number){
  return this.data.filter(function(item: Comment){
    return item.postId == id;
  })
}

  //создать (добавить в массив новый коммент + id следующего)
  create(comment: Comment){
    this.data.push(comment);
    this.newCommentId++;
  }

  // получить id нового комментария
  getNewCommentId(){
    return this.newCommentId;
}

  // получать (массив постов)
  get():Array<Comment>{ 
    return this.data;
  }

}
