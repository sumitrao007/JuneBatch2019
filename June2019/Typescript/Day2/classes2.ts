export class Emp{

    constructor(private firstname:string,private lastname:string){

    }
    disp():void{
        console.log(`First name is ${this.firstname}`);
        console.log(`last name is ${this.lastname}`);
    }
}

var b=new Emp("Sumit","Raokhande");
b.disp();
