var counter = 1; // счетчик, для нумерации 

//! добавление строки в таблицу
document.forms.cat_form.onsubmit = function () { //отправка формы

  if (document.querySelector(".editable")) // если есть элемент с классом ".editable" (редактируемый)
    return false; // выход

  let name = this.name.value; // извлекаем кличку
  if (name == "") // если пусто
    return false; // выход

  let color = this.color.value; // извлекаем цвет

  let breed = this.breed.value; // извлекаем породу

  if (!breed) // если не выбран
    return false; // выход

  let sex = this.sex.value; // пол

  // вставляем сразу "паттер"(шаблон) строки из HTML
  let pattern = ` <tr data-id="${counter}"> 
                        <td>${counter}</td>
                        <td>${name}</td>
                        <td>
                            <div class="color-block" style="background: ${color};">

                            </div>
                        </td>
                        <td>${breed}</td>
                        <td>${(sex == "M") ? "Кот" : "Кошка"}</td>
                        <td>
                            <button type="button" class="btn btn-success">✎</button>
                            <button type="button" class="btn btn-danger">×</button>
                        </td>
                    </tr>`;

  document.querySelector("table tbody").insertAdjacentHTML("beforeend", pattern); // в конец в таблицы вставляем паттерн
  counter++; // увеличиваем счетчик

  this.reset(); //очистка формы

  return false; // выход без перезагрузки
}

//! удаление строки кликом по крестику
document.querySelector("table tbody").onclick = function (event) { // по клику в таблице:

  let btn = event.target; //кнопка, где сработало событие "клик"

  if (!btn.classList.contains("btn-danger")) // проверяем, что клик по кнопке (если нет класса "btn-danger")
    return false; // ничего не делать

  btn.closest("tr").remove(); // удалить строку (родителя с классом "tr")

  return false; // выход без перезагрузки
}

//! РЕДАКТИРОВАНИЕ
//! перенос из строки в форму для редактирования
document.querySelector("table tbody").addEventListener("click", function (event) { // клик в таблице

  let btn = event.target; // событие по кнопке

  if (!btn.classList.contains("btn-success")) // проверяем клик по кнопке с классом "btn-success"
    return false; // если не по этой кнопке - выход

  let currentElement = btn.closest("tr"); // создаем переменную: родитель "tr" кнопки на которую сработал клик

  currentElement.classList.add("editable"); // добавляем этой строке класс "editable" (редактируемый)

  let form = document.forms.cat_form; // переменная - форма

  form.name.value = currentElement.children.item(1).textContent; // перенос в форму из строки кличка (строка.вседети.первыйэлемент.текст)
  form.color.value = currentElement.children.item(2).firstElementChild.style.backgroundColor; // перенос в форму из строки цвет

  form.breed.value = currentElement.children.item(3).textContent; // перенос в форму из строки порода

  if (currentElement.children.item(4).textContent == "Кот") { // перенос в форму из строки пол
    form.sex.value = "M";
  } else {
    form.sex.value = "F";
  }

  document.querySelector(".add").classList.add("d-none"); // меняем кнопку "Добавить"
  document.querySelector(".save").classList.remove("d-none"); // на кнопку "Сохранить"

  return false; // выход без перезагрузки
});

//! сохранение отредактированных данных в строку
document.forms.cat_form.addEventListener("submit", function () { //отправка формы

  let currentElement = document.querySelector(".editable") // создаем переменную с классом ".editable" (редактируемый)

  if (!currentElement) // проверяем если нет
    return false; // выход

  let form = this; // (чтобы не переписывать)  this это форма на которой отслеживаем событие
  //! разносим опять все значения по соответствующим ячейкам:
  currentElement.children.item(1).textContent = form.name.value;

  currentElement.children.item(2).firstElementChild.style.backgroundColor = form.color.value;

  currentElement.children.item(3).textContent = form.breed.value;

  if (form.sex.value == "M") {
    currentElement.children.item(4).textContent = "Кот";
  } else {
    currentElement.children.item(4).textContent = "Кошка";
  }
  currentElement.classList.remove("editable"); // удаляем у строки класс ".editable" (редактируемый)

  document.querySelector(".save").classList.add("d-none"); // меняем кнопку "Сохранить"
  document.querySelector(".add").classList.remove("d-none"); // на кнопку "Добавить"

  form.reset(); // очистка формы

  return false; // выход без перезагрузки страницы
});