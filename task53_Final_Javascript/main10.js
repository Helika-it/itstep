//! 10. Дана дата и число K. Определить день недели, который будет через K дней от данной даты.
let k = 1;
let myDate = 'December 31, 2021 23:15:30'

let date = new Date(myDate);
date.setDate(date.getDate() + k);
let weekday = date.getDay();

let options = {
  weekday: 'long'
};
console.log(new Intl.DateTimeFormat('ru-RU', options).format(date));
// понедельник/вторник/...