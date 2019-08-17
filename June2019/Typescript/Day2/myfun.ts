var res=function(){
    return (5+3);
}
console.log(res());

var res1=function(a:number,b:number):number{
    return (a+b);
}
console.log(res1(10,20));

//Function Constructor

var funconstruc=new Function("a","b","return (10*20)");
//console.log(funconstruc(10,20));

var funconstruc1=new Function("str","str2","console.log(str + str2)");

// funconstruc1("Sumit","Raokhande");
//Rest Parameter Function
function myrestpara(...num:number[]):void{
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        console.log(`${element}`);
        
    }
}
myrestpara(1,2,3);
myrestpara(1,2,3,5,6,7);

