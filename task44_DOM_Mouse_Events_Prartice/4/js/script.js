//! 4. Даны поле поле ввода и кнопка. Реализовать игру в города для 2 игроков
//? 4.1 сначала первый игрок вводит город, а второй должен ввести другой город, который должен начинаться на последнюю букву города первого игрока и т.д.. Если на такую букву городов не может быть (ь,ъ,ы,ё), то должна браться предпоследняя буква.
//? 4.2 все города должны выводится в 2 блока, причем в каждый блок должны выводится города только одного игрока.
//? 4.3 предусмотреть вариант, чтобы нельзя было вводить один и тот же город 2 раза.


const elemSend = document.getElementById('send'); //кнопка
const elemUser1 = document.getElementById('user1'); //<ul> список1
const elemUser2 = document.getElementById('user2'); //<ul> список2
let textGame = document.querySelector('p'); //для подсказок по ходу игры
let arrCities = []; //общий список всех введенных городов для проверки на повтор
let first; // для проверки на первую букву 
let last; // для проверки на последнюю букву
let counter = 1; //счетчик для распределения по спискам со значениями 1 или 2




elemSend.addEventListener('click', () => { //по клику
  let valueElem = document.querySelector('input').value.toLowerCase(); // получаем содержимое поля ввода
  //console.log(valueElem);
  first = valueElem[0]; // для проверки получаем первую букву
  //console.log(first);


  if (arrCities.length == 0) { // если длина общего списка городов меньше 1 (первый ход)
    arrCities.push(valueElem); // добавляем значение в общий список
    greateLi(elemUser1, valueElem); // добавляем первому игроку
    counter = 2; //передаем ход второму

    //-----------
    valueElem = String(valueElem); //явное преобразование в строку(на всякий случай)
    let arrLetters = valueElem.split(''); //массив из букв
    let lastLetter = arrLetters[arrLetters.length - 1]; //последняя буква


    if (lastLetter != 'ё' && lastLetter != 'ь' && lastLetter != 'ъ' && lastLetter != 'ы') {
      textGame.textContent = `Введите город на букву: "${arrLetters[arrLetters.length - 1]}"`;
      last = lastLetter;
    } else {
      textGame.textContent = `Введите город на букву: "${arrLetters[arrLetters.length - 2]}"`;
      lastLetter = arrLetters[arrLetters.length - 2];
      last = lastLetter;
    }
    //-----------

  } else if (arrCities.includes(valueElem)) { // проверяем, если город уже есть в общем списке
    return false;

  } else if (last != first) { //! проверяем, если первая буква не равна последней
    return false;

  } else { // если небыло,
    arrCities.push(valueElem); // добавляем в общий список

    if (counter == 1) {
      greateLi(elemUser1, valueElem); // заносим в список 1 игрока
      counter = 2; //передаем ход второму
    } else {
      greateLi(elemUser2, valueElem); // заносим в список 2 игрока
      counter = 1; //передаем ход первому
    }

    valueElem = String(valueElem); //явное преобразование в строку(на всякий случай)
    let arrLetters = valueElem.split(''); //массив из букв
    let lastLetter = arrLetters[arrLetters.length - 1]; //последняя буква


    if (lastLetter != 'ё' && lastLetter != 'ь' && lastLetter != 'ъ' && lastLetter != 'ы') {
      textGame.textContent = `Введите город на букву: "${arrLetters[arrLetters.length - 1]}"`;
      last = lastLetter;
    } else {
      textGame.textContent = `Введите город на букву: "${arrLetters[arrLetters.length - 2]}"`;
      lastLetter = arrLetters[arrLetters.length - 2];
      last = lastLetter;
    }

  }

})


// функция добавления элемента:
function greateLi(elem, text) {
  let elemLi = document.createElement('li'); //создали элемент <li>
  elemLi.innerText = `${text}`; // вставили текст в элемент <li>
  elem.appendChild(elemLi); //добавили созданный элемент <li> как дочерний
}




//!===Пример:=========================================
/*
var cities = []; // список всех введенных городов
var currentPlayer = 1; // 1 или 2
var lastLetter; // последняя буква
var badLetter = ["ь", "ъ", "ы", "ё"]; // не подходящие буквы(массив)

document.querySelector(".play").onclick = function () { // клик по кнопке с классом ".play"
  let currentCity = document.querySelector("#city").value.toLowerCase(); // считываем value переводя сразу в нижний регистр

  let last = currentCity[currentCity.length - 1]; // берем последнюю букву слова
  let currentIndex = currentCity.length - 1; // индекс последней буквы слова
  while (badLetter.includes(last)) { //проверяем если в массиве не подходящих букв содержится последняя,
    currentIndex--; // то уменьшаем индекс последней(т.е. берём предпоследнюю)
    last = currentCity[currentIndex]; // и присваемаем ей значение "последняя"
  }

  first = currentCity[0]; // ? для проверки присваиваем первая = первая буква введенного слова

  if (lastLetter === undefined) { // для первого хода (когда последняя буква не определена) 
    lastLetter = last; // ? почему используем две переменные?
    cities.push(currentCity); // в общий массив добавляем город
    document.querySelector(".first-player").insertAdjacentHTML('beforeend', `<div>${currentCity}</div>`); // выводим на экран город первому игроку
    currentPlayer = 2; // переключаем ход на второго игрока
  } else {
    if (lastLetter != first) // если вводим слово не на последнюю 
      return false;

    if (cities.includes(currentCity)) // если слово уже было (т.е. есть в общем списке)
      return false;

    cities.push(currentCity); // в общий массив добавляем город 
    lastLetter = last; // ? почему используем две переменные?

    if (currentPlayer == 1) { // когда ход первого игрока
      document.querySelector(".first-player").insertAdjacentHTML('beforeend', `<div>${currentCity}</div>`); // создаем блок  и добавляем город первому
      currentPlayer = 2; // переключаем на 2 игрока
    } else { // когда ход второго игрока
      document.querySelector(".second-player").insertAdjacentHTML('beforeend', `<div>${currentCity}</div>`); // создаем блок  и добавляем город второму
      currentPlayer = 1; // переключаем на 1 игрока
    }
  }
}
*/