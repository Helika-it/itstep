// 2.13

// ЦИКЛЫ WHILE И FOR
// Цикл while (выводит i, пока i < 3)
console.log ("Цикл while");

let i = 0;
while (i < 3)
{
  console.log (i);
  i++;
}

// Цикл do..while (выводит i, пока i < 3)
console.log ("Цикл do..while");

i = 0;
do {
  console.log(i);
  i++
} while (i < 3);

// упражнение из учебника: Цикл for (Преход к следующей итерации: continue)
console.log('Цикл for');
for (let i = 0; i < 10; i++)
{
  if (i % 2 == 0) continue; /*если true, пропустить оставшуюся часть тела цикла*/
  console.log(i);
}


// **ДОМАШНЯЯ**

console.log("====================")
console.log("3x + 4y = 2021")

let x = 1, y = 1;
i = 0;

while (x < 673 && x != 673){
  if ( (x * 3 + y * 4) == 2021 ) {
    console.log(`[${x}, ${y}]`);
    x = x + 1;
    y = 1;
    i = i + 1
  } else if ((x * 3 + y * 4) < 2021) {
    y = y + 1;
  } else {
    x = x + 1;
    y = 1;
  }
}
console.log(`i = ${i} END`)

console.log("====================")