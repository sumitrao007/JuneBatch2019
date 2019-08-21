"use strict";
exports.__esModule = true;
var EmpDetails = /** @class */ (function () {
    //Constructor is optional for ur Understanding purpose
    //Its  is not complusory but if you are not using Setter & Getter Method the u Required Constructor
    function EmpDetails(name, salary, dept) {
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }
    EmpDetails.prototype.setName = function (name) {
        this.name = name;
    };
    EmpDetails.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    EmpDetails.prototype.setDept = function (dept) {
        this.dept = dept;
    };
    EmpDetails.prototype.displayInfo = function () {
        console.log("\n        -----------Employee Details----------------\n        Name \t " + this.name + "\n        Salary\t " + this.salary + "\n        Department\t" + this.dept + "\n        ------------------------------------------\n        ");
    };
    return EmpDetails;
}());
exports.EmpDetails = EmpDetails;
