// Массив на 10 случайных чисел. Вывести в консоль количество четных чисел.
console.log("Массив на 10 случайных чисел. Вывести в консоль количество четных чисел.")

const min = 1, max = 100, n = 10;
let d = [], count = 0, j;

for (let j = 0; j < n; j++){
  d[j] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(d);

for(let i = 0; i < n; i++){
  if(d[i] % 2 == 0)
  count++;
}
console.log("Количество четных элементов массива равно " +count);

