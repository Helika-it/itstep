import {
  Complex
} from "./complex.js";


let a = new Complex(2, 2);
let b = new Complex(3, 2);
let c = new Complex(6, 3);
let d = new Complex(4, 2);
let e = new Complex(5, 2);


let f = a.add(b).div(c.minus(d)).mul(e);
console.log(f);


/*
let f = a.add(b);
console.log(f);
let j = c.minus(d);
console.log(j);
let k = f.div(j);
console.log(k);
let l = k.mul(e);
console.log(l);
*/