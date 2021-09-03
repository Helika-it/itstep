// Создать 2 функции : Заполнение массива и суммы элементов массива.
console.log("*** Создать 2 функции : Заполнение массива и суммы элементов массива..")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА

function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return(array);
}

//ФУНКЦИЯ ДЛЯ НАХОЖДЕНИЯ СУММЫ ЭЛЕМЕНТОВ МАССИВА

function summarizeElementsArray(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++ ){
    sum = sum + array[i];
  }
  return(sum);
}

let b =[];

b = fillArray(b,10);
console.log(b);

let sum = summarizeElementsArray(b);
console.log(sum);