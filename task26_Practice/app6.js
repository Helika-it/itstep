//6. Разработать функцию, которая уменьшает четные элементы в 2 раза.


console.log("6. Разработать функцию, которая уменьшает четные элементы в 2 раза.")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:
function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array;
}

//ФУНКЦИЯ УМЕНЬШАЕТ ЧЕТНЫЕ ЭЛЕМЕНТЫ В 2 РАЗА:

function decreaseEvenElements(arr) {
  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0)
    arr[i] = arr[i]/2;
  }
  return arr;
}


let c =[];

c = fillArray(c,10)

console.log(c);

let newArray = decreaseEvenElements(c);

console.log(c);
