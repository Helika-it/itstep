function myclick(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x+y;
    
    button2.style.background = "white";
}

var button2 = document.getElementById("calc2")
button2.onclick = function(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x-y;
}

button2.addEventListener("click", function() {
    button2.style.background = "red";
});

button2.addEventListener("click", function() {
    calc.style.background = "red";
});


//============================================
//вычислить а (+-*/) b 

function myclick(){
  let x = + document.getElementById("a").value;
  let y = parseFloat(document.getElementById("b").value);
  let z = document.getElementById("c").value;

  let result;
/*
  if (z == '+') {
    result = x+y;
}
  if (z == "-") {
    result = x-y;
 }
  if (z == "*") {
    result = x*y;
 }
  if (z == "/") {
    result = x/y;
 }
 */

 switch(z){
  case '+': result =x+y;
    break;
  case '-': result =x-y;
    break;
  case '*': result =x*y;
    break;
  case '/': result =x/y;
    break;
  default:
    alert( "Error" );
}


  document.getElementsByTagName("p").item(0).innerHTML = result;
}



