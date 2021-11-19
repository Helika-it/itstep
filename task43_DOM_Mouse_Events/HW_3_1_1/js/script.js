//! Основы событий мыши
//! HW. Задача 3.1.1 
/*
const elemUl = document.getElementById('ul');
const elemsLi = document.querySelectorAll('li');
const elemLi;

elemsLi.forEach((elemLi) => {
  console.log(elemLi);
})

elemUl.addEventListener('click', () => {

}
*/



// функция отслеживает клик в <ul>
ul.onclick = function (event) {
  //если не по элементу <li> -выход из функции
  if (event.target.tagName != "LI") return;

  //если в комбинации с клавишей ctrl или cmd - добавляет/смимает класс у выбранного элемента <li>(функция 1)
  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);

    // выбранному элементу <li> добавляет класс 'selected' у остальных снимает.(функция 2)
  } else {
    singleSelect(event.target);
  }

}

// предотвращает ненужное выделение элементов списка при клике
ul.onmousedown = function () {
  return false;
};

// (функция 1)
function toggleSelect(li) {
  // добавить/снять класс 'selected'
  li.classList.toggle('selected');
}

//(функция 2)
function singleSelect(li) {
  //переменная со всеми элементами с классом '.selected'
  let selected = ul.querySelectorAll('.selected');
  //цикл удаляет у каждого элемента класс 'selected'
  for (let elem of selected) {
    elem.classList.remove('selected');
  }
  // добавляет выбранному элементу класс'selected'
  li.classList.add('selected');
}