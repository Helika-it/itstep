import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  data: Post[] = [
    {
    id: 1,
    link: "https://avatars.mds.yandex.net/get-ynews/2356057/1e66c80b3a9ac0444691a3ecf635d665/400x200", 
    title: "Вышел тизер сиквела «Кота в сапогах» с датой релиза трейлера", 
    date: "2022-03-03", 
    preview: "Через восемь дней ждите трейлер «Кота в сапогах 2: Последнее желание», — сказано в описании к ролику. ...", 
    text: "«Кот в сапогах» вышел в октябре 2011 года. В 2012 году вышел 13-минутный короткометражный фильм «Кот в сапогах: Три Чертёнка». При этом полнометражное продолжение застряло в производственном аду из-за переписывания сценария и корпоративной реструктуризации. В прошлом году официально объявили, что сиквел выйдет осенью 2022 года. Сюжет расскажет о поисках Котом мифического Последнего желания, чтобы восстановить свои девять жизней после потери восьми. Антонио Бандерас вернётся к главной роли.", 
    userId: 1
    }
  ];

  //! создавать (был: addData)
  // create(post: Post){ 
  //   this.data.push(post);
  // }
  create(post: any): Observable<any>{
    console.log(post);
    return this.http​.post("/api/posts",
    JSON.stringify(post),
    {'headers':{'content-type': 'application/json'}  });
  }

  //! получать (массив постов)
  // get():Array<Post>{ 
  //   return this.data;
  // }
  get():Observable<any>{
    return this.http​.get("/api/posts")
  }

  //! удаление
  // remove(post: Post):boolean{ 

  //     let index = this.data.indexOf(post);

  //     if(index !== -1)
  //         return Boolean(this.data.splice(index, 1));

  //     return false;
  // }
  remove(id: number): Observable<any>{
    return this.http.delete("/api/posts/"+id);
}

  //!
  // getById(id: number): Post{
  //   let index = this.data.findIndex(function(item:Post){
  //       return item.id == id;
  //   });

  //   return this.data[index];
  // }
  getById(id: number):Observable<any>{
    return this.http.get("/api/posts/"+id);
};

    // обновлять
  update(post: Post):void{ 
      //
  }

  edit(post: Post):Observable<any>{
    return this.http.put(
      "/api/posts/" + post.id,
      JSON.stringify(post),
      {'headers':{'content-type': 'application/json'}}
    );
  }

}
