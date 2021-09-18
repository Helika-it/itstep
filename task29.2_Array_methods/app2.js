// ----УПРАЖНЕНИЯ ИЗ УЧЕБНИКА---------
// 1.
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». То есть дефисы удаляются, а все слова после них получают заглавную букву.

//    camelize("background-color") == 'backgroundColor';
//    camelize("list-style-image") == 'listStyleImage';
//    camelize("-webkit-transition") == 'WebkitTransition';

let str1 = "background-color"; 
let str2 = "list-style-image"; 
let str3 = "-webkit-transition"; //! с большой буквы т.к создает массив из 3-х элементов (первый пустой)

function camelize(text) {
  return text.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

let newStr1 = camelize(str1);
console.log(newStr1);

let newStr2 = camelize(str2);
console.log(newStr2);

let newStr3 = camelize(str3);
console.log(newStr3);


// -------------ОБРАЗЕЦ:-------------------

/*
function camelize(str) {
  return str 
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
*/