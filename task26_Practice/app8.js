//8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и -1 - в противном случае.


console.log("8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и -1 - в противном случае.")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:
function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array;
}

//ФУНКЦИЯ ИЩЕТ ЭЛЕМЕНТ В МАССИВЕ И ВОЗВРАЩАЕТ ЕГО ИНДЕКС, ИЛИ -1, ЕСЛИ ЕГО НЕТ:
let k = 25, 
j = -1;

function checkIndexElement(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      j = i;
      break;  // сделать выход из if. Или можно вставить: return i;
    }
  }
  return j; // а тут: return -1, без создания переменной;
}

//=======

let c =[];

c = fillArray(c,50);

console.log(c);

j = checkIndexElement(c,k);
console.log (j);
