export class Card {
  link: string;
  title: string;
  date: string;
  preview: string;
  text: string;
  user: string;

  constructor(link: string, title: string, date: string, preview: string, text: string, user: string,){
      this.link = link;
      this.title = title;
      this.date = date;
      this.preview = preview;
      this.text = text;
      this.user = user;
  }
}
