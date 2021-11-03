//= 1 ==================================================
//! 1. Элемент: #first-element.
// - Добавьте ему класс www.

let element = document.getElementById("first-element");
console.log(element.tagName);
console.log(element);
element.classList.add("www");


// - Удалите у него класс www.

element.classList.remove("www");
console.log(element);

// - Проверьте наличие у него класса www.

let isContains = element.classList.contains("www");
console.log(isContains);

// - Добавьте ему класс www, если его нет и удалите - если есть.

element = document.getElementById("first-element");
element.classList.toggle("www");
console.log(element);

//  - Узнайте количество его классов.

element = document.getElementById("first-element");
console.log(element.classList.length);

//- Выведите последовательно через console.log его классы.

for (i= 0; i < element.classList.length; i++){
  console.log(element.classList.item(i));
}

// - Сделайте его красного цвета, размером 30px, добавьте ему границу

element = document.getElementById("first-element");
element.style.color = '#f00';
element.style.height = '30px';

//  - Выведите название его тега в нижнем регистре

console.log(element.tagName.toLowerCase());

//  - Вставьте ему в конец span с текстом 'мой любимый спан'

element = document.getElementById("first-element");
element.insertAdjacentHTML('beforeend', `<span>мой любимый спан</span>`);

// - Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.

element = document.getElementById("first-element");
//element.insertAdjacentHTML('afterend', `<ul><li>createElement</li><li>appendChild</li><li>insertBefore</li></ul>`);

let elements = ["createElement", "appendChild", "insertBefore"];

let out = "<ul>";

elements.forEach(function(element){
  out += `<li>${element}</li>`;
});
out += "</ul>";

element.insertAdjacentHTML('afterend', out);

// или:
//? element.innerHTML += out;

// - Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'

element = document.getElementById("first-element");
element.insertAdjacentHTML('beforebegin', `<div class="neighbor">еще один сосед</div>`);


//= 2 ========================================================

//!  2. Элемент: #second-element.

//  2.1- Вставьте перед ним span с текстом '!!!'.

element = document.getElementById("second-element");
element.insertAdjacentHTML('beforebegin', `<span>!!!2.1</span>`);

//  2.2- Вставьте после него span с текстом '!!!'.

element = document.getElementById("second-element");
element.insertAdjacentHTML('afterend', `<span>!!!2.2</span>`);

// 2.3- Вставьте ему в начало span с текстом '!!!'.

element = document.getElementById("second-element");
element.insertAdjacentHTML('afterbegin', `<span>!!!2.3</span>`);

// 2.4- Вставьте ему в конец span с текстом '!!!'.

element = document.getElementById("second-element");
element.insertAdjacentHTML('beforeend', `<span>!!!2.4</span>`);

//!  3. Элемент: #third-element.

//3.1- Найдите первого потомка этого элемента и сделайте его текст красного цвета.

element = document.getElementById("third-element");
let isFirstChild = element.firstElementChild;
isFirstChild.style.color = '#f00';

//3.2- Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

element = document.getElementById("third-element");
let isLastChild = element.lastElementChild;
isLastChild.style.color = '#f00';

//!3.3- Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

element = document.getElementById('third-element');

let isChildren = element.children;

for (let i = 0; i < isChildren.length; i++) {
  console.log(isChildren[i]);
  `${isChildren[i].insertAdjacentHTML('beforeend', '!3.3')}`;
}


//! 4. Элемент: #fourth-element

// - Найдите его соседа сверху и добавьте ему в конец текст '!'.

element = document.getElementById('fourth-element');

let isPreviousSibling = element.previousElementSibling;

isPreviousSibling.insertAdjacentHTML('beforeend', `!4.1`);

// - Найдите его соседа снизу и добавьте ему в конец текст '!'.

element = document.getElementById('fourth-element');

let isNextSibling = element.nextElementSibling;

isNextSibling.insertAdjacentHTML('beforeend', `!4.2`);

//! - Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. 

element = document.getElementById('fourth-element');
console.log(element);

let isNextNextSibling = element.nextElementSibling.nextElementSibling;
console.log(isNextNextSibling);

isNextNextSibling.insertAdjacentHTML('beforeend', `!4.3`);


//! 5. Элемент: #fifth-element

// - Найдите его родителя и покрасьте его в синий цвет.

element = document.getElementById('fifth-element');

let isParent = element.parentElement;
isParent.style.color = '#00f'

// - Найдите родителя его родителя и покрасьте его в желтый цвет.

element = document.getElementById('fifth-element');

 isParent = element.parentElement;
let isParentParent = element.parentElement.parentElement;
isParent.style.color = '#ff0'