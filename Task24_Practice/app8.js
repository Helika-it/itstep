//8. Дан массив из n элементов и число k < n. Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.
console.log("*** 8. Дан массив из n элементов и число k < n. Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.")

const min = 1,
max = 100,
n = 10;

let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arr);

let k = 5;

for(let i = 0; i < n; i++) {
  if (k < n && i == k) {
    arr[i] = arr[i+1];
    k++;
  }
}
console.log(arr);





//9. Дан массив из n элементов. Проверить, упорядочен ли массив по возрастанию или убыванию.
//10. Дан массив из n элементов. Удалить все повторяющие элементы (удалить и сдвинуть следующие за ним).

