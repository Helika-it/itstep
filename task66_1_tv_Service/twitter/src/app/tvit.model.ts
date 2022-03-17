export class Tvit {
  user: string;
  date: Date;
  text: string;

  constructor(user: string, date: Date,  text: string){
    this.user = user;
    this.date = date;
    this.text = text;
  }
}