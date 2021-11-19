//! 2. Дан маркированный список из 5 пунктов с произвольным текстом

//? 2.1 при клике на какой-либо элемент списка, этот элемент должен менять цвет на красный, причем всегда должен быть только 1 выделенный элемент;


ul.onclick = function (event) {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
}

// предотвращает ненужное выделение элементов списка при клике
ul.onmousedown = function () {
  return false;
};

function toggleSelect(li) {
  li.classList.toggle('selected');
}

function singleSelect(li) {
  let selected = ul.querySelectorAll('.selected');
  for (let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected');
}

//---------------------

//? 2.2  при двойном клике элемент должен дублироваться и копия помещаться в конец списка;

const elemUl = document.getElementById('ul');

elemUl.addEventListener('dblclick', (event) => { //при событии "двойной клик"
  if (event.target.tagName != "LI") { // проверяем клик. Если не по элементу <li>
    return; //выход
  } else {
    greateLi(event.target); // если элемент <li>, то вызов функции добавления элемента.
  }
})

// функция добавления элемента:
function greateLi(elem) {
  let elemLi = document.createElement('li'); //создали элемент <li>
  elemLi.innerText = `${elem.innerText}`; // вставили текст в элемент <li>
  elemUl.appendChild(elemLi); //добавили созданный элемент <li> как дочерний
}

//----------------

//? 2.3 при наведении на элемент текст должен становится полужирным (использовать тег b для этого), при убирании курсора - возвращаться в исходное состояние;

elemUl.addEventListener('mouseover', (event) => {
  if (event.target.tagName == "LI") {
    event.target.innerHTML = `<b>${event.target.innerText}</b>`
  }
});
elemUl.addEventListener('mouseout', (event) => {
  if (event.target.tagName == "LI") {
    event.target.innerHTML = `${event.target.innerText}`;
  }
});