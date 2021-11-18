//! 4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.
//===Мой код:====================

const button = document.getElementById('button');

button.addEventListener('click', () => {
  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;
  document.getElementById('input1').value = input2;
  document.getElementById('input2').value = input1;
});

//===Пример:====================
/*
document.getElementById("button").onclick = function () {
  let x = document.getElementById("input1").value;
  let y = document.getElementById("input2").value;

  document.getElementById("input1").value = y;
  document.getElementById("input2").value = x;
}
*/