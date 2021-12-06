//! Свойства и методы формы
//! HW. Задача 4.1.1 

// Добавьте пункт к выпадающему списку
// важность: 5
/*
Имеется <select>:

Используя JavaScript:

Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным.
*/

let selectedOption = genres.options[genres.selectedIndex];
console.log(selectedOption.value);
console.log(selectedOption.text);

let newOption = new Option('Классика', 'classik', true, true);
genres.append(newOption);


// --- из учебника: ----------------------
/*
// 1)
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

// 2)
let newOption = new Option("Классика", "classic");
genres.append(newOption);

// 3)
newOption.selected = true;
*/