let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1; 
let quess;
let hits = 0;
let quesses = 0;
let isSunk = false;

while (isSunk == false) {
  quess = prompt("Ready, aim, fire! (enter a number 0-6):");
  if (quess < 0 || quess > 6) {
    alert ("Please enter a valid cell number");
  } else {
    quesses = quesses + 1;
    if (quess == location1 || quess == location2 || quess == location3 ) {
      alert ("HIT!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert ("You sank my battleship!")
      }
    } else {
      alert ("MISS");
    }
  }
}
let stats = "You took " + quesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/quesses);
alert(stats);