document.forms.user.onsubmit = function (event) {
  let catName = document.forms.user.name.value;
  let catColor = document.forms.user.color.value;
  let catBreed = document.forms.user.breed.value;
  let catSex = document.forms.user.sex.value;
  //document.querySelector('.d-none').classList.remove('.d-none')

  let addNewCat = function (name, color, breed, sex) {
    //this.task.value = '';
    document.forms.user.name.value = '';
    document.forms.user.color.value = '#000000';
    document.forms.user.breed.value = '';
    document.forms.user.sex.value = '';

    let numCat = document.querySelectorAll('tr').length;
    newrow = document.all.mytab.insertRow() //добавляем новую строку
    newcell = newrow.insertCell(0) //вставляем ячейку с индексом 0
    newcell.innerText = numCat //заполняем ячейку значением
    newcell = newrow.insertCell(1) //вставляем ячейку с индексом 1
    newcell.innerText = name //заполняем ячейку значением

    newcell = newrow.insertCell(2)
    itemDiv = document.createElement('div')
    itemDiv.style.backgroundColor = `${color}`
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
  addNewCat(catName, catColor, catBreed, catSex);

  return false
}

//! Удаление строки при нажатии на крестик.
const table = document.querySelector('table'); // получили таблицу
const row = document.querySelectorAll('tr'); // получили все строки
const col = document.querySelectorAll('td'); // полусили все ячейки

document.querySelector("table").addEventListener('click', function (event) {
  let close = event.target;

  if (!close.classList.contains("close"))
    return false;

  //! Срабатывает с подсветкой

  close.closest("tr").classList.add("highlight"); // находим родителя <tr> для сработавшей ячейки и добавляем класс "highlight" всем элементам 
  // (closest - возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет)
  close.closest("table").querySelectorAll("tr").forEach( // находим родителя (т.е саму таблицу), в ней все <tr> для сработавшей ячейки и делаем перебор :
    // Свойство cells хранит коллекцию ячеек td и th строки tr. Применяется только к ряду таблицы.
    row => row.cells[close.cellIndex].classList.add("highlight") // добавляем класс "highlight" всем элементам с индексом как у сработавшей ячейки (т.е к столбцу)
  );

  //! как переписать на удаление?:
  /*
    close.closest("tr").deleteRow[event.target];

    close.closest("table").querySelectorAll("tr").forEach( 
      row => row.cells[close.cellIndex].deleteRow[event.target]
    );
  */
  return false;
});