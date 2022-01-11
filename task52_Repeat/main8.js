//! 8. Создать массив на 100 элементов и заполнить его случайными числами. Найти разницу между максимальным и мнимальными элементами.

const min = 1,
  max = 100,
  n = 100;
let d = [],
  count = 0,
  j;

for (let j = 0; j < n; j++) {
  d[j] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(d);

d.sort(function (a, b) { //  по возрастанию
  return a - b;
});
console.log(d);

console.log(`Разница составляет: ${d[99]-d[0]}`);