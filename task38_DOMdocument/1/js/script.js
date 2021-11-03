
document.write("<h1>Привет мир</h1>");
document.write("<h2>Привет мир2</h2>");

//---список -----------------------

var fruits = ["apple", "orange", "lime","watermelon"];

let  out = "<ul>";
fruits.forEach(function(item){
    out = out + `<li>${item}</li>`;
})
out += "</ul>"; 
/*
 * <ul>
 *      <li>apple</li>
 *      <li>orange</li>
 *      <li>lime</li>
 *      <li>watermelon</li>
 * </ul>
 */
document.write(out);
//-------------------------------

out = "<p><ins>1</ins> <span>2</span> <ins>3</ins> <span>4</span> <ins>5</ins> 6</p>";
document.write(out);
//<ins></ins> - подчеркнутый элемент

//---30 чисел в виде ненум.списка----------------------------

out = "";

for (let i = 1; i <= 30; i++) {
  out += `<li>${i}</li>`;
}
document.write(out);

//---30 чисел в столбик через <br>-----------------------------

out = "<div class='box'>";

for (let i = 1; i <= 30; i++) {
  if(i%2 == 0)
    out+= `<span class='red'>${i} </span><br>`;
  else
    out+= `<span>${i} </span><br>`;
}
out += "</div>";

document.write(out);

