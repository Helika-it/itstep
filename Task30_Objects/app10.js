//10 Умножаем все числовые свойства на 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log(menu);

function multiplyNumbersOnTwo(object) {
  for (let key in object) {
    if (typeof object[key] == "number") {
      object[key] = object[key] * 2;
    }
  }
}

multiplyNumbersOnTwo(menu);

console.log(menu);