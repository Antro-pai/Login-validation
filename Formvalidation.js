var nameError=document.getElementById("name-error")
var phoneError=document.getElementById("phone-error")
var emailError=document.getElementById("email-error")
var messageError=document.getElementById("message-error")
var submitError=document.getElementById("submit-error")

function validateName(){
    var name=document.getElementById("contact-name").value;

    if(name.length==0){
        nameError.innerText="Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerText="Write full name";
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}

function validatePhone(){
    var phone=document.getElementById("contact-phone").value;
    if(phone.length==0){
        phoneError.innerText="Phone no is required";
        return false;
    }

    if(phone.length!=10){
        phoneError.innerText="Phone no should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerText="Phone no is required";
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
    var email=document.getElementById("contact-email").value;

    if(email.length==0){
        emailError.innerText="email is required";
        return false;
    }

    emailError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;

}

function validateMessage(){
    var message=document.getElementById("contact-message").value;
    var required=30;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML=left +' more charecters requires';
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;

}

function validateForm(){
    if(!validateForm() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.innerHtml="Please fix error to submit";
        return false;
    }
}