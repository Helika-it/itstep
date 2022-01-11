//! 9. Сделать туже самую задачу из предыдущего пункта для двумерного массива 10х10.

let k = 10;
let arrArr = [];

for (let i = 0; i < k; i++) {

  const min = 1,
    max = 100,
    n = 10;
  let d = [],
    count = 0,
    j;

  for (let j = 0; j < n; j++) {
    d[j] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  arrArr.push(d)
}
console.log(arrArr);

for (let i = 0; i < k; i++) {
  arrArr[i].sort(function (a, b) { //  по возрастанию
    return a - b;
  });
}

let minValues = [];
let maxValues = [];

for (let i = 0; i < k; i++) {
  minValues.push(arrArr[i][0]);
  maxValues.push(arrArr[i][9]);
}

console.log(minValues);
console.log(maxValues);

minValues.sort(function (a, b) { //  по возрастанию
  return a - b;
});
maxValues.sort(function (a, b) { //  по e,sdfyb.
  return b - a;
});

console.log(minValues);
console.log(maxValues);
let minValue = minValues[0];
let maxValue = maxValues[0];


console.log(`Разница составляет: ${maxValues[0] - minValues[0]}`);