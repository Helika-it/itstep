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
exports.Horse = void 0;
var animal_1 = require("./animal");
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(food, location, view) {
        return _super.call(this, food, location, view) || this;
    }
    Horse.prototype.makeNoise = function () {
        console.log("".concat(this.view, " \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043A\u0430\u0447\u0435\u0442."));
    };
    Horse.prototype.eat = function () {
        console.log("".concat(this.view, " \u0435\u0441\u0442 \u043C\u043D\u043E\u0433\u043E."));
    };
    return Horse;
}(animal_1.Animal));
exports.Horse = Horse;
