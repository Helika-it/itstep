let x;

document.getElementById('go').onclick = function(){
  const min = 1, max = 100;
  x = (Math.floor(Math.random() * (max - min + 1)) + min);
  document.getElementById('go').style.background = '#0f0';
  return x;
}

let count = 0;

document.getElementById('compare').onclick = function(){
  let userNum = +document.getElementById("num").value;
  if(userNum !== userNum){
    return;    
  }

  count++;

  if (userNum < x) {
    document.getElementById('result').innerHTML = "Мало";
  } else if (userNum > x) {
    document.getElementById('result').innerHTML = "Много";
  } else {
    document.getElementById('result').innerHTML = `Верно!<br> Угадано за ${count} попыток.<br>Отгадай ещё раз`; 
    document.getElementById('go').style.background = '#f00';
    count = 0;
  }
}
