//! 2. Дано поле ввода и абзац.
//? 2.1 при наборе текста в input выводить текст в абзац;
//? 2.2 запретить ввод пробела в поле ввода.

const textInput = document.querySelector('input');
const textConcole = document.querySelector('p');

textInput.addEventListener('keyup', (event) => { // обработчик события на инпут

  let textOutput = event.target.value;
  if (event.code == 'Space') {
    textOutput.split(' ').join('');
  }
  textConcole.textContent = textOutput;

});