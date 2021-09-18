// 6. Проверить 2 массива на полное совпадение.


let arr1 = [1, 3, 4];
console.log(arr1);

let arr2 = [1, 3, 4];
console.log(arr2);


console.log(` Проверить 2 массива на полное совпадение: `);

  let result = arr1.every(function(item,index,array){
    return item == arr2[index];
  });
  console.log(result);

