// Массив обратный.
/*
console.log("Массив (Обратный реверс)")

const min = 1, max = 100, n = 10;
let d = [], count = 0, j;

for (let j = 0; j < n; j++){
  d[j] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(d);

let b = [], i = 0 ;

for(let i = 10, k = 0; k <= n; i--, k++) {
  b[k] = d[i];
}

console.log(`Обратный массив ${b}`);
*/
// 2 способ

// Массив обратный.
/*
console.log("Массив (Обратный реверс)")

const min = 1, max = 100, n = 10;
let d = [], count = 0, i;

for (let i = 0; i < n; i++){
  d[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(d);

b = d;
b.reverse();

console.log(`Обратный массив ${d}`);
*/


// ==== "Ряд Тейлора для экспоненты"

for(let x = 2, E = 0.0001, i = 0, k = 1, sum = x; sum = sum + ((x ** i) / k); ((x ** i) / k) < E; i++, k = k * i);

console.log((x ** i) / k);
console.log(sum);
