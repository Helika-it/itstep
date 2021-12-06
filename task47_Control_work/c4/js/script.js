//! 4. Дано поле ввода. В поле ввода вводятся чиcла через пробел. Сделать так, чтобы при наборе текста в поле выводилась сумма этих чисел.

const textInput = document.querySelector('input');
const result = document.querySelector('p');



textInput.addEventListener('keyup', (event) => { // обработчик события на инпут
  let sum = 0;
  let textOutput = event.target.value;

  let arr = textOutput.split(' ')

  arr.forEach(function (item, index, arr) {
    sum = sum + (+arr[index]);
    console.log(sum);
  });
  result.textContent = sum;
  console.log(result);
});