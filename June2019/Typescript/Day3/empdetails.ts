import {Employee} from './myinnterfac2';

export class EmpDetails implements Employee{
    name: string;    
    salary: number;
    dept: string;
//Constructor is optional for ur Understanding purpose
//Its  is not complusory but if you are not using Setter & Getter Method the u Required Constructor
    constructor(name:string,salary:number,dept:string){
        this.name=name;
        this.salary=salary;
        this.dept=dept;
    }

    setName(name: string): void {
        this.name=name;
    }
    setSalary(salary: number): void {
        this.salary=salary;
    }
    setDept(dept: string): void {
        this.dept=dept;
    }
    displayInfo(): void {
        console.log(`
        -----------Employee Details----------------
        Name \t ${this.name}
        Salary\t ${this.salary}
        Department\t${this.dept}
        ------------------------------------------
        `);
    }    
}