//! 3. Дан выпадающий список с 5 цветами и блок.
//? 3.1 сделать так, что каждый пункт был закрашен в соответствующий цвет
//? 3.2 при выборе цвета сделать так, чтобы блок также закрашивался в выбранный цвет


//---мой код----------
/*
const elemSelect = document.getElementById('colors');

elemSelect.addEventListener('change', (event) => {
  elemSelect.addClass(`${event.target.classList}`);
  elemSelect.option.classList.addClass('selected');
});
*/


//---пример----------

colors.onchange = function (event) { // выбранный option в select name="colors"
  let color = this.value;
  document.querySelector('div').style.background = color; // div берет цвет из value в option
}

let options = document.querySelectorAll('option');
options.forEach(element => {
  element.style.background = element.value;
});