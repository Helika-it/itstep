//9. Разработать функцию для вычисления НОД 2 натуральных чисел.


console.log("9. Разработать функцию для вычисления НОД 2 натуральных чисел.")


//ФУНКЦИЯ ДЛЯ ВЫЧИСЛЕНИЯ НОД 2 НАТУРАЛЬНЫХ ЧИСЕЛ(алгоритм Евклида):
let GallestGeneralDivider;
function checkNODTwoNumbers(a,b) {
  if (a > b){
    if (a % b == 0){
      GallestGeneralDivider = b; 
    } else {
      for (let c = a % b; c != 0;) {
      GallestGeneralDivider = c; 
      a = b;
      b = c;
      c = a % b;
      }
    }
  } else if (a < b) {
    if (b % a == 0) {
      GallestGeneralDivider = a;
    } else {
      for (let c = b % a; c != 0;) {
      GallestGeneralDivider = c; 
      b = a;
      a = c;
      c = b % a;
      }
    }
  } else {
    GallestGeneralDivider = a;
  }
  return GallestGeneralDivider;
}

// Посмотреть алгоритм через вычитание!!!

//=======
let a = 140,
b = 96;

GallestGeneralDivider = checkNODTwoNumbers(a, b);

console.log(`НОД чисел ${a} и ${b} равен: ${GallestGeneralDivider}`);
