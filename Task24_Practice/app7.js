//7. Дан массив из n элементов и некоторое число x. Проверить наличие числа x в массиве.
console.log("*** 7. Дан массив из n элементов и некоторое число x. Проверить наличие числа x в массиве.")

const min = 1,
max = 100,
n = 10;

let arr = [];

for(let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arr);

let x = 45, 
k;

for(let i = 0; i < n; i++) {
  if (arr[i] == x) {
    console.log(`Число х = ${x} есть в массиве.`);
    break
  } else {
    console.log(`-`);
  }
}





//8. Дан массив из n элементов и число k < n. Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.
//9. Дан массив из n элементов. Проверить, упорядочен ли массив по возрастанию или убыванию.
//10. Дан массив из n элементов. Удалить все повторяющие элементы (удалить и сдвинуть следующие за ним).

