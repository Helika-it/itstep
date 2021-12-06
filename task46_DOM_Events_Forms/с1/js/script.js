//! 1. Дана форма с одним полем ввода.
// 1.1 при унастновки курсора в поле ввода закрашивать ее в синий цвет.
// 1.2 при убирании курсора из поля возвращать фон в начальное состояние.


// получаем форму
let form = document.forms.my; // <form name="my"> element

// получаем элемент
let elem = form.elements.text; // <input name="text"> element


// установить обработчик на фазе перехвата (последний аргумент true)
town.addEventListener("focusin", () => town.classList.add('focused'));
town.addEventListener("focusout", () => town.classList.remove('focused'));