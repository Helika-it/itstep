//! 5. Реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время в секундах, через которое взорвется, выполняет обратный отсчет, и в конце выводит «взрыв» (строку, которую вернет через заданное время).

function outWithInterval(second) {
  let i = 0;
  let counter = setInterval(function () {
    console.log("ХЛОП!");
    i++
    if (i > 0) {
      clearInterval(counter);
    }
  }, second);

}

let examination = outWithInterval(3000)