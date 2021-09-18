//map:
//16. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

let arr = [3, 4, 1, 2, 7];

console.log(arr);

arr = arr.map(function (item, index, arr) {
  return item**2;
});

console.log(arr);
