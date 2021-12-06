//! 5. Дано 2 поля ввода для чисел и 4 радиокнопки (+,-,*,/). Выводить результат выбранной операции над 2 числами, когда выбирается сама операция. В случае неккоретного ввода чисел предусмотреть вывод сообщения об этом вместо результата.

//--- код переписан по примеру ----------------------

let radios = document.querySelectorAll('input[name="action"]'); // нашли все инпуты  с атрибутом name="action" (т.е. радиокнопки)

for (let i = 0; i < radios.length; i++) { //перебор
  radios[i].addEventListener('change', () => { // по выбору радиокнопки

    let x = +document.querySelector('#num1').value; //извлекаем цифру 
    let y = +document.querySelector('#num2').value; //извлекаем цифру 

    let z = radios[i].value; // извлекаем знак //! почему не срабатывает this.value? 

    let result;

    switch (z) { //проверяем полученный знак и вычисляем
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      default:
        result = "Ошибки при вводе данных.";
    }
    document.querySelector("p").innerHTML = result; // помещаем результат в <p>
  });
}


//--- мой код (не работает радио)---------------------
/*
const textInput1 = document.querySelector('#num1');
const textInput2 = document.querySelector('#num2');
const form = document.forms[0];

const output = document.querySelector('p');

let x = 0;
let y = 0;

textInput1.addEventListener('keyup', (event) => { // обработчик события на инпут

  x = +event.target.value;
  console.log(x);
});

textInput2.addEventListener('keyup', (event) => { // обработчик события на инпут

  y = +event.target.value;
  console.log(y);
});

form.addEventListener('change', (event) => { // обработчик события на radio


  let result;
  let z = this.action.value;
  console.log(z);

  switch (z) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    default:
      result = "Ошибки при вводе данных.";
  }

  output.innerHTML = result;

});
*/