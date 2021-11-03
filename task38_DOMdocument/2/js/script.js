document.write(`Шахматная доска на JS`);

out = "<div class='box'>";

for(let i = 1; i <= 8; i++){
    for(let j = 1; j <= 8; j++){
        if((i+j) % 2 == 0){
            out += "<div class='white'></div>";
        }
        else{
            out += "<div class='black'></div>";
        }
    }
}

out += "</div>";

document.write(out);

//!===СДЕЛАТЬ!!!=================================

document.write(`Шахматная доска из таблицы`);

out = "<table class='box'>";

for(let i = 1; i <= 8; i++){
  out += "<tr></tr>";
    for(let j = 1; j <= 8; j++){
        if((i+j) % 2 == 0){
            out += "<td class='white'></td>";
        }
        else{
            out += "<td class='black'></td>";
        }
    }
}

out += "</table>";

document.write(out);

//==============================================

document.write(`<h1>FR</h1>`);

fruits = ["apple", "orange", "lime","watermelon"];

out = "<ul>";
for (let i = 0; i = fruits.length; i++)
     out += `<li>${fruits[i]}</li>`;

out += "</ul>"; 

document.write(out);