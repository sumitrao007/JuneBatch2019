var firststr="Sumit";
var secondstr="Sumit";

var strtemp=new String("Sumit");
var strtemp1=new String("Sumit");

if(firststr === secondstr){
    document.write(`<br>Value is True`);
}else{
    document.write(`<br>Value is false`);
}

document.write(`<br><hr>`);

if(firststr==secondstr){
document.write(`<br>Value is True`);
}else{
    document.write(`<br>Value is False`);
}

if(firststr==strtemp){
    document.write(`<br>Value is True`);
}else{
    document.write(`<br>Value is False`);
}

if(firststr===strtemp){
    document.write(`<br>Value is True`);
}else{
    document.write(`<br>Value is False`);
}
document.write(`<br>Type of object strtemp1 is ${typeof(strtemp1)}`);
document.write(`<br>Type of object strtemp is ${typeof(strtemp)}`);
if(strtemp1===strtemp){
    document.write(`<br>Value is True`);
}else{
    document.write(`<br>Value is False`);
}
