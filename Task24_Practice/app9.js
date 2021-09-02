//9. Дан массив из n элементов. Проверить, упорядочен ли массив по возрастанию или убыванию.
console.log("*** 9. Дан массив из n элементов. Проверить, упорядочен ли массив по возрастанию или убыванию.")

const min = 1,
max = 100,
n = 10;

/* РАНДОМНЫЙ МАССИВ 
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

// ПО ВОЗРАСТАНИЮ
//let arr = [1, 3, 4, 8, 10, 11, 25, 30, 36, 47];


// ПО УБЫВАНИЮ
let arr = [47, 36, 30, 25, 11, 10, 8, 4, 3, 1];


console.log(arr);

let descending = false,
ascending = false;

for (let i = 0, k = 1, j = 1; i < n; i++) {
  if (arr[i] >= arr[i + 1]) {
    k = k + 1;
    if (k == n) {
      descending = true;
    }
  } 
  if (arr[i] <= arr[i + 1]) {
    j = j + 1;
    if (j == n) {
      ascending = true;
    }
  }
}
if (descending == true){
  console.log("Массив упорядочен по убыванию");
}
if (ascending == true) {
  console.log("Массив упорядочен по возрастанию");
}
if (descending == false && ascending == false) {
  console.log("Массив не упорядочен");
}




// мой вариант решения:
/*
for (let i = 0, k = 1; i < n; i++) {
  if (arr[i] >= arr[i+1]) {
    k = k + 1;
    if (k == n) {
      console.log("Массив упорядочен по убыванию");
      break;
    }
  } else {
    console.log("Массив не упорядочен по убыванию");
    break;
  }
}

for (let i = 0, k = 1; i < n; i++) {
  if (arr[i] < arr[i+1]) {
    k = k + 1;
    if (k == n) {
      console.log("Массив упорядочен по возрастанию");
      break;
    }
  } else {
    console.log("Массив не упорядочен по возрастанию");
    break;
  }
}
*/
