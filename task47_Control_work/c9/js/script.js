//! 9. Дан абзац с текстом и кнопка "Редактировать". При нажатии на кнопку должно появлятся поле ввода, абзац должен скрываться,а в поле ввода должен быть текст из абзаца, кнопка "Редактировать" должна изменить текст на "Сохранить". После изменения текста и нажатии на кнопку "Сохранить" у нас должен оставаться только абзац с новым текстом и кнопкой "Редактировать".

// ====== мой код =====================

let redact = document.querySelector('.redact');
let save = document.querySelector('.save');

redact.addEventListener('click', () => {
  redact.style.display = 'none'
  save.style.display = 'block'

  let paragraph = document.querySelector('p');
  let text = paragraph.innerHTML;
  let change = document.querySelector('.change');

  paragraph.style.display = 'none';
  change.style.display = 'block'
  change.value = text;
});

save.addEventListener('click', () => {
  let paragraph = document.querySelector('p');
  let text = paragraph.innerHTML;
  let change = document.querySelector('.change');

  save.style.display = 'none'
  redact.style.display = 'block'
  paragraph.innerHTML = change.value
  change.style.display = 'none'
  paragraph.style.display = 'block';

});