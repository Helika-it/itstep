//! 1. Добавить возможность добавлять новые задания через форму. Новое задание должно помещаться в конец списка.

var editElement = null;

document.forms.todo_form.onsubmit = function (event) {

  if (editElement != null) {
    editElement.firstChild.textContent = this.task.value;
    this.task.value = "";
    editElement = null;
    document.querySelector(".btn").innerHTML = "Добавить";
    return false;
  }

  let item = this.task.value;
  if (item.trim() == "")
    return false;


  let nextExercise = document.forms.todo_form.task.value;
  let elementUl = document.querySelector('#list');

  let itemLi = document.createElement('li');

  itemLi.draggable = true;
  itemLi.textContent = item.trim();
  itemLi.innerHTML = `${nextExercise}<span class="edit">&#9998;</span><span class="close">×</span>`;
  elementUl.append(itemLi);

  this.task.value = '';

  event.preventDefault();
  event.stopPropagation();
  return false;

};

//! 2. При нажатии на задание оно должно становится выполненным, если не выполнено, и наоборот.

document.querySelector('#list').addEventListener('click', function (event) {
  let current = event.target;

  if (current.tagName != 'LI')
    return false;

  current.classList.toggle('checked');
  return false;
});

//! 3. Добавить возможность удаления задания при нажатии на крестик.

document.querySelector("ul").addEventListener('click', function (event) {
  let close = event.target;

  if (!close.classList.contains("close"))
    return false;

  close.parentElement.remove();
  return false;
});

//! 4*. Добавить возможность редактирования задания через форму добавления. Реализацию продумать самим.

document.querySelector("ul").addEventListener("click", function (event) {
  let current = event.target;

  if (!current.classList.contains("edit"))
    return false;

  editElement = current.closest("li");

  task.value = editElement.firstChild.textContent;

  document.querySelector(".btn").innerHTML = "Сохранить";

  return false;
})

//! 5*. Возможность изменения порядка событий через перетаскивание. 

// 1. Разрешим перетаскивание элементов
const tasksListElement = document.querySelector(`ul`);
const taskElements = tasksListElement.querySelectorAll(`li`);

// Перебираем все элементы списка и присваиваем нужное значение
for (const task of taskElements) {
  task.draggable = true;
}

// 2. Добавим реакцию на начало и конец перетаскивания
tasksListElement.addEventListener(`dragstart`, (event) => {
  event.target.classList.add(`selected`);
})

tasksListElement.addEventListener(`dragend`, (event) => {
  event.target.classList.remove(`selected`);
});

// 3. Реализуем логику перетаскивания
tasksListElement.addEventListener(`dragover`, (event) => {
  // Разрешаем сбрасывать элементы в эту область
  event.preventDefault();

  // Находим перемещаемый элемент
  const activeElement = tasksListElement.querySelector(`.selected`);
  // Находим элемент, над которым в данный момент находится курсор
  const currentElement = event.target;
  // Проверяем, что событие сработало:
  // 1. не на том элементе, который мы перемещаем,
  // 2. именно на элементе списка
  const isMoveable = activeElement !== currentElement //&& currentElement.tagName(`li`);

  // Если нет, прерываем выполнение функции
  if (!isMoveable) {
    return;
  }
  //---

  //---
  // Находим элемент, перед которым будем вставлять
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
    currentElement.nextElementSibling :
    currentElement;

  // Вставляем activeElement перед nextElement
  tasksListElement.insertBefore(activeElement, nextElement);
});

// 4. Учтём положение курсора относительно центра
const getNextElement = (cursorPosition, currentElement) => {
  // Получаем объект с размерами и координатами
  const currentElementCoord = currentElement.getBoundingClientRect();
  // Находим вертикальную координату центра текущего элемента
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

  // Если курсор выше центра элемента, возвращаем текущий элемент
  // В ином случае — следующий DOM-элемент
  const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;

  return nextElement;
};

//! 6*. Добавить возможность отмены редактирования на клавишу Esc.
document.onkeydown = function (event) {
  if (event.code == "Escape" && editElement !== null) {
    editElement = null;
    document.querySelector(".btn").innerHTML = "Добавить";
    task.value = "";
  }

}