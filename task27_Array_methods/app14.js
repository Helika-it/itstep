//forEach:
//14. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.

let arr = [3, 4, 1, 2, 7];

console.log(arr);

let b = arr.slice();

b.forEach(function (item, index, arr) {
  arr[index] = arr[index]**2;
});

console.log(arr);
console.log(b);



/*---РЕШЕНИЕ:-----------------------------------------

console.log("Task 14:");
let a = [1,2,3,4,5], b = [];


a.forEach(function(item,index,array) {
    b.push(item**2);
});

console.log(b);

------------------------------------------------*/