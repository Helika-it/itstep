//! 3. Прямоугольное поле m × n разбито на mn квадратных клеток. Некоторые клетки покрашены в чёрный цвет. Известно, что все чёрные клетки могут быть разбиты на несколько непересекающихся и не имеющих общих вершин чёрных прямоугольников. Считая, что цвета клеток даны в виде массива типа подсчитать число чёрных прямоугольников. (Формально, дано поле морского боя, посчитать количество кораблей на нем).

let m = 5;
let n = 5;
let counter = 0;
//? items[i][j] = 0/1 = белая/черная

let items = [
  [1, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

console.log(items);

for (let i = 0; i <= m; i++) {
  for (let j = 0; j <= n; j++) {

    if (items[i][j] == 1) {

      if ((i == 0) && (j == 0)) {
        counter++;
      } else if ((i == 0) && (items[i][j - 1] == 0)) {
        counter++;
      } else if ((items[i][j - 1] == 0) && (items[i - 1][j] == 0)) {
        counter++;
      } else {

      }

    }
  }
}
console.log(`На поле ${counter} кораблика.`);