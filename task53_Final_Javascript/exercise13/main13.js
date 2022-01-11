//! 13. Реализовать экранную клавиатуру, состоящую из английских букв, цифр и клавиш CapsLock и Enter. При нажатии на эту клавиатуру должен выводить текст в какое поле. CapsLock в нажатом состоянии переводит букву в верхний регистр, а Enter начинает ввод с новой строки.

document.querySelector("table").addEventListener("click", function (event) {
  let current = event.target;
  if (current.tagName != 'TD') {
    return false
  }

  let symbol = current.innerText;
  let res = document.querySelector(".result");

  if (symbol == 'Enter') { //! ??? заменила на _

    res.innerHTML += `<br>`;
  }

  if (symbol == 'CapsLock') {
    this.classList.toggle('pressed')
  }

  if ((symbol != 'CapsLock') && (symbol != 'Enter')) {
    let hasClass = this.classList.contains('pressed')

    if (hasClass) {
      res.innerHTML += `${symbol.toUpperCase()}`;
      console.log(symbol);
    }

    if (!hasClass) {
      res.innerHTML += `${symbol.toLowerCase()}`;
      console.log(symbol);
    }
  }

})