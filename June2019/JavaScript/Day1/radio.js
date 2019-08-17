function mysquare(){
    var num1=document.getElementById("num1");
    var tempnum1=Number(num1.value);

    var res=tempnum1*tempnum1;
    document.getElementById("res").value=res;

}

function mycube(){
    var num1=document.getElementById("num1");
    var tempnum1=Number(num1.value);

    var res=tempnum1*tempnum1*tempnum1;
    document.getElementById("res").value=res;

}
    