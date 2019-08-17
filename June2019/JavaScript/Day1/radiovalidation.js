function radiovalidation(){
    var gender=document.getElementsByName("gender");

    if(gender[0].checked==false && gender[1].checked==false){
        alert("Please Select a Gender");
    }else{
        alert("ok");
    }
}