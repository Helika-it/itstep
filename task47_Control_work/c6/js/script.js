//! 6. Дан квадрат. При наведении на квадрат сделать так, чтобы при движении мыши квадрат двигался вместе с курсором мыши. Курсор должен находится в центре квадрата.

let element = document.querySelector(".element");

element.onmouseover = function (event) { // (1)при наведении курсора (можно при нажатии mousedown)
  event.target.classList.remove("bg-green")
  event.target.classList.add("bg-blue")

  // (2) подготовить к перемещению:
  // разместить поверх остального содержимого и в абсолютных координатах
  element.style.position = 'absolute';
  element.style.zIndex = 1000;
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.append(element);
  // и установим абсолютно спозиционированный мяч под курсор

  moveAt(event.pageX, event.pageY);

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(pageX, pageY) {
    element.style.left = pageX - element.offsetWidth / 2 + 'px';
    element.style.top = pageY - element.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) перемещать по экрану
  document.addEventListener('mousemove', onMouseMove);

  // (4) положить мяч, удалить более ненужные обработчики событий
  element.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    element.onmouseup = null;
  };

}


element.onmouseout = function (event) { //при уходе курсора
  event.target.classList.add("bg-green")
  event.target.classList.remove("bg-blue")
}