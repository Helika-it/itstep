//! 7. До таблица 5х5. При наведении на ячейку таблицы должны выделяться цветом строка и столбец (все ячейки в этих строке и столбце), в которой находится ячейка.

//=== мой код с дополнительной подсветкой самой ячейки (работает) ==========================

const table = document.querySelector('table'); // получили таблицу
const row = document.querySelectorAll('tr'); // получили все строки
const col = document.querySelectorAll('td'); // полусили все ячейки


table.onmouseover = function (event) { // при наведении на таблицу
  let target = event.target; // сработавшая ячейка
  target.style.background = '#5EBA7D'; // ей отдельный стиль background "подсветки"
  /* сделано при убирании наведения, т.к. не срабатывает при уходе из таблицы
    document.querySelectorAll(".highlight").forEach( // перебор всех ячеек с классом ".highlight" подсветки
      item => item.classList.remove("highlight") // удаляем класс ".highlight"
    );
  */
  target.closest("tr").classList.add("highlight"); // находим родителя <tr> для сработавшей ячейки и добавляем класс "highlight" всем элементам 
  // (closest - возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет)
  target.closest("table").querySelectorAll("tr").forEach( // находим родителя (т.е саму таблицу), в ней все <tr> для сработавшей ячейки и делаем перебор :
    // Свойство cells хранит коллекцию ячеек td и th строки tr. Применяется только к ряду таблицы.
    row => row.cells[target.cellIndex].classList.add("highlight") // добавляем класс "highlight" всем элементам с индексом как у сработавшей ячейки (т.е к столбцу)
  );
};

table.onmouseout = function (event) { //при уходе
  let target = event.target; //сработавшая ячейка
  target.style.background = ''; // убираем её отдельный стиль background "подсветки" 
  // удаление подсветки всех ячеек  при наведении сделано при перемещении внутри таблицы. Здесь при уходе с таблицы
  document.querySelectorAll(".highlight").forEach(
    item => item.classList.remove("highlight")
  );

};

//=== пример кода (другой вариант, без отдельной подсветки сработавшей ячейки) ==========================

/*
document.querySelector("table").onmouseover = function (event) { //при наведении на таблицу

  let td = event.target; // событие на ячейке

  if (td.tagName != "TD") // прверка "если не ячейка"
    return false; // ничего

  let tds = td.parentElement.children; // получаем всех потомков родительского (т.е все ячейки <td> в родительской строке <tr>)

  Array.from(tds).forEach(function (item) { // Array для применения методов массива. Пребираем полученные ячейки
    item.classList.add("highlight"); // добавляем им класс "highlight" для подсветки
  });

  let numColumns = td.cellIndex; // номер столбца (индекс)

  tds = document.querySelectorAll(`tr td:nth-child(${numColumns+1})`); // все ячейки <td> с индексом numColumns

  Array.from(tds).forEach(function (item) { // Array для применения методов массива. Пребираем полученные ячейки
    item.classList.add("highlight"); // добавляем им класс "highlight" для подсветки
  });
}

document.querySelector("table").onmouseout = function (event) { // при уходе с таблицы
  let td = event.target; // событие на ячейке

  if (td.tagName != "TD") // прверка "если не ячейка"
    return false; // ничего

  let tds = document.querySelectorAll("td.highlight"); //находим все ячейки с классом "td.highlight"

  Array.from(tds).forEach(function (item) { // перебор ячеек
    item.classList.remove("highlight"); // удаляем класс подсветки
  });
}
*/