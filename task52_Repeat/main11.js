//! 11. Дано 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений. 

let arr1 = [1, 2, 1, 5, 2, 3, 7, 1]
let arr2 = [3, 2, 1, 5, 9, 3, 7, 1]
console.log(arr1);
console.log(arr2);

сrossingArrsNoRepeat(arr1, arr2)


//! ФУНКЦИЯ ДЛЯ ВОЗВРАЩЕНИЯ ЭЛЕМЕНТОВ, КОТОРЫЕ ВХОДЯТ В ОБА МАССИВА БЕЗ ПОВТОРЕНИЙ
function сrossingArrsNoRepeat(arr1, arr2) {

  deleteRepeat(arr1)
  deleteRepeat(arr2)

  console.log(сrossingArrs(arr1, arr2));
}


// ФУНКЦИЯ ДЛЯ УДАЛЕНИЯ ПОВТОРОВ ИЗ МАССИВА

function deleteRepeat(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let x = arr[i]; //назначаем х с которым сравниваем остальные эл-ты массива
    for (let j = i + 1; j < n; j++) { //перебираем остальные эл-ты массива(j)
      if (arr[j] == x) { //если находим одинаковые
        for (let k = j + 1; k <= n; k++) { //цикл для удаления и смещения эл-тов (сдвиг)
          arr[k - 1] = arr[k]; //перезапись эл-та следующим
        }
        arr.splice(-1, 1);
        n--; //укорачиваем длину перебора массива
        j--; //уменьшаем количество эл-тов для сравнения
      }
    }
  }
}


// ФУНКЦИЯ ДЛЯ ВОЗВРАЩЕНИЯ ЭЛЕМЕНТОВ, КОТОРЫЕ ВХОДЯТ В ОБА МАССИВА
function сrossingArrs(arr1, arr2) {
  let arr = arr1.filter(function (item) {
    return arr2.includes(item);
  })
  return arr
}