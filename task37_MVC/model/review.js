class Review {
  client;
  date;
  rating;
  text;
  constructor(client, date, rating, text) {
  this.client = client;
  this.date = date;
  this.rate = rating;
  this.text = text;
  }
}
export {Review};