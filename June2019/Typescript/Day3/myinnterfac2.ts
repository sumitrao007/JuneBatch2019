export interface Employee{
name:string;
salary:number;
dept:string;

setName(name:string):void;
setSalary(salary:number):void;
setDept(dept:string):void;

displayInfo():void;
}