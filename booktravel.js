const form=document.getElementById('form');
const departure=document.getElementById('departure');
const destination=document.getElementById('destination');
const no=document.getElementById('no');
const phnno=document.getElementById('phnno');
const arrdate=document.getElementById('arrDate');
const depdate=document.getElementById('depDate');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
    const departureValue=departure.value.trim();
    const destinationValue=destination.value.trim();
    const noValue=no.value.trim();
    const phnnoValue=phnno.value.trim();
    const arrdateValue=arrdate.value;
    const depdateValue=depdate.value;


    if(departureValue===''){
        setErrorFor(departure,'Departure location cannot be blank');
    }
    else{
        setSuccessFor(departure)
    } 

    if(destinationValue===''){
        setErrorFor(destination,'Destination location cannot be blank');
    }
    else{
        setSuccessFor(destination)
    } 
    if(noValue===''){
        setErrorFor(no,'Total number cannot be blank');
    }
    else{
        setSuccessFor(no)
    } 
    if(phnnoValue===''){
        setErrorFor(phnno,'Total number cannot be blank');
    }
    else{
        setSuccessFor(phnno)
    } 
    if(arrdateValue===''){
        setErrorFor(arrdate,'Arrival date cannot be blank');
    }
    else{
        setSuccessFor(arrdate)
    }
    if(depdateValue===''){
        setErrorFor(depdate,'Departure date cannot be blank');
    }
    else{
        setSuccessFor(depdate)
    } 
}
function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control error'
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
}