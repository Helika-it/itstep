//!1. Создайте пустой объект user.
//2. Добавьте свойство name со значением John
//3. Добавьте свойство surname со значением Smith.
//4. Измените значение свойства name на Pete.
//5. Удалите свойство name из объекта.

let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

console.log(user);

delete(user.name);

console.log(user);

//-----------------------------------------

/*
6. Пусть дан объект с зарплатами сотрудников
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Найти сумму зарплат с использованием for..in.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for(let key in salaries) {
  sum += key;
  return sum;
}

console.log(sum);
