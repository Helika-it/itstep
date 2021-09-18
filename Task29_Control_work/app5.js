// 5. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений.


let arr1 = [1, 2, 4];
console.log(arr1);

let arr2 = [5, 7, 9];
console.log(arr2);

let arr3 = [8, 6, 3];
console.log(arr3);

let arr  = arr1.concat(arr2).concat(arr3);
console.log(arr);

arr.sort();

console.log(arr);


//------ИЛИ ТОЖЕ:-----------

/*
let arr1 = [1, 2, 4];
console.log(arr1);

let arr2 = [5, 7, 9];
console.log(arr2);

let arr3 = [8, 6, 3];
console.log(arr3);

let arr  = (arr1.concat(arr2).concat(arr3)).sort();
console.log(arr);

*/
