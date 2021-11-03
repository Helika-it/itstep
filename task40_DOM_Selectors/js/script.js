let element = document.getElementById("first-element");

let elements = document.getElementsByTagName("div");

console.log(elements.length);

let sections = document.getElementsByClassName("first-section");

let section = sections.item(0);// sections[0];

let sectionDivs = section.getElementsByTagName("div");

console.log(sectionDivs.length);

let divs = document.querySelectorAll(".first-section div");

console.log(divs.length);

/*=================================*/

//! 1. Элемент: #first-element. 
//! 1.1 поменяйте "Я сосед" на "Я хороший сосед"

sections = document.getElementsByClassName('first-section');
section = sections.item(0);
let neighbors = section.getElementsByClassName('neighbor');

for (let i = 0; i < neighbors.length; i++) {
  neighbors.item(i).innerHTML = "Я хороший сосед";
}


//! 1.2  добавить к каждому соседу его номер, например, "Я хороший сосед №2"

for (let i = 0; i < neighbors.length; i++) {
  neighbors.item(i).innerHTML = `Я хороший сосед №${i+1}`;
}

//! 1.3 оберните текст в элементах с классом "neighbor" в тег span

neighbors = section.getElementsByClassName('neighbor');
for (let i = 0; i < neighbors.length; i++) {

  neighbors.item(i).innerHTML = `<span>${neighbors.item(i).innerHTML}</span>`;

}


//! 1.4 замените теги span на тег b

for (let i = 0; i < neighbors.length; i++) {

  let span = neighbors.item(i).getElementsByTagName("span").item(0);
  span.outerHTML = `<b>${span.innerHTML}</b>`;

}


//! 1.5 замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"

let b = document.querySelectorAll(".fourth-neighbor b");

console.log(b.item(0));

b.item(0).outerHTML = `<b>${'Я последний хороший сосед'}</b>`;




/*=======================================================*/

//! 2. Элемент: #second-element.
//! 2.1 добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.

/*
let secondElement = document.getElementById("second-element")

let out = `<ul>`

for (let i = 1; i <= 10; i++) {
    out += `<li>Пункт ${i}</li>`;
}
    out+= `</ul>`;

secondElement.insertAdjacentHTML('beforeend', out);
*/

//! или:

let secondElement = document.getElementById("second-element");

let ul = document.createElement('ul');

for(let i = 1; i <= 10; i++) {
  let li = document.createElement('li');
  li.innerHTML = `Пункт №${i}`;
  ul.appendChild(li);
}

secondElement.appendChild(ul);



//! 2.2 каждый четный пункт покрасить в красный цвет


secondElement = document.getElementById("second-element");

let elementsLi = secondElement.getElementsByTagName('li');
console.log(elementsLi);

for (let i = 0; i <= elementsLi.length; i++) {
  if (i % 2 != 0) {
    elementsLi[i].style.color = "#f00";
  }
}


//!или:
/*
let evenItems = document.querySelectorAll("#second-element ul li:nth-child(2n)");
evenItems.forEach(function(item){
  item.style.color = "#f00";
})
*/
//!или:
/*
evenItems = secondElement.getElementsByTagName('li');
for ( i = 0; i < evenItems.length; i++){
  if (i % 2 == 1) {
    evenItems.item(i).style.color = "#f00";
  }
}
*/




//! 2.3 каждому нечетному пункту добавить класс odd-element

secondElement = document.getElementById("second-element");

elementsLi = secondElement.getElementsByTagName('li');

for (let i = 0; i <= elementsLi.length-1; i++) {
  if (i % 2 == 0) {
    elementsLi[i].classList.add("odd-element");
  }
}

//!или:
/*
let oddItems = document.querySelectorAll("#second-element ul li:nth-child(2n+1)");
oddItems.forEach(function(item){
  item.classList.add("odd-element");
})
*/


//! 2.4 элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.

secondElement = document.getElementById("second-element");

elementsLi = secondElement.getElementsByTagName('li');

for (let i = 2; i <= elementsLi.length-1; i+=3) {
  
  if (elementsLi[i].classList.contains("odd-element")){
    elementsLi[i].style.fontSize = "32px";
  }

}  

//!или:
/*
let items = document.querySelectorAll("#second-element ul li:nth-child(3n)");
items.forEach(function(item){
  if(item.classList.contains("odd-element")){
    item.style.fontSize = "32px"
  }
})
*/


/*=======================================================*/

//!  3. Элемент: #third-element.
//! 3.1 заменить теги b на strong

let thirdElement = document.getElementById("third-element");

let tagsB = thirdElement.getElementsByTagName("b");


//console.log("3.1 заменить теги b на strong");
//console.log(tagsB);
//console.log(tagsB.length);

//!  Цикл работает только с первым <b> т.к длина массива динамически меняется. По-этому длину массива выносим из цикла в "х" и обращаемся к 0-му эл-ту!:
let x = tagsB.length;

for (let i = 0; i < x; i++) {
  
  tagsB[0].outerHTML = `<strong>${tagsB[0].innerHTML}</strong>`;
  //tagsB.item(0).outerHTML = `<strong>${tagsB.item(0).innerHTML}</strong>`;  

}



//! 3.2 удалить в тегах strong все теги, т.е. должен остаться только текст


thirdElement = document.getElementById("third-element");

let tagsStrong = thirdElement.getElementsByTagName("strong");

console.log(tagsStrong);

for (let i = 0; i < tagsStrong.length; i++) {

  if (tagsStrong[i].getElementsByTagName('em')) {

    let tagsStrongWidautTags = tagsStrong[i].getElementsByTagName('em')

    for (let i = 0; i < tagsStrongWidautTags.length; i++) {

      tagsStrongWidautTags[i].outerHTML = `${tagsStrongWidautTags[i].innerHTML}` 

    }
  }

  if (tagsStrong[i].getElementsByTagName('i')) {

    let tagsStrongWidautTags = tagsStrong[i].getElementsByTagName('i')

    for (let i = 0; i < tagsStrongWidautTags.length; i++) {

      tagsStrongWidautTags[i].outerHTML = `${tagsStrongWidautTags[i].innerHTML}` 

    }
  }
}

//!или:
/*
let tagsStrong = thirdElement.getElementsByTagName("strong");

for(let i = 0; i < tagsStrong.length; i++){
    let x = tagsStrong.item(i);
    let newContent = "";
    for(let j = 0; j < x.childNodes.length; j++){
        newContent += x.childNodes.item(j).textContent;
    }
    x.innerHTML = newContent;
}  
*/

//! 3.3 обернуть каждое слово в тег span 

//? это не работает :(
/*
thirdElement = document.getElementById("third-element");

let isChildrenThirdElement = thirdElement.children;
console.log(isChildrenThirdElement);

let theWords = [];

for (let i = 0; i < isChildrenThirdElement.length; i++) {

  let theText = isChildrenThirdElement[i].innerText;
  theWords += `${theText.split(` `)} `;

}
theWords = theWords.split(`,`) //! ?????
console.log(theWords);

//! ????? 

for (let i =0; i < theWords.length; i++) {
  theWords[i] = `<span>${theWords[i]}</span>`;
}
console.log(theWords);
*/

//! А так работает :) 

thirdElement = document.getElementById("third-element");

tagsStrong = thirdElement.getElementsByTagName("strong");

for (let i = 0; i < tagsStrong.length; i++) {
  let words = tagsStrong.item(i).textContent.split(' ');//вынесли в массив слова (сплит по пробелу)
  tagsStrong.item(i).innerHTML = ''; //очистили содержимое стронга
  words.forEach(function(word){ // для каждого слова
    let span = document.createElement('span');// создаем спан
    span.textContent = ` ${word}`; // в спан вставляем контент: слово
    tagsStrong.item(i).appendChild(span);//  в хтмл в стронг добавляем дочерний элемент спан уже с контентом
  });
}


/*=======================================================*/

//! 4. Элемент: #fourth-element
//! 4.1 Выведите на экран текст из всех тегов div

let fourthElement = document.getElementById("fourth-element");

//! мой вариант решения:
/* 
let divElements = fourthElement.previousElementSibling.previousElementSibling.innerText;
divElements +=` ${fourthElement.previousElementSibling.innerText}`;
divElements +=` ${fourthElement.nextElementSibling.innerText}`;
divElements +=` ${fourthElement.nextElementSibling.nextElementSibling.innerText}`;

divElements +=` ${fourthElement.innerText}`;

console.log(divElements);
console.log(divElements.length);
*/
//! или:

let divElements = fourthElement.parentElement.getElementsByTagName("div");

for(let i = 0; i < divElements.length; i++){
    console.log(divElements.item(i).textContent);
}


//! 4.2 Поменяйте местами содержимое тегов div в обратном порядке, при этом теги остаются на месте, меняется только текст

let texts = [];
for(let i = 0; i < divElements.length; i++){
    texts.push(divElements.item(i).textContent);
}
texts.reverse();
for(let i = 0; i < divElements.length; i++){
  divElements.item(i).textContent = texts[i];
}

//! 4.3 удалить третьего "соседа"

divElements.item(1).remove(); //divElements.item(1).outerHTML = "";

//! 4.4 добавить "пятого" соседа после четвертого

divElements.item(0).insertAdjacentHTML("afterend", "<div>Я пятый сосед</div>");

//! 4.5 пятому соседу добавить границу, внутренние отступы и фон

divElements.item(1).style.border = "1px solid #000";
divElements.item(1).style.padding = "10px";
divElements.item(1).style.backgroundColor = "#ff0";

/*=======================================================*/

//! 5 Сделать пятый элемент "fifth-element" по аналогии с первым (применить createElement)

let fifthElements = document.getElementById("fifth-element");

// добавляю соседей
let newDiv1 = document.createElement('div');
newDiv1.textContent = 'Я сосед';
newDiv1.classList.add("first-neighbor");
newDiv1.classList.add("neighbor");
fifthElements.parentElement.parentElement.append(newDiv1);

let newDiv2 = document.createElement('div');
newDiv2.textContent = 'Я сосед';
newDiv2.classList.add("second-neighbor");
newDiv2.classList.add("neighbor");
fifthElements.parentElement.parentElement.append(newDiv2);

let newDiv3 = document.createElement('div');
newDiv3.textContent = 'Я сосед';
newDiv3.classList.add("third-neighbor");
newDiv3.classList.add("neighbor");
fifthElements.parentElement.parentElement.appendChild(newDiv3);

let newDiv4 = document.createElement('div');
newDiv4.textContent = 'Я сосед';
newDiv4.classList.add("fourth-neighbor");
newDiv4.classList.add("neighbor");
fifthElements.parentElement.parentElement.append(newDiv4);

// выношу элемент из дива
fifthElements.parentElement.outerHTML = `${fifthElements.outerHTML}`;

// расставляю по местам
let itemListParent = document.getElementById("fifth-element").parentNode;
console.log(itemListParent);
let itemList = itemListParent.getElementsByTagName('div');

itemListParent.insertBefore(itemList[0], itemList[3]);

// можно было таким способом:
//fifthElements.parentElement.insertAdjacentHTML("beforebegin", "<div class="first-neighbor neighbor">Я сосед</div>")

