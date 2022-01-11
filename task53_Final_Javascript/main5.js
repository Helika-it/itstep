//! 5. Дано 2 массива и число K. Найти по 1 числу из каждого массива, которые дадут наиближайшую сумму к числу К.


let arr1 = [36, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 20, 9, 10, 3, 1];
let k = 21;


let a; // число из первого массива
let b; // второго
let sum = 0; // текущая сумма
let shortestAmount; // наиближайшая сумма
let difference; // разница 


for (let i = 0; i < arr1.length; i++) {

  for (let j = 0; j < arr2.length; j++) {

    sum = arr1[i] + arr2[j];

    if (k == sum) { // если сумма равна k
      a = arr1[i];
      b = arr2[j];
      shortestAmount = sum;
      difference = 0;

    } else { // если сумма не равна k

      if (k < sum) { // больше
        let difference1 = sum - k;
        if ((difference > difference1) || (difference == undefined)) {
          a = arr1[i];
          b = arr2[j];
          shortestAmount = sum;
          difference = difference1;
        }
      }
      if (k > sum) { // меньше
        let difference1 = k - sum;
        if ((difference > difference1) || (difference == undefined)) {
          a = arr1[i];
          b = arr2[j];
          shortestAmount = sum;
          difference = difference1;
        }
      }
    }
  }
}
console.log(`При k равном: ${k};  Наиближайшая сумма = ${shortestAmount}; Числа: ${a} и ${b}`);