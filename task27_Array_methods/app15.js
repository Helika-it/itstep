//forEach:
//15. Дан массив с числами. Найдите сумму этих чисел.

let arr = [3, 4, 1, 2, 7];

console.log(arr);

let sum = 0;

arr.forEach(function (item, index, arr) {
  sum = sum + arr[index];
});

console.log(sum);