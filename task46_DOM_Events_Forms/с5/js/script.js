//! 5. Дано форма с полями:
// - имя
// - email
// - выбор пола (радиокнопки)
// - выпадающий c языками программирования
// - "Я не робот" (чекбокс)
// Если пользователь заполнит все данные, то необоходимо скрыть (не удалить) форму и отобразить эти данные.
// Если хотя бы одно поле не заполнено или заполнено некорректно, то нужно под полем вывести ошибку об этом.


const form = document.forms[0];

const userName = form.elements.name;
const email = form.elements.email;
const sex = form.elements.sex;
const language = form.elements.language;
const robot = form.elements.robot;
const button = form.elements.submit;

let valid = false;

//--- name ---------------------------------

userName.addEventListener('focusin', () => {
  userName.classList.remove('error');
  //!удалить сообщение об ошибке
  //removeP(userName);
  valid = true;
})
userName.addEventListener('focusout', () => {
  if (userName.value == '') {
    userName.classList.add('error');
    greateP(userName, 'Hичего не введено.', 'error1'); // добавляем сообщение об ошибке
  }
})

//--- email ---------------------------------

email.addEventListener('focusin', () => {
  email.classList.remove('error');
  //!удалить сообщение об ошибке
  //document.querySelector('.error2').remove 
  valid = true;
})
email.addEventListener('focusout', () => {
  if (!email.value.includes('@')) {
    email.classList.add('error');
    email.classList.add('error');
    greateP(email, 'Ввведен не email.', 'error2'); // добавляем сообщение об ошибке
  }
})


//--- клик по кнопке ------------------------

button.addEventListener('click', (event) => {
  if (valid == true) {
    form.style.display = 'none';

  }
  event.preventDefault();
})

//--- функции -------------------------------

// функция добавления элемента:
function greateP(elem, text) {
  let elemP = document.createElement('p'); //создали элемент <p>
  elemP.textContent = text; // вставили текст в элемент <p>
  elemP.classList.add('error-text'); // класс
  elem.append(elemP); //добавили созданный элемент <p> 
}

// функция удаления элемента:
function removeP(elem) {
  elem.classList.remove('error-text');
  if (elemP) {
    elemP.remove();
  }
}