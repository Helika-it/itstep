export class Article {
  link: string;
  title: string;
  date: string;
  preview: string;
  text: string;
  user: string;
  favorite: boolean;
  

  constructor(link: string, title: string, date: string, preview: string, text: string, user: string, favorite: boolean){
      this.link = link;
      this.title = title;
      this.date = date;
      this.preview = preview;
      this.text = text;
      this.user = user; 
      this.favorite = favorite;   
  }
}
