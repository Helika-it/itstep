//! 2. Дана ссылка. Сделать так, чтобы при нажатии на ссылку не происходил переход по адресу.

const elemA = document.querySelector('a');

elemA.addEventListener('click', (event) => {
  event.preventDefault();
})