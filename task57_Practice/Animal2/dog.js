"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dog = void 0;
var animal_1 = require("./animal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(food, location, view) {
        return _super.call(this, food, location, view) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("".concat(this.view, " \u0431\u0435\u0433\u0430\u0435\u0442 \u0438 \u043B\u0430\u0435\u0442."));
    };
    Dog.prototype.eat = function () {
        console.log("".concat(this.view, " \u0435\u0441\u0442 ").concat(this.food, "."));
    };
    return Dog;
}(animal_1.Animal));
exports.Dog = Dog;
