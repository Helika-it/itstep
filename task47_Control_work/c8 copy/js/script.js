//! 8. Дана шахматная таблица, 2 поля ввода, 2 радиокнопки с выбором цвета (белый и черный) и простая кнопка. При нажатии на кнопку в заданные координаты, которые введены в поля, должна ставится шашка выбранного цвета. Если там уже стоит шашка, то она должна удалятся и ставиться новая.

// ====== пример кода =====================

document.forms.chess.onsubmit = function (event) { // при отправке формы

  let form = new FormData(this); // форма

  let x = +form.get("a"); // получаем из формы содержимое инпута в виде числа
  let y = +form.get("b");

  let color = form.get("color"); // получаем из формы значение радио

  let div = document.querySelector(`tr:nth-child(${x}) td:nth-child(${y}) div`); // ищем див в ячейке с координатами из инпута

  if (div) // если есть див
    div.remove(); // удаляем его

  div = document.createElement("div"); //создаем див
  div.classList.add(color); // добавляем ему класс со значением из радио

  document.querySelector(`tr:nth-child(${x}) td:nth-child(${y})`).append(div); // вставляем див в ячейку

  return false;
}