//! 8. Дана шахматная таблица, 2 поля ввода, 2 радиокнопки с выбором цвета (белый и черный) и простая кнопка. При нажатии на кнопку в заданные координаты, которые введены в поля, должна ставится шашка выбранного цвета. Если там уже стоит шашка, то она должна удалятся и ставится новая.

//? === мой код (перестал работать. Доделать правки)========================

document.forms.chess.onsubmit = function (event) { // при отправке формы

  let form = new FormData(this); // форма

  let rov = +form.get("num1"); // получаем из формы содержимое инпута в виде числа
  let col = +form.get("num2");
  console.log(rov);
  console.log(col);

  let color = form.get("color"); // получаем из формы значение радио
  console.log(color);

  let elemsTd = document.querySelectorAll('td'); // получили все ячейки




  if (col > 8 || rov > 8) {
    return false;
  }
  if (col == 1) {
    indexTd = rov - 1;
  }
  if (col == 2) {
    indexTd = 7 + rov;
  }
  if (col == 3) {
    indexTd = 15 + rov;
  }
  if (col == 4) {
    indexTd = 23 + rov;
  }
  if (col == 5) {
    indexTd = 31 + rov;
  }
  if (col == 6) {
    indexTd = 39 + rov;
  }
  if (col == 7) {
    indexTd = 47 + rov;
  }
  if (col == 8) {
    indexTd = 55 + rov;
  }

  // перед добавлением проверить ячейку на содержимое:

  if (elemsTd[+indexTd] != '') { // если не пусто
    elemsTd[+indexTd].innerHTML = ''; // очистить ячейку
  }

  // добавить шашку
  //greateDiv(elemsTd[+indexTd], color);


  //! функция добавления элемента:
  //function greateDiv(elem, color) {

  let elemDiv = document.createElement('div'); //создали элемент <div>
  elemDiv.style.width = '20px';
  elemDiv.style.height = '20px';
  elemDiv.style.border = '1px';
  elemDiv.style.borderColor = 'lightslategrey';
  elemDiv.classList.add(`${color}`); //!добавить выбранный цвет!!! 
  elemDiv.style.borderRadius = '50%';
  elem.appendChild(elemsTd[+indexTd]); //добавили созданный элемент <div> как дочерний
  //};
};




//=== дополнительные кнопки ========================

//=======================================================
//-------------------
//? 3.2 при нажатии на вторую кнопку черные клетки должны меняться на белые, а белые - на черные;

let buttonChange = document.querySelector(".change");

buttonChange.addEventListener('click', () => {
  let elemsTd = document.querySelectorAll('td');

  for (const item of elemsTd) {
    item.classList.toggle('white');
    item.classList.toggle('black');
  };
});

//----------------------
//? 3.3 при нажатии на третью кнопку доска должна поворачиваться на 90 градусов (использовать CSS-анимацию)

let buttonExpand = document.querySelector(".expand");
let angle = 0;

buttonExpand.addEventListener('click', () => {
  angle += 90;
  let elemTable = document.querySelector('table');
  elemTable.style.transitionTimingFunction = 'linear';
  elemTable.style.transitionDuration = '1s';
  elemTable.style.transform = `rotate(${angle}deg)`;
});