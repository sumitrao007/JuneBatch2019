var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.myarea = function () {
        this.circlearea = 3.14 * this.radius * this.radius;
    };
    Circle.prototype.displayInfo = function () {
        console.log("\n        -----------------Circle Area---------------\n        Radius is " + this.radius + "\n        Area is " + this.circlearea + "\n        ------------------------------------------\n        ");
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, bradth) {
        var _this = _super.call(this) || this;
        _this.length = length;
        _this.breadth = bradth;
        return _this;
    }
    Rectangle.prototype.myarea = function () {
        this.rectarea = this.length * this.breadth;
    };
    Rectangle.prototype.displayInfo = function () {
        console.log("\n        -----------------Rectangle Area---------------\n        Length is " + this.length + "\n        Breadth is " + this.breadth + "\n        Area is " + this.rectarea + "\n        ------------------------------------------\n        ");
    };
    return Rectangle;
}(Shape));
var circleobj = new Circle(2.5);
circleobj.myarea();
circleobj.displayInfo();
var rectobj = new Rectangle(5, 6.5);
rectobj.myarea();
rectobj.displayInfo();
