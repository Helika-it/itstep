let counter = 0;

document.forms.user.onsubmit = function (event) {

  if (document.querySelector(".editable")) // если есть элемент с классом ".editable" (редактируемый)
    return false; // выход

  //---
  let catName = this.name.value;
  let catColor = this.color.value;
  let catBreed = this.breed.value;
  let catSex = this.sex.value;


  let addNewCat = function (name, color, breed, sex) {
    //this.task.value = '';


    //let numCat = document.querySelectorAll('tr').length;
    newrow = document.all.mytab.insertRow() //добавляем новую строку
    newcell = newrow.insertCell(0) //вставляем ячейку с индексом 0
    newcell.innerText = counter //заполняем ячейку значением
    newcell = newrow.insertCell(1) //вставляем ячейку с индексом 1
    newcell.innerText = name //заполняем ячейку значением

    newcell = newrow.insertCell(2)
    itemDiv = document.createElement('div')
    itemDiv.style.backgroundColor = `${color}` //! цвет блока div
    itemDiv.style.width = `15px`
    itemDiv.style.height = `15px`
    newcell.append(itemDiv)

    newcell = newrow.insertCell(3)
    newcell.innerHTML = breed
    newcell = newrow.insertCell(4)
    newcell.innerHTML = sex
    newcell = newrow.insertCell(5)
    newcell.innerHTML = `<span class="edit">&#9998;</span>`
    newcell = newrow.insertCell(6)
    newcell.innerHTML = `<span class="close">×</span>`


  }
  counter++; // увеличиваем счетчик

  this.reset(); //очистка формы
  addNewCat(catName, catColor, catBreed, catSex);

  return false
}

//! Удаление строки при нажатии на крестик.

document.querySelector("table").addEventListener('click', function (event) {
  let close = event.target;

  if (!close.classList.contains("close"))
    return false;

  close.closest("tr").remove(); // удалить строку (родителя с классом "tr")

  return false;
});


//! РЕДАКТИРОВАНИЕ
//! перенос из строки в форму для редактирования

document.querySelector("table").addEventListener("click", function (event) { // клик в таблице

  let btn = event.target; // событие по клику

  if (!btn.classList.contains("edit")) // проверяем клик по кнопке с классом "edit"
    return false; // если не по этой кнопке - выход

  let currentElement = btn.closest("tr"); // создаем переменную: родитель "tr" кнопки на которую сработал клик

  currentElement.classList.add("editable"); // добавляем этой строке класс "editable" (редактируемый)

  let form = document.forms.user; // переменная - форма

  form.name.value = currentElement.children.item(1).textContent; // перенос в форму из строки кличка (строка.вседети.первыйэлемент.текст)
  form.color.value = currentElement.children.item(2).firstElementChild.style.backgroundColor; //! перенос в форму из строки цвет (не работает!!!)

  form.breed.value = currentElement.children.item(3).textContent; // перенос в форму из строки порода

  if (currentElement.children.item(4).textContent == "кот") { // перенос в форму из строки пол //! почему-то меняет на кошку?
    form.sex.value = "кот";
  } else {
    form.sex.value = "кошка";
  }

  document.querySelector(".add").classList.add("d-none"); // меняем кнопку "Добавить"
  document.querySelector(".save").classList.remove("d-none"); // на кнопку "Сохранить"

  return false; // выход без перезагрузки
});

//! сохранение отредактированных данных в строку
document.forms.user.addEventListener("submit", function () { //отправка формы

  let currentElement = document.querySelector(".editable") // создаем переменную с классом ".editable" (редактируемый)

  if (!currentElement) // проверяем если нет
    return false; // выход


  //! разносим опять все значения по соответствующим ячейкам:
  currentElement.children.item(1).textContent = this.name.value;

  currentElement.children.item(2).firstElementChild.style.backgroundColor = this.color.value;

  currentElement.children.item(3).textContent = this.breed.value;

  if (this.sex.value == "M") {
    currentElement.children.item(4).textContent = "Кот";
  } else {
    currentElement.children.item(4).textContent = "Кошка";
  }
  currentElement.classList.remove("editable"); // удаляем у строки класс ".editable" (редактируемый)

  document.querySelector(".save").classList.add("d-none"); // меняем кнопку "Сохранить"
  document.querySelector(".add").classList.remove("d-none"); // на кнопку "Добавить"

  this.reset(); // очистка формы

  return false; // выход без перезагрузки страницы
});