//! 6. Дано: кнопка и ссылка. При нажатии на кнопку, в текст ссылки вывести ее адрес.

const button = document.getElementById('button');

button.addEventListener('click', () => {
  let elem = document.querySelector('a').href;
  console.log(elem);
  document.querySelector('a').innerText = elem;
})