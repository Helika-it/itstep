//! 7. Реализовать функцию f: f(2, 3) -> 5 и f(2)(3) -> 5.

//? пример из учебника:

function curry(f) { // curry(f) выполняет каррирование
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// использование
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3