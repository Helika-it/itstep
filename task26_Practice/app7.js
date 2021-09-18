//7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.


console.log("7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:
function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array;
}

//ФУНКЦИЯ ПРОВЕРЯЕТ НАЛИЧИЕ НЕКОТОРОГО ЭЛ-ТА В МАССИВЕ:
let k = 25;

function checkElement(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      return true;
    }
  }
  return false;
}

//=======

let c =[];

c = fillArray(c,50);

console.log(c);

if (checkElement(c,k) == true) {
  console.log (`Элемент равный ${k} присутствует в массиве`);
} else {
  console.log (`Элемент равный ${k} отсутствует в массиве`);
}

