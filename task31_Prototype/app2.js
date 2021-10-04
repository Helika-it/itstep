// 1.добавить базовому обьекту Number метод который определяет знак числа

Number.prototype.sign = function () {
  if(this > 0)
    return 1;
  if(this < 0)
    return -1;
  return 0;
}

// 2.добавить базовому обьекту Number метод который вычисляет факториал числа

Number.prototype.factorial = function () {
  if(this < 0)
    return 0;
  if(this == 0)
    return 1;
  let fact = 1;
  for(let i = 1; i <= this; i++){
    fact *=i;
  }
  return fact;
}

let a = 5, b = 0, c = -3;

console.log(a.sign(), a.factorial());
console.log(b.sign(), b.factorial());
console.log(c.sign(), c.factorial());