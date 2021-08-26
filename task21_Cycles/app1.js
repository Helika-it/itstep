// Сумма чисел от 1 до 10 =============
console.log("Сумма чисел от 1 до 10")
console.log("№ 1 while")

let sum = 0, i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum, i);

//
console.log("№ 2 do..while")

sum = 0, i = 1;

do {
    sum += i;
    i++;
} while (i <= 10);

console.log(sum, i);

//
console.log("№ 3 for")

for(sum = 0, i = 1; i <= 10; i++){
    sum += i;   
}

console.log(sum, i);


// Сумма четных чисел от 1 до 100 ========
// 1 =====================================
console.log("Сумма четных чисел от 1 до 100");
console.log( "№ 1 (while)");

sum = 0, i = 2;
while (i <= 100) {
  sum += i;
  i +=2;
}
console.log(sum);

// 2 ======================================
console.log( "№ 2 (do..while)");

sum = 0; i = 2;
do{
  sum += i;
  i +=2;
}while(i <= 100);
console.log(sum);

// 3 ========================================
console.log( "№ 3 (for)");

for (sum = 0, i = 2; i <= 100; i +=2){
  sum += i;
}
console.log(sum);

// Гипотеза Сиракуз =========================
console.log("Гипотеза Сиракуз")

let n = 1000000, a = 0;
while (n != 1) {

  if (n % 2 == 0) {
    n = n / 2;    
  }else {
    n = (n * 3 + 1) / 2;
  }
  a += 1;
}
console.log(a)

// 51-е число, кот. /на7 но !/ на 5. ============
console.log("51-е число , кот. /на7 но !/ на 5")
console.log("while")

n = 0, i = 0;
while (i != 51) 
{
  n++;
  if ( (n % 7 == 0) && (n % 5 != 0) ) {
    i +=1;
  }
}
console.log(n)

console.log("for")
for (n = 0, i = 0; i != 51;) {
  n++
  if ((n % 7 == 0) && (n % 5 != 0)) {
    i +=1;
  }
}
console.log(n)


// 10 чисел /21 или !/14==============================
console.log("10 чисел /21 или !/14")

n = 100, i = 0;
while( i != 10) {
  n++;
  if((n % 21 == 0) || (n % 14 != 0)){
    i++;
  }
  console.log(n)
}
1 1 2 3 5 8