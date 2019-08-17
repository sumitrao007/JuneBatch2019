// document.write("Welcome to My JS Lecture!!!");
// var a=10;
// document.write("<br>value of A is "+a);
// document.write(`<br>value of A is ${a}  ${a}`);
// document.write(`<br> Data tYpe of A is ${typeof(a)}` );
// a='Hi Hopes So U R Enjoying';
// document.write(`<br> Data type of A is ${typeof(a)}` );
// a=true;
// document.write(`<br> Data type of A is ${typeof(a)}` );

// if(a=10){
//     document.write(`<br> You Are in If Loop` );
// }else{
//     document.write(`<br> You Are in Else Loop` );
// }
// const choice="jkgsjdkf";
// switch(choice){
// case "Balaji": document.write(`<br> Your Choice is ${choice}` );
// break;
// case "Aniket":document.write(`<br> Your Choice is ${choice}` );
// break;
// default : document.write(`<br> Your Choice is Wrong ${choice}` );
// break;
// }
// var ch=true;
// document.write(`<br> Your Choice is  ${ch}` );
//  ch=false;
// document.write(`<br> Your Choice is  ${ch}` );
// var sum=0;
// for(let i=0;i<5;i++){
//     const b=i;
//     document.write(`<br> Value of b is ${b}`);
//     sum=sum+b;
//     document.write(`Sum value is ${sum}`);    
// }
add();

function add(){
    document.write(`<br>Addition is ${5+3}`);
}
//add();
function add1(a,b){
    document.write(`<br>Addition is ${a+b}`);
}
add1(2,3);

function add2(a,b)
{
    return (a+b);
}
const c=add2(4,5);
document.write(`<br>Value Of Addition is ${c}`);

const d=add2(4.5,5);
document.write(`<br>Value Of Addition is ${d}`);

const res=()=>{
    document.write(`<br>Value of addition is ${5+3}`);
}
res();

var res1=(a,b)=>{
    var sum=a+b;
    document.write(`<br> Sum is ${sum}`);
}

res1(4,2);

const res2=(a,b)=>{
    return (a+b);
}

var sum=res2(2.5,6);
document.write(`<br>Sum is ${sum}`);

//Annoynomous Function
const sum1=function(){
    document.write(`<br>Addition is ${5+6}`);
}

sum1();

const sum3=function(a,b){

    document.write(`<br>Sum is ${a+b}`);
}
sum3(8,9);

const sum4=function(a,b){
    return (a+b);
}

 var addition=sum4(5,6);
 document.write(`<br> Addition is ${addition}`);

 var add5;
 add5=sum4;//function Alias
 document.write(`<br>Function Alias Is ${add5(2,3)}`);

 function outerfun(){
     document.write(`<br>You are in Outer Function`);
     innerfun();
 }
 function innerfun(){
     document.write(`<br>You are in Inner Function`);
 }

 outerfun();



 