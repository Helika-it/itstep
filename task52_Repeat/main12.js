//! 12. Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:
//! - выводит fizz вместо чисел, кратных 3;
//! - выводит buzz вместо чисел, кратных 5;
//! - выводит fizzbuzz вместо чисел, кратных и 3, и 5.

printNum(30)

// ФУНКЦИЯ
function printNum(num) {
  for (let i = 1; i <= num; i++) {
    if ((i % 3 == 0) && (i % 5 != 0)) {
      console.log('fizz')
    } else if ((i % 5 == 0) && (i % 3 != 0)) {
      console.log('buzz')
    } else if ((i % 5 == 0) && (i % 3 == 0)) {
      console.log('fizzbuzz')
    } else {
      console.log(i)
    }

  }
}