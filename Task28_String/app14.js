// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.


let str = 'var_test_text';
console.log(str);
let newStr;
let newStr2;

newStr = str.split("_").map(elem => elem[0].toUpperCase() + elem.slice(1)).join("");
newStr2 = newStr[0].toLowerCase() + newStr.slice(1);

console.log(newStr2);


