
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
  sum += salaries[key];
}

console.log(sum);
