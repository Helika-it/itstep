//! 1. Дан квадратный зеленый блок.
//? 1.1 при наведении он должен менять цвет на синий, при уводе курсора возвращаться в исходное положение;
let element = document.querySelector(".element");

element.onmouseover = function (event) {
  event.target.classList.remove("bg-green")
  event.target.classList.add("bg-blue")
}

element.onmouseout = function (event) {
  event.target.classList.add("bg-green")
  event.target.classList.remove("bg-blue")
}

//? 1.2 при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;
//? 1.3 при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.

let elemWidth;
let elemHeight;

element.addEventListener('click', () => {
  elemWidth = window.getComputedStyle(element, null).getPropertyValue("width"); // получили размер в px
  elemWidth = String(elemWidth); //преобразовали значение в строку
  elemWidth = elemWidth.slice(0, -2); //обрезали строку


  elemHeight = window.getComputedStyle(element, null).getPropertyValue("height");
  elemHeight = String(elemHeight);
  elemHeight = elemHeight.slice(0, -2);


  elemWidth = `${elemWidth / 2}`;
  elemHeight = `${elemHeight / 2}`;

  element.style.width = `${elemWidth}px`;
  element.style.height = `${elemHeight}px`;

})

element.addEventListener('contextmenu', () => {
  elemWidth = window.getComputedStyle(element, null).getPropertyValue("width"); // получили размер в px
  elemWidth = String(elemWidth); //преобразовали значение в строку
  elemWidth = elemWidth.slice(0, -2); //обрезали строку


  elemHeight = window.getComputedStyle(element, null).getPropertyValue("height");
  elemHeight = String(elemHeight);
  elemHeight = elemHeight.slice(0, -2);


  elemWidth = `${elemWidth * 2}`;
  elemHeight = `${elemHeight * 2}`;

  element.style.width = `${elemWidth}px`;
  element.style.height = `${elemHeight}px`;

  return false;

})