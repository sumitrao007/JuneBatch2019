function validate(){
    var username=''+document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var confirmpass=document.getElementById("confirmpass").value;
    var mobilenumber=document.getElementById("mobilenumber").value;

    var emailid=''+document.getElementById("emailid").value;

    if(username == ""){
        document.getElementById("usernamespan").innerHTML="** Please Enter the Username";
        return false;
    }else if(!isNaN(username)){
        document.getElementById("usernamespan").innerHTML="** Do not Enter the Number";
        return false;
    }else if(username.length<=3 || username.length>=6){
        document.getElementById("usernamespan").innerHTML="** please Enter minimum 3 character and Maximum 6 Character";
        return false;
    }
    else if(password == ""){
        document.getElementById("passwordspan").innerHTML="** Please Enter the Password";
        return false;
    }else if(password.length<=3 || username.length>=6){
        document.getElementById("passwordspan").innerHTML="** please Enter minimum 3 character and Maximum 6 Character for password";
        return false;
    }
    else if(confirmpass == ""){
        document.getElementById("confirmpassspan").innerHTML="** Please Enter the Confirm Password";
        return false;
    }else if(password!=confirmpass){
        document.getElementById("confirmpassspan").innerHTML="** please Reenter Correct Password";
        return false;
    }
    else if(mobilenumber == ""){
        document.getElementById("mobilenumberspan").innerHTML="** Please Enter the Mobile Number";
        return false;
    }else if(mobilenumber.length !=10){
        document.getElementById("mobilenumberspan").innerHTML="** Please Enter valid Mobile Number";
        return false;
    }else if(isNaN(mobilenumber)){
        document.getElementById("mobilenumberspan").innerHTML="** Do not Enter the Character";
        return false;
    }else if(emailid == ""){
        document.getElementById("emailidspan").innerHTML="** Please Enter the Email ID";
        return false;
    }else if(emailid.startsWith('@',0)){
        document.getElementById("emailidspan").innerHTML="** Please Enter the valid  Email ID";
        return false;
    }else if(emailid.charAt(email.length-4)!='.'){
        document.getElementById("emailidspan").innerHTML="** Please Enter the valid  Email ID with .com";
        return false;
    }else{
        return true;
    }


}

function usercheck(){
    document.getElementById("usernamespan").innerHTML="";
}

function passcheck(){
    document.getElementById("passwordspan").innerHTML="";
}