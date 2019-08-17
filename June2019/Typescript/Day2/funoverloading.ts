function myfun(num:number):void;//Function Signature
function myfun(str:string):void;
function myfun(num1:number,str1:string):void;
function myfun(num1:number,str1:string,str2:string):void;

function myfun(num:any,str?:any):void{
 
    if(num!=undefined && str==undefined){
        console.log(num);
    }else{
        console.log(str);
    }
}

//myfun(10,"Sumit");
//myfun(10);
//myfun("Sumit");

myfun(10);