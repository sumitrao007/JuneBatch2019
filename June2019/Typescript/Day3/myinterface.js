var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.DisplayInfo = function () {
        console.log("\n        ------------Student Information--------------\n        Name\t\t " + this.name + "\n        Roll No \t " + this.rollno + "\n        ---------------------------------------------\n        ");
    };
    StudentInfo.prototype.getName = function () {
        return this.name;
    };
    StudentInfo.prototype.setName = function (name) {
        this.name = name;
    };
    StudentInfo.prototype.setRollno = function (rollno) {
        this.rollno = rollno;
    };
    StudentInfo.prototype.getRollno = function () {
        return this.rollno;
    };
    return StudentInfo;
}());
var studinfo = new StudentInfo();
studinfo.setName("Balaji");
studinfo.setRollno(12);
studinfo.DisplayInfo();
studinfo.setRollno(18);
console.log(studinfo.getRollno());
studinfo.DisplayInfo();
