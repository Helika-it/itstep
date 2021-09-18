//5. Разработать функцию, которая выводит элементы массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)


console.log("5. Разработать функцию, которая выводит элементы массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:
function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array;
}

//ФУНКЦИЯ ВЫВОДИТ ЭЛ-ТЫ МАССИВА ЧЕРЕЗ ЗАПЯТУЮ:

function getElementArray(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i] + ", ";
  }
  return str;
}


let c =[];

c = fillArray(c,10)

console.log(c);

let stringArray = getElementArray(c);

console.log(stringArray);

