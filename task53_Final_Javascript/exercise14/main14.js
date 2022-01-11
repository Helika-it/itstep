//! 14. Реализовать калькулятор продуктов. Он будет представлять собой таблицу, в которую пользователь будет вносить свои покупки. Покупки вносятся с помощью формы (название, цена одной единицы, количество). Кроме того, для каждого продукта предусмотреть кнопку удаления и редактирования. Редактирование также должно происходить по двойному клику по строке в таблице. Под таблицей должна выводится суммарная стоимость продуктов, которая должна пересчитываться при добавлении, удалении и редактировании продуктов.



let res = document.querySelector('.result');
let sum = 0;


document.forms.user.onsubmit = function (event) {
  if (document.querySelector(".editable")) // если есть элемент с классом ".editable" (редактируемый)
    return false; // выход

  //--- 
  let productName = this.name.value;
  let productPrice = this.price.value;
  let productNumber = this.number.value;

  //---

  let addNewProduct = function (name, price, number) {

    let productNum = document.querySelectorAll('tr').length;
    newrow = document.all.mytab.insertRow() //добавляем новую строку

    newcell = newrow.insertCell(0) //вставляем ячейку с индексом 0
    newcell.innerText = productNum //заполняем ячейку значением
    newcell = newrow.insertCell(1) //вставляем ячейку с индексом 1
    newcell.innerText = name //заполняем ячейку значением
    newcell = newrow.insertCell(2)
    newcell.innerHTML = productPrice
    newcell = newrow.insertCell(3)
    newcell.innerHTML = productNumber
    newcell = newrow.insertCell(4)
    newcell.innerHTML = `<span class="edit">&#9998;</span>`
    newcell = newrow.insertCell(5)
    newcell.innerHTML = `<span class="close">×</span>`

    //=== Итого
    sum += (productPrice * productNumber);
    console.log(sum);
    res.innerHTML = `Итого: ${sum}руб`
    //===
  }


  this.reset(); //очистка формы
  addNewProduct(productName, productPrice, productNumber);

  return false
}

//! Удаление строки при нажатии на крестик.

document.querySelector("table").addEventListener('click', function (event) {
  let close = event.target;

  if (!close.classList.contains("close"))
    return false;

  //=== Итого
  let currentElement = close.closest("tr"); // создаем переменную: родитель "tr" кнопки на которую сработал клик
  let price = currentElement.children.item(2).textContent; //  цена
  let number = currentElement.children.item(3).textContent; //  количество
  sum -= (price * number);
  console.log(sum);
  res.innerHTML = `Итого: ${sum}руб`
  //===

  close.closest("tr").remove(); // удалить строку (родителя с классом "tr")

  return false;
});


//! РЕДАКТИРОВАНИЕ
//! перенос из строки в форму для редактирования (клик по кнопке)

document.querySelector("table").addEventListener("click", function (event) { // клик в таблице

  let btn = event.target; // событие по клику

  if (!btn.classList.contains("edit")) // проверяем клик по кнопке с классом "edit"
    return false; // если не по этой кнопке - выход

  let currentElement = btn.closest("tr"); // создаем переменную: родитель "tr" кнопки на которую сработал клик

  currentElement.classList.add("editable"); // добавляем этой строке класс "editable" (редактируемый)

  let form = document.forms.user; // переменная - форма

  form.name.value = currentElement.children.item(1).textContent; // перенос в форму из строки название (строка.вседети.первыйэлемент.текст)

  form.price.value = currentElement.children.item(2).textContent; // перенос в форму из строки цена

  form.number.value = currentElement.children.item(3).textContent; // перенос в форму из строки количество

  document.querySelector(".add").classList.add("d-none"); // меняем кнопку "Добавить"
  document.querySelector(".save").classList.remove("d-none"); // на кнопку "Сохранить"

  //=== Итого

  let price = currentElement.children.item(2).textContent; //  цена
  let number = currentElement.children.item(3).textContent; //  количество
  sum -= (price * number);
  console.log(sum);
  res.innerHTML = `Итого: ${sum}руб`
  //===

  return false; // выход без перезагрузки
});

//! перенос из строки в форму для редактирования (двойной клик по строке)

document.querySelector("table").addEventListener("dblclick", function (event) { // клик в таблице

  let editing = event.target; // событие по клику

  let currentElement = editing.closest("tr"); // создаем переменную: родитель "tr" строки на которую сработал клик

  currentElement.classList.add("editable"); // добавляем этой строке класс "editable" (редактируемый)

  let form = document.forms.user; // переменная - форма

  form.name.value = currentElement.children.item(1).textContent; // перенос в форму из строки название (строка.вседети.первыйэлемент.текст)

  form.price.value = currentElement.children.item(2).textContent; // перенос в форму из строки цена

  form.number.value = currentElement.children.item(3).textContent; // перенос в форму из строки количество

  document.querySelector(".add").classList.add("d-none"); // меняем кнопку "Добавить"
  document.querySelector(".save").classList.remove("d-none"); // на кнопку "Сохранить"

  //=== Итого

  let price = currentElement.children.item(2).textContent; //  цена
  let number = currentElement.children.item(3).textContent; //  количество
  sum -= (price * number);
  console.log(sum);
  res.innerHTML = `Итого: ${sum}руб`
  //===

  return false; // выход без перезагрузки
});

//! сохранение отредактированных данных в строку
document.forms.user.addEventListener("submit", function () { //отправка формы

  let currentElement = document.querySelector(".editable") // создаем переменную с классом ".editable" (редактируемый)

  if (!currentElement) // проверяем если нет
    return false; // выход


  //! разносим опять все значения по соответствующим ячейкам:
  currentElement.children.item(1).textContent = this.name.value;

  currentElement.children.item(2).textContent = this.price.value;

  currentElement.children.item(3).textContent = this.number.value;

  currentElement.classList.remove("editable"); // удаляем у строки класс ".editable" (редактируемый)

  document.querySelector(".save").classList.add("d-none"); // меняем кнопку "Сохранить"
  document.querySelector(".add").classList.remove("d-none"); // на кнопку "Добавить"

  //=== Итого
  sum += (this.price.value * this.number.value);
  console.log(sum);
  res.innerHTML = `Итого: ${sum}руб`
  //===

  this.reset(); // очистка формы

  return false; // выход без перезагрузки страницы
});