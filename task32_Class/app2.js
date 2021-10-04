// задача: Одежда Брюки Рубашка
class Сlothing {
  size
  material
  colour

  constructor(size, material, colour) {

    this.size = size;
    this.material = material;
    this.colour = colour;
  }
}

class Trousers extends Сlothing {
  belt;

  constructor (size, material, colour, belt) {
    super(size, material, colour);
    this.belt = belt;
  }
}

class Shirt extends Сlothing {
  collar;

  constructor (size, material, colour, collar) {
    super(size, material, colour);
    this.collar = collar;
  }
}

let trousers = new Trousers('42', 'cotton', 'blue', 'wide');

let shirt = new Shirt('44', 'cotton', 'red', 'small');
