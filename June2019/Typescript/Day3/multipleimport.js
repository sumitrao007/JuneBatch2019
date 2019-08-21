"use strict";
exports.__esModule = true;
var multiple = /** @class */ (function () {
    function multiple() {
        this.arrr = [];
    }
    multiple.prototype.printtable = function (num) {
        for (var index = 1; index <= 10; index++) {
            this.arrr[index] = num * index;
        }
        console.log(this.arrr.join(' '));
    };
    return multiple;
}());
exports.multiple = multiple;
function add(num1, num2) {
    console.log("\n    --------------Addition is------------\n    \t\t " + (num1 + num2) + "\n    ");
}
exports.add = add;
exports.pi = 3.14;
