var arr:number[]=[12,2,30,-4,15];

// arr.forEach(element => {
//     console.log(element);
// });
//console.log(arr);

var arr2:number[]=[];

for (let index = 0; index < 5; index++) {
    
    arr2.push(index);
}

//console.log(arr2);

var arr3:any[]=["Sumit",1,true,2.5,"@"];

//console.log(arr3.join(" # "));

//dereffernce of array also it's same for object
var [x,y]=arr3;

// console.log(x);
// console.log(y);

var temparr=arr.map(n=>n*n);
//console.log(temparr);

// //Filter Function

// function getitem(n:number):number{
//     if(n>10){
//         n*=n;
//         return (n);
//     }
// }

// var temparr3=arr.filter(getitem);
// console.log(temparr3);
