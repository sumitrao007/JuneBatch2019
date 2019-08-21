interface Student{
    name:string;
    rollno:number;
    DisplayInfo():void;
    getName():string;
    setName(name:string):void;
    setRollno(rollno:number):void;
    getRollno():number;    
    
}

class StudentInfo implements Student{
    name: string;   
    rollno: number;
    DisplayInfo(): void {

        console.log(`
        ------------Student Information--------------
        Name\t\t ${this.name}
        Roll No \t ${this.rollno}
        ---------------------------------------------
        `);
        
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name=name;
    }
    setRollno(rollno: number): void {
        this.rollno=rollno;
    }
    getRollno(): number {
        return this.rollno;
    }

    
}

var studinfo=new StudentInfo();
studinfo.setName("Balaji");
studinfo.setRollno(12);


studinfo.DisplayInfo();

studinfo.setRollno(18);
console.log(studinfo.getRollno());
studinfo.DisplayInfo();