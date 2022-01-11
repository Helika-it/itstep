//! 7. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие.

let arr = [1, 0, -4, 6, -7, -2, 3, 8];
let A = 5;

console.log(arr);
console.log(A);

let temp1 = [];
let temp2 = [];

arr.forEach(function (item) {

  if (item < A) {
    temp1.push(item);
  }
  if (item > A) {
    temp2.push(item);
  }
  if (item == A)[
    temp2.unshift(A)
  ]

})

arr = [];
arr = temp1.concat(temp2)

console.log(arr);