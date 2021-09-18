//? 7. Дан массив [1,3,6,4,3,3,5,6]. Получить из него массив, состоящий из элементов без повторений.

/*
let arr = [1,3,6,4,3,3,5,6];
console.log(arr);

uniqueArray = arr.filter((elem, index, array) => array.indexOf(elem) == index);

console.log(uniqueArray);
*/


//!----------------из учебника-----------

/*
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) { // отрицание (т.е если нет такого)
      result.push(str);
    }
  }
  return result;
}

let strings = [1,3,6,4,3,3,5,6];

console.log( unique(strings) ); // (кришна, харе, :-O)
*/


//!---------2-e решение------------


let arr = [1,3,6,4,3,3,5,6];
console.log(arr);

uniqueArr = [];
arr.forEach(function(item,index,array){
  if(uniqueArr.includes(item) == false)
    uniqueArr.push(item);
});

console.log(uniqueArr);


//!---------2-e решение (то же со стрелкой) ------------

/*
let arr = [1,3,6,4,3,3,5,6];
console.log(arr);

uniqueArr = [];
arr.forEach((item,index,array) => {
  if(uniqueArr.includes(item) == false)
    uniqueArr.push(item);
});

console.log(uniqueArr);
*/