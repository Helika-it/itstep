//Калькулятор1
let Calculator = {
  a: 0,
  b: 0,
  add: function(){
    return this.a + this.b;
  },
  sub: function() {
    return this.a - this.b;
  },
  mul: function() {
    return this.a * this.b;
  },
  div: function() {
    return this.a / this.b;
  },
};

let x = 4, y = 5;
 Calculator.a = y, Calculator.b = 2;

 let o1 = Calculator.mul();

Calculator.a = x, Calculator.b = o1;

let o2 = Calculator.sub();

Calculator.a = y, Calculator.b = x;

let o3 = Calculator.add();

Calculator.a = o2, Calculator.b = o3;

let o4 = Calculator.div();


console.log(o4);