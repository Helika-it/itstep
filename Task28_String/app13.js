// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.


let str = 'я учу javascript!';
console.log(str);
let newStr;

newStr = str.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")

console.log(newStr);


//=====================================

let result = str2.split(" ").map(function(item){
  return item[0].toUpperCase()+item.substr(1);
}).join(' ');

console.log(result);