//! 1. Дана площать квадрата. Найти его периметр.

let squareSquare: number = 100;
let perimeter: number;

perimeter = Math.sqrt(squareSquare) * 4;
console.log(perimeter);

//! 2. Даны длины сторон треугольника - a, b, c. Определить, является ли он разностронним, равнобедренным или равносторонним

let a: number, b: number, c:number;

a = 4;
b = 4; 
c = 5;

if (a == b && a == c && b == c) {
  console.log("Равносторонний");
} else if (a == b || a == c || c == b) {
  console.log("Равнобедренный");
} else {
  console.log("Разносторонний");
}

//! 3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. 

a = 4, b = 2, c = 3;

if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
  console.log("Невозможно");
} else if ( a <= 0 || b <= 0 || c <= 0) {
  console.log("Невозможно");
} else {
  console.log("Возможно");
}

//! 4. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) или пожилой (от 70).

let age:number = 69;

if (age <= 17) {
  console.log (age, "Молодой");
} else if (age > 17 && age < 70) {
  console.log(age, "Взрослый");
}else {
  console.log(age, "Пожилой");
}


//! 5. Вывести в консоль квадраты чисел от 10 до 20.

let n:number = 10;

for (let i:number = 10; i <= 20; i++){
  console.log(n ** 2);
  n += 1;
}

//! 6. Найти сумму первых 20 натуральных чисел кратных 5.

let multiplicity:number = 5; //кратность
let sum:number = 0;

for (let i:number = 1; i <= 20; i++){

  if (i%5 == 0){
    sum = sum + i;
  }

}
console.log(sum);

//! 7. Найти n-число в последовательности Фибоначчи (0, 1, 1, 2, 3, 5, 8 ...).

n = 7; // номер по порядку в последовательности
let k:number = 0; // значение соответствующее номеру
let k1:number = 0 , //первое слагаемое
  k2:number = 1; // второе слагаемое


if (n == 1) {
    k = 0;
  } else if (n == 2){
    k = 1;
  } else {
    for (let i:number = 2; i < n; i++)  {
      k = k1 + k2 ;  
      k1 = k2;      
      k2 = k;       
  }       
} 

console.log(`${n}-е по счету в последовательности число: ${k}.`);

//! 8. Разработать функцию для вычисления НОД 2 натуральных чисел.

//ФУНКЦИЯ ДЛЯ ВЫЧИСЛЕНИЯ НОД 2 НАТУРАЛЬНЫХ ЧИСЕЛ(алгоритм Евклида):

function checkNODTwoNumbers(a:number,b:number):number {

  if (a > b){
    if (a % b == 0){
      GallestGeneralDivider = b; 
    } else {
      for (let c:number = a % b; c != 0;) {
      GallestGeneralDivider = c; 
      a = b;
      b = c;
      c = a % b;
      }
    }
  } else if (a < b) {
    if (b % a == 0) {
      GallestGeneralDivider = a;
    } else {
      for (let c = b % a; c != 0;) {
      GallestGeneralDivider = c; 
      b = a;
      a = c;
      c = b % a;
      }
    }
  } else {
    GallestGeneralDivider = a;
  }
  return GallestGeneralDivider;
}


a = 140,
b = 96;

let GallestGeneralDivider:number = checkNODTwoNumbers(a, b);

console.log(`НОД чисел ${a} и ${b} равен: ${GallestGeneralDivider}`);

//! 9. Дано предложение. Вывести последнее слово в предложении.

let str:string = 'Вывести последнее слово в предложении';

let last:string = str.split(" ").pop();

console.log(last);


//! 10. Дан массив. Найти сумму только положительных элементов массива.

let arr: number[] = [1, -2, 3, 0, 4, -5, 6, -11];

let arrTemp: number[] = arr.filter((elem) => {return elem > 0});


sum = 0;

arrTemp.forEach((item) => {sum = sum + item});

console.log(`Сумма элементов массива: ${sum}`);


//! 11. Дано предложение. Преобразуйте первую букву каждого слова строки в верхний регистр.

str = 'я учу javascript!';
console.log(str);

let newStr:string = str.split(" ").map(elem => elem[0].toUpperCase() + elem.slice(1)).join(" ")

console.log(newStr);


//! 12. Проверить 2 массива на полное совпадение.

let arr1: number[] = [1, 3, 4];
console.log(arr1);

let arr2 : number[]  = [1, 3, 4];
console.log(arr2);


 let result:boolean = arr1.every(function(item:number,index:number):boolean{
    return item == arr2[index];
  });
  console.log(result);


//! 13. Удалить из предложения все знаки препинания (. , : ; ! ? -).

let punct: string =".,:;!?-";
str = 'Пример. предложения, для: удаления; знаков- препинания? всё ГОТОВО!';
console.log(str);

newStr = str.split("").filter(function(item):boolean {
  return punct.indexOf(item) == -1;
}).join("");

console.log(newStr);

//! 14*. Реализовать функцию, которая складывает 2 или 3 числа, которые передаются как параметры (2 или 3 параметра). При этом параметры параметры по-умолчанию использовать нельзя.

//! -- необязательные параметры ----

console.log("Необязательные параметры:");
function additionNumbers (a:number, b:number, c?:number):number {

  if(c){
    return a + b + c;
  } else {
    return a + b;
  }

}
console.log(additionNumbers(1,2));
console.log(additionNumbers(1,2,3));

//! -- перегрузка функций ----

console.log("Перегрузка функций:");
function additionNumbers2 (a:number, b:number):number{
  return a + b;
}

function additionNumbers2 (a:number, b:number, c:number):number{
  return a + b + c;
}

console.log(additionNumbers2(1,2));
console.log(additionNumbers2(1,2,3));
