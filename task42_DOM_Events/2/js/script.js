//! 2. Дано: кнопка и абзац с произвольным текстом. Сделать так, чтобы  при нажатии на кнопку текст выделялся полужирным шрифтом.
const button = document.getElementById('button');
let elementP = document.querySelector('p');

button.addEventListener('click', () => {
  elementP.style.fontWeight = '600';
});