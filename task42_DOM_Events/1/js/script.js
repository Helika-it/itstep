//! 1. Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на кнопку число увеличивалось на 1.

document.getElementById('button').onclick = function () {
  let x = +document.getElementsByTagName('p').item(0).textContent;
  x += 1;
  document.getElementsByTagName('p').item(0).textContent = x;
}