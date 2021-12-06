//! 3. Дано 10 блоков. Сделать так, что при наведении в блоке менялась прозрачность фона и выводился порядковый номер блока, а при уведении курсора все возвращалось в исходное состояние.

const parent = document.querySelector(".parentElement") //находим родительский элемент

parent.addEventListener('mouseover', (event) => { // при наведении на родительский

  if (event.target.classList.contains("childElement")) { //если содержит дочерний
    event.target.classList.add("bg-transparent"); //дочернему добавляется класс "bg-transparent"
    event.target.classList.remove("bg-blue"); // и удаляется класс "bg-blue"
    event.target.innerText = event.target.getAttribute('data-num'); //у этого элемента извлекаем значение атрибута и помещаем в элемент
  }

});

parent.addEventListener('mouseout', (event) => { //при уходе с элемента

  if (event.target.classList.contains("childElement")) { // если дочерний
    event.target.classList.add("bg-blue"); // возвращаем "bg-blue"
    event.target.classList.remove("bg-transparent"); // удаляем "bg-transparent"
    event.target.innerText = ''; // очищаем содержимое
  }
});