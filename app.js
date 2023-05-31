function validateEmail(){
    var emailInput = document.getElementById("email");
    var errorSpan = document.getElementById("email-error");
    const reg =  /^[^\s@]+@[^\s@]+\[^\s@]+$/;
    if(!reg.test(emailInput.value)){
         errorSpan.style.display = "inline";
         emailInput.style.backgroundColor = "hsl(4, 100%, 67%, 0.3)";
         emailInput.style.borderColor = "hsl(4, 100%, 67%, 0.3)";
         return false;
    }
    else{
        errorSpan.style.display = "none";
        return true;
    }
}