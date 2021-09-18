//2. Разработать функцию для заполнения массива случаныйми числами.


console.log("2.1 Разработать функцию для заполнения массива случайными числами.")

function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return(array);
}

let arr =[];

arr = fillArray(arr,12);
console.log(arr);




console.log("2.2 Разработать функцию для заполнения массива случайными числами.")

//ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ СЛУЧАЙНОГО ЧИСЛА:
function createRandomWholeNumber(min,max){

randomWholeNumber = Math.floor(Math.random() * (max - min + 1) + min);
return (randomWholeNumber);
}

//ФУНКЦИЯ ДЛЯ МАССИВА ИЗ СЛУЧ.ЧИСЕЛ:
function fillArray2(array,n){

  for(let i = 0; i < n; i++){

    if (i < n - 1){

      array[i] = createRandomWholeNumber(4,9)

    }
  }
  return (array);
}

let arr2 =[];

arr2 = fillArray2(arr2,10);
console.log(arr2);

