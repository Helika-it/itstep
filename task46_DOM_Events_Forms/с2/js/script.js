//! 2. Дано 3 поля ввода. После ввода ухода курсора из каждого поля необходимо выводить сообщение об ошибке под полем, если
//? 2.1 в первом поле ничего не введено
//? 2.2 во втором поле введено не число
//? 2.3 в третьем поле введен не email

// получаем форму
let form = document.forms.my; // <form name="my">


// получаем элемент
let elem1 = form.elements.text; // <input name="text">
let elem2 = form.elements.number; // <input name="numbeк">
let elem3 = form.elements.email; // <input name="email">

elem1.addEventListener('focusin', () => {
  elem1.classList.remove('error');
  document.querySelector('.error1').remove //удалить сообщение об ошибке
})
elem1.addEventListener('focusout', () => {
  if (elem1.value == '') {
    elem1.classList.add('error');
    greateP(elem1, 'Hичего не введено.', 'error1'); // добавляем сообщение об ошибке
  }
})

//! проверка если не число
elem2.addEventListener('focusin', () => {
  elem2.classList.remove('error');
  document.querySelector('.error2').remove //удалить сообщение об ошибке
})
elem2.addEventListener('focusout', () => {

  if ((elem2.value !== '') && (!Number.isNaN(elem2.value))) {
    elem2.classList.add('error');
    greateP(elem2, 'Введено не число.', 'error2'); // добавляем сообщение об ошибке
  }
})

elem3.addEventListener('focusin', () => {
  elem3.classList.remove('error');
  document.querySelector('.error3').remove //удалить сообщение об ошибке
})
elem3.addEventListener('focusout', () => {
  if (!elem3.value.includes('@')) {
    elem3.classList.add('error');
    elem3.classList.add('error');
    greateP(elem3, 'Ввведен не email.', 'error3'); // добавляем сообщение об ошибке
  }
})

// функция добавления элемента:
function greateP(elem, text, textClass) {
  let elemP = document.createElement('p'); //создали элемент <p>
  elemP.innerText = `${text}`; // вставили текст в элемент <p>
  elemP.classList.add(`${textClass}`); // вставили текст в элемент <p>
  elemP.style.color = `#f00`; // 
  form.insertBefore(elemP, elem); //добавили созданный элемент <p> 
}