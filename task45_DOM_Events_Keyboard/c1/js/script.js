//! 1. Дан список из 3 произвольных пунктов.
//? 1.1 При нажатии на сочатние "Ctrl" + "+" добавить новый пункт;
//? 1.2 При нажатии на сочатние "Ctrl" + "-" удалить последний пункт, если такое возможно.

document.addEventListener('keydown', (event) => { //кнопка нажатие

  if (event.key == '=' && event.ctrlKey) { //если событие.ключ со значением для (+) и событие.ключ со значением для (CTRL)
    let li = document.createElement('li'); // создаем элемент списка 'li'
    li.textContent = `Пункт ${document.querySelectorAll('ul > li').length + 1}`; //доб.содержимое
    document.querySelector('ul').append(li); // в конец <ul> вставляем <li>
  }

  if (event.key == '-' && event.ctrlKey) { //если событие.ключ со значением для (-) и событие.ключ со значением для (CTRL)
    if (document.querySelectorAll('ul>li').length > 0) { // если длина списка больше 0, 
      document.querySelector('ul>li:last-child').remove(); // удаляем последний элемент списка
    }
  }
  return false; // иначе выход
});



// функция добавления элемента:
function greateLi(elem) {
  let elemLi = document.createElement('li'); //создали элемент <li>
  elemLi.innerText = `Новый пункт списка`; // вставили текст в элемент <li>
  elem.appendChild(elemLi); //добавили созданный элемент <li> как дочерний
}