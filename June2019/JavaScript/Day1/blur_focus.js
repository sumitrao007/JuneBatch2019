function focusfun(){
    var username=document.getElementById("username");

    username.style.background="red";
}

function blurfun(){
    var username=document.getElementById("username");
    username.style.background="green";
    var s=''+username.value;
    document.getElementById("username").value=s.toUpperCase();

}