class Complex {
  r; // вещественная часть комплексного числа
  i; // мнимая часть. (умноженная на кв.корень из -1)


  constructor(r, i) {
    this.r = r;
    this.i = i;


    // Складывает комплексное число that с текущим и возвращает сумму в виде нового объекта.
    Complex.prototype.add = function (that) {
      return new Complex(this.r + that.r, this.i + that.i);
    };

    // Вычитает комплексное число that из текущего и возвращает разность в виде нового объекта.
    Complex.prototype.minus = function (that) {
      return new Complex(this.r - that.r, this.i - that.i);
    };

    // Умножает текущее комплексное число на число that и возвращает произведение.
    Complex.prototype.mul = function (that) {
      return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
    };

    // Делит текущее комплексное число на число that и возвращает частное.
    Complex.prototype.div = function (that) {
      return new Complex(((this.r * that.r + this.i * that.i) / (that.r * that.r + that.i * that.i)), ((this.i * that.r - this.r * that.i) / (that.r * that.r + that.i * that.i)));
    };

  }
}

export {
  Complex
};