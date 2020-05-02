function CreateCaptcha(){
    let numberRandom= Math.floor((Math.random() * 1000000));
    document.querySelector('#captcha').innerHTML = numberRandom;
}

function ValidCaptcha(){
    let captcha = document.querySelector('#captcha').innerHTML;
    let numberUser = document.querySelector('#number-user').value;
    let register = document.querySelector('#register');
    if (captcha == numberUser){
        document.querySelector('#validation').innerHTML = "Correct! Click below to register";
        register.disabled = false;  ///MAG: preguntar si ta bien
    }
    else{
        document.querySelector('#validation').innerHTML = "Incorrect number. Try again";
        register.disabled = true;
    }
}

CreateCaptcha();

let verification = document.querySelector('#button-check');
verification.addEventListener("click", ValidCaptcha);








 