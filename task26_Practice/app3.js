//3. Разработать функцию для нахождения максимального элемента в массиве.


console.log("3. Разработать функцию для нахождения максимального элемента в массиве.")

//ФУНКЦИЯ ДЛЯ РАНДОМНОГО ЗАПОЛНЕНИЯ МАССИВА:
function fillArray(array,n){
  const min = 1,
  max = 100;

  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return(array);
}

//ФУНКЦИЯ ДЛЯ НАХОЖДЕНИЯ МАКСИМАЛЬНОГО ЭЛ-ТА В МАССИВЕ:

function checkMaxElement(arr) {
  let maxElement = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (maxElement <= arr[i]) {
      maxElement = arr[i]; 
    }
  }
  return maxElement;
}


let b =[];

b = fillArray(b,15)
let maxElement = checkMaxElement(b)

console.log(b);
console.log(maxElement);

