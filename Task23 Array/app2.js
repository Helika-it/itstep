// Массив на 10 случайных чисел. Найти максимальный элемент массива.
console.log("Массив на 10 случайных чисел. Найти максимальный элемент массива.")

const min = 1, max = 100, n = 10;
let d = [], count = 0, j;

for (let j = 0; j < n; j++){
  d[j] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(d);

let maxElement = d[0];
for(let i = 1; i < n; i++){
  if(d[i] > maxElement)
  maxElement = d[i];
}
console.log("Максимальный элемент равен " + maxElement);

