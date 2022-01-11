//! 4. Дан массив целых чисел. Найти наибольшую сумму подряд идущих элементов. (Например, [1, 0, -4, 5, 6, -7,-2, 3, 8] -> максимальная сумма: 13)

let arr = [1, 0, -4, 5, 6, -7, -2, 3, 8];
let maxSum = 0;
let sum;

for (let i = 0; i < arr.length; i++) {
  sum = arr[i]
  for (let k = i + 1; k < arr.length; k++) {

    sum = sum + arr[k];

    if (sum > maxSum) {
      maxSum = sum;
    }

  }
}
console.log(maxSum);