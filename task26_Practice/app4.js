//4. Разработать функцию для нахождения индекса максимального элемента в массиве.


console.log("4. Разработать функцию для нахождения индекса максимального элемента в массиве.")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:
function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return array;
}

//ФУНКЦИЯ ДЛЯ НАХОЖДЕНИЯ ИНДЕКСА МАКСИМАЛЬНОГО ЭЛ-ТА В МАССИВЕ:

function checkIndexMaxElement(arr) {
  let maxElement = arr[0], 
  iMax = 0;
  for(let i = 0; i < arr.length; i++) {
    if (maxElement <= arr[i]) {
      maxElement = arr[i]; 
      iMax = i;
    }
  }
  return iMax;
}


let b =[];

b = fillArray(b,15)
let iMaxElement = checkIndexMaxElement(b)

console.log(b);
console.log(iMaxElement);
