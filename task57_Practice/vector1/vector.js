"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.prototype.getLength = function () {
        return Math.pow((Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)), 0.5);
    };
    Vector.prototype.getScalarMul = function (vector) {
        return (this.x * vector.x + this.y * vector.y + this.z * vector.z);
    };
    Vector.getRandomVectors = function (n) {
        var vectors = [];
        for (var i = 0; i < n; i++) {
            var x = Math.ceil(Math.random() * 10);
            var y = Math.ceil(Math.random() * 10);
            var z = Math.ceil(Math.random() * 10);
            vectors.push(new Vector(x, y, z));
        }
        return vectors;
    };
    return Vector;
}());
exports.Vector = Vector;
