//? 9. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего арифметического значения всех элементов массива.


let arr = [1,3,6,4,3,3,5,6];

console.log(arr);

//Находим Среднее арифметическое элементов массива
let sum = 0;

arr.forEach((item) => {sum = sum + item}); //Сумма эл-тов

let theAverageArithmetic = (sum/(arr.length));

console.log(`Среднее арифметическое элементов массива: ${theAverageArithmetic}`);

// Сравниваем элементы со ср.арифм.массива
let newArr = arr.filter(elem => elem > theAverageArithmetic);

console.log("Новый массив:");
console.log(newArr);

//!--------с помощью .reduce: -----------------

/*
let h = [1,3,6,4,3,3,5,6];

console.log(h);

let avgH = h.reduce(function (avg,item) {
  avg += item;
  return avg;
}, 0);
avgH /= h.length;
let I = h.filter(function(item) {
  return item > avgH;
})
console.log(I);
*/