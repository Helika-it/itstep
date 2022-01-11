//! 2 функция, которая проходит через массив целых чисел и выводит индекс каждого элемента с задержкой в 3 секунды
function outWithInterval(arr) {
  let i = 0;
  let counter = setInterval(function () {
    console.log(i);
    i++;
    if (i == arr.length) {
      clearInterval(counter);
    }
  }, 3000);
}

let arr = [1, 5, 9, 4, 6];

let examination = outWithInterval(arr)