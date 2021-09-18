//10. Разработать функцию для вычисления НОД элементов массива.
console.log("10. Разработать функцию для вычисления НОД элементов массива.")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:
function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array;
}


//ФУНКЦИЯ ДЛЯ ВЫЧИСЛЕНИЯ НОД 2 НАТУРАЛЬНЫХ ЧИСЕЛ:
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

//ФУНКЦИЯ ДЛЯ ВЫЧИСЛЕНИЯ НОД ЭЛЕМЕНТОВ МАССИВА:

function checkNODElementsArray(arr) {
  let a = arr[0], b;
for (let i = 1; i < arr.length; i++) {
  b = arr[i];
  a = checkNODTwoNumbers(a,b);
  }
  return a;
}

// желательно предусмотреть вариант, когда массив пустой, 1 элемент, 2 элемента.

//=======

let c =[];

c = fillArray(c,3);

console.log(c);


GallestGeneralDividerArray = checkNODElementsArray(c);

console.log(`НОД элементов массива равен: ${GallestGeneralDividerArray}`);

