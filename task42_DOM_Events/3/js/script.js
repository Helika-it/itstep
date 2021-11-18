//! 3. Дано: кнопка и div с 3 различными классами. По нажатию на кнопку вывести в div нумерованный список с этими классами.

//===Мой код (продолжает список):======================
/*
let classes = document.getElementsByTagName('div').item(0).classList;
let itemOl = document.createElement('ol');
let button = document.getElementById('button');

button.addEventListener('click', () => {
  for (let i = 0; i < classes.length; i++) {
    let itemLi = document.createElement('li');
    itemLi.textContent = classes.item(i);
    itemOl.append(itemLi);
  }
  document.getElementsByTagName('div').item(0).append(itemOl);
});
*/

//===Мой код (добавляет списки):======================

let classes = document.getElementsByTagName('div').item(0).classList;
let button = document.getElementById('button');

button.addEventListener('click', () => {
  let itemOl = document.createElement('ol');
  for (let i = 0; i < classes.length; i++) {
    let itemLi = document.createElement('li');
    itemLi.textContent = classes.item(i);
    itemOl.append(itemLi);
  }
  document.getElementsByTagName('div').item(0).append(itemOl);
});

//===Пример:=======================
/*
document.getElementById('button').onclick = function () {
  let classes = document.getElementsByTagName('div').item(0).classList;
  let itemOl = document.createElement('ol');

  for (let i = 0; i < classes.length; i++) {
    let itemLi = document.createElement('li');
    itemLi.textContent = classes[i];
    itemOl.appendChild(itemLi);
  }
  document.getElementsByTagName('div').item(0).append(itemOl);
}
*/