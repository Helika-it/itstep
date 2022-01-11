//! 12. Дано 2 поля, в которых вводятся номер месяца и год. Вывести в HTML календарь на этот месяц в виде таблицы

document.forms.user.onsubmit = function (event) {
  let title; // заголовок таблицы - наименование месяца
  document.querySelector(".d-none").classList.remove("d-none") // отображение таблицы

  // месяц словом
  if (this.month.value == 1) {
    title = "Январь"
  }
  if (this.month.value == 2) {
    title = "Февраль"
  }
  if (this.month.value == 3) {
    title = "Март"
  }
  if (this.month.value == 4) {
    title = "Апрель"
  }
  if (this.month.value == 5) {
    title = "Май"
  }
  if (this.month.value == 6) {
    title = "Июнь"
  }
  if (this.month.value == 7) {
    title = "Июль"
  }
  if (this.month.value == 8) {
    title = "Август"
  }
  if (this.month.value == 9) {
    title = "Сентябрь"
  }
  if (this.month.value == 10) {
    title = "Октябрь"
  }
  if (this.month.value == 11) {
    title = "Ноябрь"
  }
  if (this.month.value == 12) {
    title = "Декабрь"
  }
  document.querySelector("h3").textContent = `${title} ${this.year.value}`; // вывод заголовка

  // === дни в таблице  ========
  function createCalendar(elem, year, month) {

    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }


  createCalendar(calendar, this.year.value, this.month.value);


  this.reset(); //очистка формы
  return false
}