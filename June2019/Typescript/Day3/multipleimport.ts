export class multiple{

    arrr:number[]=[];
    printtable(num:number):void{
        for (let index = 1; index <= 10; index++) {
            this.arrr[index]=num*index;            
        }
        console.log(this.arrr.join(' '));
    }

}

export function add(num1:number,num2:number):void{

    console.log(`
    --------------Addition is------------
    \t\t ${num1+num2}
    `);

}

export const pi=3.14;
