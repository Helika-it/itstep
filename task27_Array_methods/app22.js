//reduce, reduceRight:
//22. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 

let arr = [1, 2, 3, 0, 4, 5, 6];
let num = 1;
let result = arr.reduce(function(sum, elem) {
	if (sum > 10) {
		console.log(num);
		return;
	} else {
		num++;
		return sum + elem;
	}
}); 


//---------- РЕШЕНИЕ НАШЛА ------------------
// НЕ ВСЁ ПОНЯТНО

//-----------------------------------------------------
/*
let arr = [1, 2, 3, 0, 4, 5, 6];
console.log(arr);
let result;
let k = 0;

result = arr.reduce(function(sum,item) {
  if (sum < 10 ) {
    sum += item;
    k++
    return sum;
  } 
}, 0);

console.log(result);
*/

/* 
let a = [1, 2, 3, 0, 4, 5, 6];
let k = 0;
let result = a.reduce(function(sum,item){
  if(sum < 10){
    sum += item;
    k++;
    return sum;
  }
}, 0);
console.log(k);

*/