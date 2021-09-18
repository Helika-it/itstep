//? 2. Найти сумму только положительных элементов массива.


let arr = [1, -2, 3, 0, 4, -5, 6, -11];
console.log(`Исходный массив: ${arr}`); 

function func(elem) {
  return elem > 0
};

let arrTemp = arr.filter(func);

console.log(`Массив из положительных элементов: ${arrTemp}`); 

let sum = 0;

arrTemp.forEach(function (item, index, arr) {
  sum = sum + item;
});

console.log(`Сумма элементов массива: ${sum}`);



//! ------ИЛИ тоже:-------------------

/*
let arr = [1, -2, 3, 0, 4, -5, 6, -11];

let arrTemp = arr.filter((elem) => {return elem > 0});


let sum = 0;

arrTemp.forEach((item) => {sum = sum + item});

console.log(`Сумма элементов массива: ${sum}`);
*/

//! ------ИЛИ тоже c reduce:-------------------

/*
let arr = [1, -2, 3, 0, 4, -5, 6, -11];

let arrTemp = arr.filter((elem) => {return elem > 0});


let result = arrTemp.reduce((sum, current) => sum + current,0);

console.log(`Сумма элементов массива: ${result}`);
*/