//Калькулятор2

function Calculator () {
  this.add = function(a,b){
    return a + b;
  },
  this.sub = function(a,b) {
    return a - b;
  },
  this.mul = function(a,b) {
    return a * b;
  },
  this.div = function(a,b) {
    return a / b;
  }
}


let x = 4;
let y = 5;
let calc = new Calculator;

//console.log(calc.div(calc.sub(x,calc.mul(y,2)),(calc.add(y,x)))); 


let o1  = calc.mul(y,2)
let o2  = calc.sub(x,o1)
let o3  = calc.add(x,y)
let o4  = calc.div(o2,o3)
let result = o4

console.log(result)