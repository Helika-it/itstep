function getRandomNumber(min, max) { // функция (1) для генерации рандомного номера
  return Math.floor(Math.random() * (max - min + 1)) + min; // выводит целое число из заданного диапазона 
}

var player = []; // создаем переменную - массив (игроки)
var current = 1; // создаем переменную (какой игрок ходит первым) по умолчанию = 1
var field = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]; // создаем массив массивов (изначально все = 0) (это для подсчета? х = 1, о = -1, пусто = 0)

//!клик по кнопке Играть
document.forms.start_form.start_play.onclick = function () { // при клике на кнопку start_play из формы start_form
  document.forms.start_form.classList.add("d-none"); // форме start_form добавляем класс d-none (не отображается)
  document.querySelector('.page2').classList.remove("d-none"); // у формы login_form удаляем класс d-none (отображается)
  // чтобы исключить перезагрузку можно дополнительно прописать:
  /*
    event.preventDefault();
    event.stopPropagation();
    */
  return false; // чтобы не перезагружалась страница
}

// проверка на валидацию (клик по кнопке авторизации игроков)
document.forms.login_form.start_game.onclick = function () { // при клике на кнопку start_game из формы login_form
  document.forms.login_form.classList.add("was-validated"); // форме login_form добавляем класс "was-validated" (делаем проверку на заполнение)
  if (document.forms.login_form.checkValidity()) { // если данные допустимые
    document.forms.login_form.classList.remove("was-validated"); // у формы login_form удаляем класс "was-validated"
    document.forms.login_form.classList.add("d-none"); // форме login_form добавляем класс d-none

    current = getRandomNumber(1, 2); // вызов функции (1). Выбираем какой игрок ходит первым

    if (current == 1) { // если current = 1
      player[1] = document.forms.login_form.player1_name.value; // получаем введенное значение1 (имя) и присваиваем игроку 1
      player[2] = document.forms.login_form.player2_name.value; // получаем введенное значение2 (имя) и присваиваем игроку 2
    } else { // иначе
      player[2] = document.forms.login_form.player1_name.value; // получаем введенное значение1 (имя) и присваиваем игроку 2
      player[1] = document.forms.login_form.player2_name.value; // получаем введенное значение2 (имя) и присваиваем игроку 1
    }

    let table = document.createElement("table"); // переменная. вставка таблицы
    for (let i = 0; i < 3; i++) { // в цикле 
      let row = document.createElement("tr"); // создаем 3 строки

      for (let j = 0; j < 3; j++) { // в цикле
        let data = document.createElement("td"); // создаем 3 столбца
        row.append(data) // вставляем в создаваемые строки
      }
      table.append(row); // строки добавляем в таблицу
    }

    table.addEventListener("click", play, false); //! таким образом можем получить созданную таблицу(которой изначально нет в HTML)

    document.querySelector(".field").append(table); // в div c классом ".field" вставляем таблицу
    document.querySelector(".current").innerHTML = `Ходит игрок <b>${player[current]}</b>`; // в div c классом ".current" вставляем текст с именем игрока 
    document.querySelector(".game_form").classList.remove("d-none"); // делаем видимым блок с классом ".game_form"
  }
  return false;
}

function play(event) { // функция логики игры 
  let progress = document.querySelector('.gameProgress');

  let td = event.target; // переменная td это ячейка в которой произошло событие

  if (td.tagName != "TD") // проверяем, чтобы событие именно на ячейке, иначе ничего не происходит
    return false;

  let x = td.cellIndex; // переменная х это индекс по вертикали
  let y = td.parentNode.rowIndex; // переменная y это индекс по горизонтали

  if (field[x][y] != 0) // проверяем, что ячейка "пустая"
    return false;

  if (current == 1) { // если ход игрока 1
    td.classList.add("k"); // то ячейке добавляется класс "k"(т.е свойство с background крестик)
    current = 2; // меняем значение current на 2, т.е предаем ход 
    field[x][y] = 1 // в массиве меняем по координатам содержимое 0 на 1


    let itemLi = document.createElement('li');
    itemLi.textContent = `Игрок ${player[current]}: (${x+1},${y+1})`;
    progress.append(itemLi);

    //console.log(`Ход игрока ${player[current]}: (${x+1},${y+1})`); //! выводы в консоль
  } else { // если ход игрока 2
    td.classList.add("n"); // то ячейке добавляется класс "n"(т.е свойство с background нолик)
    current = 1; // меняем значение current на 1, т.е предаем ход 
    field[x][y] = -1; // в массиве меняем по координатам содержимое 0 на -1

    let itemLi = document.createElement('li');
    itemLi.textContent = `Игрок ${player[current]}: (${x+1},${y+1})`;
    progress.append(itemLi);

    //console.log(`Ход игрока ${player[current]}: (${x+1},${y+1})`); //!
  }

  let winner = checkWinner(); //? (2) вывод победителя(или ничья)
  if (winner > 0) { // если результат функции(2) больше 0:
    // в div ".result" выводим имя победителя (1-первый, 2-второй)
    document.querySelector(".result").innerHTML = `Победил игрок <b>${player[winner]}</b>`;
    document.querySelector(".current").innerHTML = ``; // очистка значения (номер игрока)
    document.querySelector(".field table").removeEventListener("click", play, false); // удаляем обработчик события в div с классом".field table" чтобы не могли больше ничего кликать
  } else if (checkDraw()) { // проверяем, если остались ячейки со значением 0 (значит ничья) 
    document.querySelector(".current").innerHTML = ``; // очистка значения (номер игрока)
    document.querySelector(".field table").removeEventListener("click", play, false); // удаляем обработчик события в div с классом".field table" чтобы не могли больше ничего кликать
    // в div ".result" выводим результат игры: ничья
    document.querySelector(".result").innerHTML = `Ничья`;
  } else { // иначе продолжаем
    document.querySelector(".current").innerHTML = `Ходит игрок <b>${player[current]}</b>`;
  }

}

function checkWinner() { // функция (2) подсчета результата игры (определение победителя)
  let result = Array(8).fill(0); // массив из 8 элементов заполнить значениями 0 (для результатов: 3 строки, 3 столбца, 2 диагонали)
  //сумма по строкам
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum += field[i][j];
    }
    result[i] = sum; // (0-2 индекс) 1-3 элементы
  }

  //сумма по столбцам
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum += field[j][i];
    }
    result[i + 3] = sum; // (3-5 индекс) 4-6 элементы
  }

  //сумма по главной диагонали
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += field[i][i];
  }
  result[6] = sum; // (6 индекс) 7 элемент

  //сумма по побочной диагонали
  sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += field[i][2 - i];
  }
  result[7] = sum; // (7 индекс) 8 элемент

  let resK = Math.max.apply(null, result); //! (null - c чем начинается сравнение?) максимальный элемент в массиве result
  let resN = Math.min.apply(null, result); // минимальный элемент в массиве result

  if (resK == 3) // если результат 3 - функция выводит 1
    return 1;

  if (resN == -3) // если результат -3 - функция выводит 2
    return 2;

  return 0; // иначе функция выводит 0
}

function checkDraw() { // функция (3) (проверка всех ячеек на 0)
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (field[i][j] == 0)
        count++;
    }
  }
  if (count == 0)
    return true; // если нет ячеек с 0 функция выводит true
  else
    return false; // если есть ячейки с 0 функция выводит false
}