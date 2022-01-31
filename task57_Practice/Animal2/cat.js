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
exports.Cat = void 0;
var animal_1 = require("./animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(food, location, view) {
        return _super.call(this, food, location, view) || this;
    }
    Cat.prototype.makeNoise = function () {
        console.log("".concat(this.view, " \u0441\u0438\u0434\u0438\u0442."));
    };
    Cat.prototype.eat = function () {
        console.log("".concat(this.view, " \u0435\u0441\u0442 \u043D\u0430 \u0441\u0442\u043E\u043B\u0435."));
    };
    return Cat;
}(animal_1.Animal));
exports.Cat = Cat;
