//! 7. Дана: кнопка и поле. При нажатии на кнопку, удалить все цифры из поля ввода.
//?===Мой код===========================

const button = document.getElementById('button');

button.addEventListener('click', () => {
  let textInput = document.querySelector('input').value;
  let arr = textInput.split('');
  let string;

  arr.filter(function (item) {
    if (isNaN(+item) == true) {
      string += arr.join('');
    };
    return
  });


  document.querySelector('input').textContent = string;
})

//?===Пример=================
/*
document.getElementById("button").onclick = function () {

  let str = document.querySelector("input").value;

  let newStr = str.split("").filter(function (item) {
    return isNaN(+item) == true;
  }).join("");

  document.querySelector("input").value = newStr;
}
*/