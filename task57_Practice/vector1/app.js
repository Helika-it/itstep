"use strict";
exports.__esModule = true;
var vector_1 = require("./vector");
var vector1 = new vector_1.Vector(1, 2, 3);
var vector2 = new vector_1.Vector(3, 2, 1);
console.log(vector1, vector2);
console.log(vector1.getLength());
console.log(vector1.getScalarMul(vector2));
console.log(vector_1.Vector.getRandomVectors(2));
