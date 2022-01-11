//! 4. Написать функцию, принимающую в аргументах массив и возвращающую новый массив, в котором отсортированы все нечетные числа по возрастанию, четные числа по убыванию, но при этом сами чётные и нечетные числа остаются на своих местах. ([7, 3, 4, 9, 5, 2, 17] -> [3, 5, 2, 7, 9, 4, 17]).

function outUniqueValues(arr) {
  let even = []; // четные
  let odd = []; // нечетные

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  console.log(even);
  console.log(odd);

  even = even.sort(function (a, b) { // четные по убыванию
    return b - a;
  });
  odd = odd.sort(function (a, b) { // нечетные по возрастанию
    return a - b;
  });

  console.log(even);
  console.log(odd);



  let j = 0;
  let k = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
      arr[i] = even[j];
      j++
    } else {
      arr[i] = odd[k];
      k++
    }

  }
  console.log(arr);
  return arr
}
let arr = [7, 3, 4, 9, 5, 2, 17];
console.log(arr);
outUniqueValues(arr)