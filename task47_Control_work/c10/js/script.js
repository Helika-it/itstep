//! 10. Дано поле ввода и произвольный текст. При вводе слова в поле ввода должно подсвечиваться все найденные слова (подстроки) в тексте.

// ====== пример кода =====================

document.querySelector("input").onkeyup = function (event) {

  let str = this.value;

  let text = document.querySelector("p").textContent;

  let newText = text.replaceAll(str, `<span>${str}</span>`);

  document.querySelector("p").innerHTML = newText;

}