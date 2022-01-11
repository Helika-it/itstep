//! 6. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, но их нету в 3 массиве.

let arr1 = [1, 6, 9, 8, 15];
let arr2 = [11, 6, 9, 18, 15];
let arr3 = [1, 16, 19, 8, 15];
console.log(arr1);
console.log(arr2);
console.log(arr3);

let arr = arr1.concat(arr2).concat(arr3); // слила массивы
let uniqueArr = []; // для уникальных элементов

arr.forEach(function (item) { // оставила только не повторяющиеся
  if (uniqueArr.includes(item) == false)
    uniqueArr.push(item);
});
console.log(uniqueArr);

uniqueArr.forEach(function (item) {
  if ((arr1.includes(item) == true) && (arr2.includes(item) == true) && (arr3.includes(item) == false)) {
    console.log(item)
  }
  if ((arr1.includes(item) == true) && (arr2.includes(item) == false) && (arr3.includes(item) == true)) {
    console.log(item)
  }
  if ((arr1.includes(item) == false) && (arr2.includes(item) == true) && (arr3.includes(item) == true)) {
    console.log(item)
  }
})