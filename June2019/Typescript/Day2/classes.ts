
export class Person{
   private firstname:string;
   private lastname:string;
   private salaray:number;
   disp():void{
       console.log(`First name of Person is ${this.firstname}`);
       console.log(`Last name of Person is ${this.lastname}`);
   }

   constructor(firstname:string,lastname?:string){
      this.firstname=firstname;
      this.lastname=lastname;
   }


}

//var aperson=new Person("Sumit","Raokhande");
//aperson.firstname="Sumit";
//aperson.lastname="Raokhande";
//aperson.salaray=50000;
//console.log(aperson.firstname);
//aperson.disp();

