//every, some:
//18. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

let a = [3, 4, 1, 2, 7];

console.log(a);

let c = !a.every(elem => elem >= 0);

console.log(`Есть ли в массиве отрицательные элементы? ${c}`);


//---------------------------


let b = [3, 4, -1, 2, 7];

console.log(b);

let d = !b.every(elem => elem >= 0);

console.log(`Есть ли в массиве отрицательные элементы? ${d}`);


//======================================================================


let e = [3, 4, 1, 2, 7];

console.log(e);

let f = e.some(elem => elem < 0);

console.log(`Есть ли в массиве отрицательные элементы? ${f}`);


//---------------------------


let g = [3, 4, -1, 2, 7];

console.log(g);

let k = g.some(elem => elem < 0);

console.log(`Есть ли в массиве отрицательные элементы? ${k}`);
