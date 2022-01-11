//! 1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и false в противном случае.
// для сравнения строк, но true только если абсолютно совпадают, в т.ч. и порядок
/* 
let compareStings = function (str1, str2) {
  let arr1 = str1.split('')
  let arr2 = str2.split('')

  if (arr1.length != arr2.length) {
    console.log("Строки не равны.");
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      console.log("Строки не равны.");
      return false
    }
  }
  console.log("Строки равны.");
  return true
}

let s1 = "Какао"
let s2 = "Какао"

let examination = compareStings(s1, s2)
*/

function isEqual(str1, str2) {

  if (str1.split("").sort().join("") == str2.split("").sort().join("")) {

    return true;
  }

  return false;
}

let s1 = "какао в кружке"
let s2 = "в коака екружк"

let examination = isEqual(s1, s2)
console.log(examination);