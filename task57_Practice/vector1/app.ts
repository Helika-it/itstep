import {Vector} from "./vector";

const vector1 = new Vector(1,2,3);
const vector2 = new Vector(3,2,1);
console.log(vector1, vector2);
console.log(vector1.getLength());
console.log(vector1.getScalarMul(vector2));

console.log(Vector.getRandomVectors(2));