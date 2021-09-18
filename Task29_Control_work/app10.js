// 10. Удалить из предложения все знаки препинания (. , : ; ! ? -).

/*
let str = 'Пример. предложения, для: удаления; знаков- препинания? всё ГОТОВО!';
console.log(str);


let newStr = str.split(".").join("").split(",").join("").split(":").join("").split(";").join("").split("!").join("").split("?").join("").split("-").join("");


console.log(newStr);
*/

// ------------ЕЩЁ ВАРИАНТ:-----------------

let punct =".,:;!?-";
let str = 'Пример. предложения, для: удаления; знаков- препинания? всё ГОТОВО!';

let newStr = str.split("").filter(function(item) {
  return punct.indexOf(item) == -1;
}).join("");

console.log(newStr);