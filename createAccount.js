const form=document.getElementById('form');
const userName=document.getElementById('username');
const passWord=document.getElementById('password');
const confirmPassword=document.getElementById('confirmPassword');
const email=document.getElementById('email');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});


function checkInputs(){
    const userNameValue=userName.value.trim();
    const passwordValue=passWord.value.trim();
    const confirmPasswordValue=confirmPassword.value.trim();
    const emailValue=email.value.trim();

    if(userNameValue===''){
        setErrorFor(userName,'Username cannot be blank');
    }
    else{
        setSuccessFor(userName)
    }

    
    if(emailValue===''){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }


    
    if(passwordValue===''){
        setErrorFor(passWord,'Password cannot be blank');
    }
    else{
        setSuccessFor(passWord)
    }

    if(confirmPasswordValue===''){
        setErrorFor(confirmPassword,'Confirm Password cannot be blank');
    }
    else if(passwordValue!==confirmPasswordValue){
        setErrorFor(confirmPassword,'Passwords doesnot match');
    }
    else{
        setSuccessFor(confirmPassword)
    }

}

function setErrorFor(input,message){
    const formControl=input.parentElement;//form control
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control error'
}

function setSuccessFor(input){
    const formControl=input.parentElement;//form control
    formControl.className='form-control success'
}


function isEmail(email){
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}