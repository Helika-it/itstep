//! 13. Напишите функцию, которая принимает строку на английском языке в качестве аргумента и возвращает количество гласных, содержащихся в этой строке.

let string = "You can turn back pages bat not time."
let vowels = "aeiouyAEIOUY";
let counter = 0;

сalculateVowels(string);

//ФУНКЦИЯ ДЛЯ ПОДСЧЕТА ГЛАСНЫХ
function сalculateVowels(str) {

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < vowels.length; j++) { // проверяем тип буквы

      if (str[i] == vowels[j]) { // если гласная
        counter++;
        break; // выходим 
      }
    }

  }
  console.log(counter)
}