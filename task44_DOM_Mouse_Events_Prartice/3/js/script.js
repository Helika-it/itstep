//! 3. Дана шахматная таблица 4х4 и 3 кнопки
//? 3.1 при нажатии на первую кнопку на доску случайным образом должна помещаться шашка в одну из клеток. Если шашка уже стоит, то она должна удалятся и ставится новая;

let buttonAddElem = document.querySelector(".addElem");

buttonAddElem.addEventListener('click', () => {
  let elemsTd = document.querySelectorAll('td');
  let arrElemsTd = [];

  elemsTd.forEach(item => {
    item.innerHTML = ''
    arrElemsTd.push(item);
  });

  let randomTd = arrElemsTd[Math.floor(Math.random() * arrElemsTd.length)];

  greateDiv(randomTd);
});


// функция случайного выбора ячейки td:
//function getRandomTd() {};


// функция добавления элемента:
function greateDiv(elem) {
  let elemDiv = document.createElement('div'); //создали элемент <div>
  elemDiv.style.width = '60px';
  elemDiv.style.height = '60px';
  elemDiv.style.backgroundColor = 'rgb(130, 130, 130)';
  elemDiv.style.borderRadius = '50%';
  elem.appendChild(elemDiv); //добавили созданный элемент <li> как дочерний
};

//-------------------
//? 3.2 при нажатии на вторую кнопку черные клетки должны меняться на белые, а белые - на черные;

let buttonChange = document.querySelector(".change");

buttonChange.addEventListener('click', () => {
  let elemsTd = document.querySelectorAll('td');
  /*
  for (const item of elemsTd) {
    if (item.classList.contains("black")) {
      item.classList.remove("black");
    }
    if (item.classList.contains("white")) {
      item.classList.remove("white");
      item.classList.add("black");
    }
  };
  */
  for (const item of elemsTd) {
    item.classList.toggle('white');
    item.classList.toggle('black');
  };
});

//----------------------
//? 3.3 при нажатии на третью кнопку доска должна поворачиваться на 90 градусов (использовать CSS-анимацию)

let buttonExpand = document.querySelector(".expand");
let angle = 0;

buttonExpand.addEventListener('click', () => {
  angle += 90;
  let elemTable = document.querySelector('table');
  elemTable.style.transitionTimingFunction = 'linear';
  elemTable.style.transitionDuration = '1s';
  elemTable.style.transform = `rotate(${angle}deg)`;
});