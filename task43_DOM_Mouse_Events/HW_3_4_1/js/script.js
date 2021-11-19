//! Клавиатура: keydown и keyup
//! HW. Задача 3.4.1 
/*
решение
---
Необходимо использовать два обработчика событий: document.onkeydown и document.onkeyup.

Создадим множество pressed = new Set(), в которое будем записывать клавиши, нажатые в данный момент.

В первом обработчике будем добавлять в него значения, а во втором удалять. Каждый раз, как отрабатывает keydown, будем проверять – все ли нужные клавиши нажаты, и, если да – выводить сообщение.
*/

//! Что за точки??? 
function runOnKeys(func, ...codes) {
  // переменная нажатые = новый набор
  let pressed = new Set(); //! Откуда: Set()?

  // отслеживаем нажатие кнопки
  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);

    for (let code of codes) { // все ли клавиши из набора нажаты?
      if (!pressed.has(code)) { // если не все
        return; //выйти
      }
    }

    // да, все

    // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
    // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
    // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
    pressed.clear(); // очистка статуса клавиш

    func(); //! какая-то пустая функция
  });
  // отслеживаем отпускание клавиши
  document.addEventListener('keyup', function (event) {
    pressed.delete(event.code); //! что-то удалили
  });

}
// функция, выводящая модальное окно с сообщением
runOnKeys(
  () => alert("Привет!"),
  "KeyA",
  "KeyS"
);