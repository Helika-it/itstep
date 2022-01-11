//! 2. Функция f с натуральными аргументами и значениями определена так: f(0) = 0, f(1) = 1, f(2n) = f(n), f(2n + 1) = f(n) + f(n + 1). Составить программу вычисления f(n) по заданному n.


let result = 0;

console.log(rekurs(7));

function rekurs(n) {

  if (n == 0) {
    result = result + 0;
    return 0
  } else if (n == 1) {
    result = result + 1;
    return 1
  } else if (n % 2 == 0) {
    return rekurs(n / 2);
  } else {
    return (rekurs((n - 1) / 2) + rekurs((n + 1) / 2));
  }

}