class Review { //отзывы
  client;
  text;
  rating;
  date;

  constructor(client,text,rating,date){
    this.client = client;
    this.text = text;
    this.rating = rating;
    this.date = date;
  }
}
export {Review};