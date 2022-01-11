//! 9. Дано предложение на русском языке. Определить, является ли оно панграммой.


let compareStings = function (str1, str2) {
  let arr1 = str1.split(' ').join("").split('').join("")
  let arr2 = str2.split(' ').join("").split('').join("")

  if (arr1.length != arr2.length) {
    console.log("Не пантограмма.");
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      console.log("Не пантограмма.");
      return false
    }
  }
  console.log("Пантограмма.");
  return true
}

let s1 = "Наполеон стоял и думал: Ко злу дорога широка.";
let s2 = "На поле он стоял и думал: Козлу дорога широка.";

let examination = compareStings(s1, s2)