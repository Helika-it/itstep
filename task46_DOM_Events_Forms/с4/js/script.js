//! 4. Дано поле ввода и кнопка. Сделать так, что если пользователь туда введет город и нажмет на кнопку, то редактировать поле после этого было не возможно.

let form = document.forms[0];

let input = form.elements.town;

let button = form.elements.send;

/*
elem.addEventListener('change', () => {
  input.classList.add('changed');
})
*/

input.addEventListener('focusin', () => {
  if (input.classList.contains('changed')) {
    input.oncut = input.oncopy = input.onpaste = function (event) {
      event.preventDefault();
      return false;
    };
  }

})

input.addEventListener('focusout', (event) => {
  input.classList.add('changed');
  if (input.classList.contains('changed')) {
    event.preventDefault();
    return false;
  }
  event.preventDefault();
})

button.addEventListener('click', (event) => {
  event.preventDefault();
})