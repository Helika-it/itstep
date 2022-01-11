//! 8. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.
/*
let number = 123;
console.log(number);
let item_3 = number % 10;
let item_2 = ((number - item_3) / 10) % 10;
let item_1 = (number - item_3 - item_2 * 10) / 100;
let reverse = item_1 + item_2 * 10 + item_3 * 100;
console.log(reverse);
*/
//=== или =======================

function reverseInt(number) {
  let result = ''; // строка

  while (number > 0) { // пока больше 0
    result = result + (number % 10); // к результату постепенно добавляется остаток от деления
    number = parseInt(number / 10); // возвращает целое число
  }

  return result;
}

let number = 1234;
console.log(number);
console.log(reverseInt(number));


//-- работает, но добавляет в конце числа 0? --------
/*
let i = 0;

function recurs(n) {

  i = i * 10 + n % 10; // сохраняем обратное число

  return (n == 0) ? (i / 10 ^ 0) : (recurs(n / 10 ^ 0));
}

let num = 5678;
console.log(num)

recurs(num);
console.log(i)
*/