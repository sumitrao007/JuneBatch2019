function Myfunction(){
    var num1=document.getElementById("txtnum1");
    var num2=document.getElementById("txtnum2");
    var res=document.getElementById("result");

    var temp=parseFloat(num1.value)+parseFloat(num2.value);

    console.log("Result is "+temp);

    res.value=temp;

}