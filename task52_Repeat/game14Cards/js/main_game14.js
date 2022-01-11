//! 14. Реализовать следующую игру. Дана таблица с цветными карточками, одна сторона которых изначально красная, а другая - черная. Изначально, все карточки выложены красной стороной вверх. При нажатии на определенную карточку она меняет цвет и все, граничащие по строне с ней карточки, на противоложный.
//! Игра заканчивается, как только все карточки будут черным цветом вверх. Необходимо подсчитывать количество ходов.

let n = 6, //размеры таблицы
  m = 6,
  counter = 0, // сетчик
  isFinish = false; // не финиш

document.querySelector("table").onclick = function (event) { // при клике на таблице
  if (isFinish) // проверка если финиш
    return false; // выход

  let td = event.target; // сработавшее событие

  if (td.tagName != "TD") // проверка если событие не на ячейке
    return false; // выход

  td.classList.toggle("check"); // если на ячеейке, то переключатель добавить/удалить класс "check"
  if (td.previousElementSibling) // проверка если есть предыдущий элемент
    td.previousElementSibling.classList.toggle("check"); // добавить/удалить класс "check"

  if (td.nextElementSibling) // проверка если есть следующий элемент
    td.nextElementSibling.classList.toggle("check"); // добавить/удалить класс "check"


  if (td.parentElement.previousElementSibling) // проверяем сверху
    td.parentElement.previousElementSibling.children.item(td.cellIndex).classList.toggle("check"); // добавить/удалить класс "check"

  if (td.parentElement.nextElementSibling) // проверяем снизу
    td.parentElement.nextElementSibling.children.item(td.cellIndex).classList.toggle("check"); // добавить/удалить класс "check"

  counter++; // увеличиваем счетчик

  if (document.querySelectorAll(".check").length == m * n) { // проверка если у всех ячеек стоит класс ".check"
    document.querySelector("caption").textContent = `Игра окончена за ${counter} ходов`; // выводим в заголовок таблицы текст
    isFinish = true; // финиш
  } else { // если не всё 
    document.querySelector("caption span").textContent = counter; // в заголовке меняем значение счетчика
  }

  return false; // выход без перезагрузки
}