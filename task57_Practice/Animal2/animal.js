"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(food, location, view) {
        this.food = food;
        this.location = location;
        this.view = view;
    }
    Animal.prototype.makeNoise = function () {
        console.log("".concat(this.view, " \u0431\u0435\u0433\u0430\u0435\u0442."));
    };
    Animal.prototype.eat = function () {
        console.log("".concat(this.view, " \u0435\u0441\u0442."));
    };
    Animal.prototype.sleep = function () {
        console.log("".concat(this.view, " \u0441\u043F\u0438\u0442."));
    };
    return Animal;
}());
exports.Animal = Animal;
