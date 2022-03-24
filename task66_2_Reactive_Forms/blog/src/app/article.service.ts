import { Article } from './article.model';

export class ArticleService {

  constructor() { }

  data: Article[] = [{
    id: 1,
    link: "https://avatars.mds.yandex.net/get-ynews/2356057/1e66c80b3a9ac0444691a3ecf635d665/400x200", 
    title: "Вышел тизер сиквела «Кота в сапогах» с датой релиза трейлера", 
    date: "2022-03-03", 
    preview: "Через восемь дней ждите трейлер «Кота в сапогах 2: Последнее желание», — сказано в описании к ролику. ...", text: "«Кот в сапогах» вышел в октябре 2011 года. В 2012 году вышел 13-минутный короткометражный фильм «Кот в сапогах: Три Чертёнка». При этом полнометражное продолжение застряло в производственном аду из-за переписывания сценария и корпоративной реструктуризации. В прошлом году официально объявили, что сиквел выйдет осенью 2022 года. Сюжет расскажет о поисках Котом мифического Последнего желания, чтобы восстановить свои девять жизней после потери восьми. Антонио Бандерас вернётся к главной роли.", 
    author: "Канобу",
    favorite: false
  }];

  users: Array<string> = ["Иван", "Роман", "Степан"];

  addData(article:Article) {
    this.data.push(article);
  }
  
  get():Array<Article>{
    return this.data;
}

  remove(article: Article):boolean{

      let index = this.data.indexOf(article);

      if(index !== -1)
          return Boolean(this.data.splice(index, 1));

      return false;
  }

  update(article: Article):void{
      //
  }

  getUsers(): Array<string>{
    return this.users;
  }

  getById(id: number): Article{
    let index = this.data.findIndex(function(item:Article){
        return item.id == id;
    });

    return this.data[index];
}

}
