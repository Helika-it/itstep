//! 10. Написать функцию, которая проверяет 2 числа на дружественность (2 числа называются дружественными, если сумма делителей этих чисел, не влчючая сами числа, равны).

function checkTwoNumbers(a, b) {

  let sum1 = findSumDividersNumbers(a);
  let sum2 = findSumDividersNumbers(b);

  console.log(sum1);
  console.log(sum2);

  if (sum1 == sum2) {
    console.log(`Числа ${a} и ${b} дружественные`);
    return true
  }
  console.log(`Числа ${a} и ${b} не дружественные`);
  return false

}

function findSumDividersNumbers(num) {

  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (!(num % i)) {
      sum += i;
    }
  }
  return sum
}

checkTwoNumbers(5, 4)