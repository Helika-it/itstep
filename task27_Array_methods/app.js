/* 1
function showName() {
  console.log("Вася!");
}
setTimeout(showName, 0);
console.log("Коля!");
*/

/* 2
showMessage();
function showMessage() {
  console.log("Сообщение");
}
*/

/* 3
showMessage();
let showMessage = function () {
  console.log("Сообщение");
}
*/

'use strict'
let showMessage;
if (2 > 1) {
  function showMessage() {
    console.log("Сообщение");
  }
  return showMessage;
}
showMessage();