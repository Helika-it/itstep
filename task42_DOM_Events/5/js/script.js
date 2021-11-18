//! 5. Дано: поле ввода и кнопка. При нажатии на кнопку, вывести, является ли введеное значение числом.

//? пустая строка тоже число!!!

const button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', () => {
  let cont = document.getElementById('input').value;
  console.log(cont);

  if (isNaN(+cont)) {
    result.textContent = `Это не число.`;
  } else
    result.textContent = `Это число.`;
});