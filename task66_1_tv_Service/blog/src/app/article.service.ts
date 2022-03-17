import { Article } from './article.model';


export class ArticleService {

  constructor() { }

  data: Article[] = [{
    link: "https://avatars.mds.yandex.net/get-ynews/2356057/1e66c80b3a9ac0444691a3ecf635d665/400x200", 
    title: "Вышел тизер сиквела «Кота в сапогах» с датой релиза трейлера", 
    date: "2022-03-03", 
    preview: "Через восемь дней ждите трейлер «Кота в сапогах 2: Последнее желание», — сказано в описании к ролику. ...", text: "Через восемь дней ждите трейлер «Кота в сапогах 2: Последнее желание», — сказано в описании к ролику. ...", 
    user: "Автор поста",
    favorite: false
  }];

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
}
