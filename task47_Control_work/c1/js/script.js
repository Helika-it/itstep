//! 1. Дано поле ввода и кнопка. Вводится число. При нажатии сгенерировать маркированный список из чисел от 1 до введенного.



document.getElementById('сreate').onclick = function () {
  let uls = document.getElementsByTagName('ul');
  let ul;

  if (uls.length == 0) { //если длина списка 0
    ul = document.createElement('ul'); //создать элемент <ul>
    document.getElementById('result').appendChild(ul); // в 'result' добавить дочерний элемент <ul>
  } else {
    ul = uls.item(0);
  }
  let x = +document.getElementById('num').value; //получаем содержимое в виде числа

  if (isNaN(x)) // если не число-выход
    return;

  let countLi = document.getElementsByTagName("li").length; // количество элементов "li"
  for (let i = countLi; i < x + countLi; i++) {
    let li = document.createElement('li'); //создать элемент "li"
    li.innerHTML = `Пункт ${i+1}`; // вставить номер пункта
    ul.appendChild(li);
    // в <ul> добавить дочерний элемент <li>
  }
}