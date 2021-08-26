let x = (3 && 5) || (4 && 0); // => 5 || 0 => 5
let y = 3 || (5 && 4) || 0; // 3 || 4 || 0 => 3
let z = !x || y; // false || 3 => 3

let condition1 = x > y;
let condition2 = x < y;
let condition3 = x == y;
let condition4 = x != y;
let condition5 = x >= y;
let condition6 = x <= y;
let condition7 = !x;

if(x== undefined || x == null || x == 0 || x == "") {//!x
    console.log("Error");    
    }

if (condition1) {
    
}

if (condition2) {
    
} else {
    
}

if (x > 0) {
    console.log("positive");
} else if (x < 0) {
    console.log("negative")
} else {
    console.log("0")
} 


/*
let a = 4, b = 5;

if(a > b)
    {
    console.log(a);
    console.log(a++);
    }
else if(b > a)
    console.log(b);
else
    console.log("equal");

if (condition) {
    
} else {
    
}
*/


// проверить число четное или не четное
let number = 4;
if(number % 2 == 0)
    {
    console.log("even");
    }
else  
    {
    console.log("odd");
    }

//год високосный или нет
let year = 2100;
if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0))
    {
      console.log("leap")
    }
    else  
    {
    console.log("common");
    }

// окончание грибы
// грибы
let g = 11;
if( g % 100 > 10 && g % 100 < 20 || 
    g % 10 > 4 && g % 10 < 10 || 
    g % 10 == 0)
    console.log(g + " грибов");
else if (g % 10 == 1)
    console.log(g + " гриб");
else
    console.log(g + " гриба");

// доставка

let day = 4;
let hour = 17;
if (day != 7 && (hour != 17 || hour != 18 || hour != 19 || hour != 20 || hour != 21 || hour != 22 || hour != 23))
{
  console.log("Доставка сегодня после 16:00")
}
else if (day != 6 && day != 7 && (hour == 16 || hour == 17 ||  hour == 18 || hour == 19 || hour == 20 || hour == 21 || hour == 22 || hour == 23))
{
  console.log("Доставка завтра после с 8:00 до 16:00")
}
else  
    {
    console.log("Доставка в понедельник с 8:00 до 16:00");
    }
