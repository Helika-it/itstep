//! 6. Написать функцию, принимающая на вход массив дат и сортирующая их в порядке возрастания.
//? не работает. как дописать/переписать???
function sortDatesUp(arr) {
  for (let i = 0; i < arr.lengt; i++) {
    let a = arr[i];
    let b = arr[i + 1];

    let c = [new Date(a), new Date(b)];

    c.sort(function (a, b) {
      return a - b;
    });
  }
}

let arr = [2021 - 12 - 01, 1999 - 05 - 18, 2022 - 1 - 31, 2021 - 09 - 08, 2000 - 05 - 18, 2021 - 11 - 01];

console.log(arr);

sortDatesUp(arr)

console.log(arr);