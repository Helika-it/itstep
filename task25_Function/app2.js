// Создать 4 функции : 1. Заполнение массива и суммы элементов массива.
console.log("*** Создать 4 функции")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:

function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return(array);
}

//ФУНКЦИЯ, КОТОРАЯ УВЕЛИЧИВАЕТ ЧЕТНЫЕ ЭЛЕМЕНТЫ В 2 РАЗА:

function increaseEvenElements(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      array[i] = array[i] * 2;
    }
  }
  return(array);
}

//ФУНКЦИЯ, КОТОРАЯ УДАЛЯЕТ ЭЛЕМЕНТ СО СДВИГОМ:

function deleteElement (array,k){
  for(let i = 0; i < array.length; i++) {
    if (k < array.length && i == k) {
      array[i] = array[i+1];
      k++;
    }
  }
  return(array);
}

//ФУНКЦИЯ, КОТОРАЯ ВОЗВРАЩАЕТ МАССИВ ИЗ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ (БЕЗ ПОВТОРЯЮЩИХСЯ):

//1. ФУНКЦИЯ ДЛЯ НАХОЖДЕНИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ:

function searchElementInArray(array,x) {

  for (let i = 0; i < array.length; i++){
    if(array[i] == x) {
      return true;
    }
  }
  return false;
}

//2. ФУНКЦИЯ ДЛЯ СОЗДАНИЯ МАССИВА ИЗ УНИКАЛЬНЫХ ЭЛ-ТОВ:

function uniqueArray(array){

  let b = [], j = 0;

  for (let i = 0; i < array.length; i++) {
    if (!searchElementInArray(b, array[i])){
      b[j] = array[i];
      j++
    }
  }
  return b;
}

        
let c = [];

c = fillArray(c,10);                    //заполнили массив случайными эл-тами
console.log(c);       

let increase = increaseEvenElements(c); //увеличили четные эл-ты в 2 раза
console.log(c);

let k = 3;                              //удалили элементы со сдвигом
let deleteE = deleteElement(c,k)
console.log(c);

c = uniqueArray(c);                     //вывели маcсив из уникальных элементов
console.log(c);

