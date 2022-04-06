import { Post } from '../model';

export class PostService {

  constructor() { }

  data: Post[] = [
    {
    id: 1,
    link: "https://avatars.mds.yandex.net/get-ynews/2356057/1e66c80b3a9ac0444691a3ecf635d665/400x200", 
    title: "Вышел тизер сиквела «Кота в сапогах» с датой релиза трейлера", 
    date: "2022-03-03", 
    preview: "Через восемь дней ждите трейлер «Кота в сапогах 2: Последнее желание», — сказано в описании к ролику. ...", text: "«Кот в сапогах» вышел в октябре 2011 года. В 2012 году вышел 13-минутный короткометражный фильм «Кот в сапогах: Три Чертёнка». При этом полнометражное продолжение застряло в производственном аду из-за переписывания сценария и корпоративной реструктуризации. В прошлом году официально объявили, что сиквел выйдет осенью 2022 года. Сюжет расскажет о поисках Котом мифического Последнего желания, чтобы восстановить свои девять жизней после потери восьми. Антонио Бандерас вернётся к главной роли.", 
    userId: 1
    }
  ];

  // создавать (был: addData)
  create(post: Post){ 
    this.data.push(post);
  }

  // получать (массив постов)
  get():Array<Post>{ 
    return this.data;
  }

  // удаление
  remove(post: Post):boolean{ 

      let index = this.data.indexOf(post);

      if(index !== -1)
          return Boolean(this.data.splice(index, 1));

      return false;
  }

  // 
  getById(id: number): Post{
    let index = this.data.findIndex(function(item:Post){
        return item.id == id;
    });

    return this.data[index];
  }

    // обновлять
  update(post: Post):void{ 
      //
  }

}
