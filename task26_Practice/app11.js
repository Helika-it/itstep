//11*. Разработать рекурсивную функцию для нахождения n-го числа Фибонначи.
console.log("11*. Разработать рекурсивную функцию для нахождения n-го числа Фибонначи.")


//ФУНКЦИЯ ДЛЯ НАХОЖДЕНИЯ N-ГО ЧИСЛА ФИБОНАЧЧИ  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55..
//
function nFib(n) {
  let x = 0,
    y = 1,
    temp; // temporary - временный

  for (q = 2; q = n; q++) {
    temp = x + y;
    x = y;
    y = temp;
  }

  return temp;
}


//=================================================


//=======

let n = 3;

meaningNFib = nFib(n); // meaning - значение

console.log(meaningNFib);

//=== Пример работающего кода:==============================================

//Task 11. Разработать рекурсивную функцию для нахождения n-го числа Фибонначи.
/*
var counter = 0;
function fibonacchi(n){
    //console.log("Вызов функции при n = "+n);
    counter++;
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
    return fibonacchi(n-1)+fibonacchi(n-2);
}
console.log(fibonacchi(20));
console.log(counter);
*/