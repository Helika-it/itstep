// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

let date = '2025-12-31';

let a = [];

a = (date.split('-') ); 

a.reverse();

console.log(a);

let dateRev = a.join('.');

console.log(dateRev);

//---------------------------

dateRev = date.split('-').reverse().join('.');

console.log(dateRev);