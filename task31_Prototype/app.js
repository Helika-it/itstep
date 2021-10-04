//Жилые площади домов 1эт, 1эт+полуэтаж, 1эт.+мансарда
let home = {
  l: 10,
  w: 20,
  getSquare: function () {
    return this.l * this.w
  }
};

let oneFloorHome = {
  __proto__: home
};

let oneHalfFloorHome = {
  __proto__: home,
  getSquare: function () {
    return 2 * this.l * this.w
  }
};

let oneMansardaFloorHome = {
  __proto__: home,
  getSquare: function () {
    return 1.5 * this.l * this.w
  }
};

console.log(oneFloorHome.getSquare());
console.log(oneHalfFloorHome.getSquare());
console.log(oneMansardaFloorHome.getSquare());

