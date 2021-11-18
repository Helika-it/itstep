//! 8. Дано: 3 кнопки. При нажатии на любую кнопку, должны меняться цвета 2 оставшихся на случайный цвет.

const but1 = document.getElementById('button1');
const but2 = document.getElementById('button2');
const but3 = document.getElementById('button3');

const colors = ['#ADFF2F', '#00FA9A', '#00FFFF', '#0000FF', '#FF00FF', '#FF0000', '#00FF00', '#FF4500', '#FFFF00'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
};

but1.addEventListener('click', () => {
  document.getElementById('button2').style.backgroundColor = `${getRandomColor()}`;
  document.getElementById('button3').style.backgroundColor = `${getRandomColor()}`;
})

but2.addEventListener('click', () => {
  document.getElementById('button1').style.backgroundColor = `${getRandomColor()}`;
  document.getElementById('button3').style.backgroundColor = `${getRandomColor()}`;
})

but3.addEventListener('click', () => {
  document.getElementById('button1').style.backgroundColor = `${getRandomColor()}`;
  document.getElementById('button2').style.backgroundColor = `${getRandomColor()}`;
})