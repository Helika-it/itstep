// 8. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3]. Должно работать для любых 2 аналогичных массивов.
//8.1---8.2--------------

let arr1 = [1,3,6,4,3,3,5,6];
let arr2 = [1,3];
console.log("arr1:");
console.log(arr1);
console.log("arr2:");
console.log(arr2);


//arr1 = arr1.filter(elem => !~arr2.indexOf(elem)); //нашла решение в инт (с использованием побитового НЕ ~)
//---------или:------------
arr1 = arr1.filter(elem => !arr2.includes(elem));

console.log("arr1 после исключения arr2:");
console.log(arr1);

//---ИЛИ----------------------
//! сверить! т.к. выводит исключенные элементы:

let e = [1,3,6,4,3,3,5,6];
let f = [1,3];

let diffEF = e.filter(function(item) {
  return !f.includes(item) == true; //! return !f.includes(item) == false; ---- либо без "!" либо "true" ----
});

console.log(diffEF);

