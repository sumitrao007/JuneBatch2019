a=10;
document.write(a);
var a;
var b;
document.write(`<br> After a Value ${b}`);
b=20;
document.write(`<br> After B Value ${b}`);

function hoistfun(){
    var a;
    document.write(`<br> In Function a Value ${a}`);
    a=40;
    document.write(`<br> In Function a Value ${a}`);
}
hoistfun();
document.write(`<br> outside the Function a Value ${a}`);