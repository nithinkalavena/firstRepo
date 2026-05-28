
let step = sessionStorage.getItem('step')|| 1

show(step)

function show(s){
    step1.style.display='none'
    step2.style.display='none'
    step3.style.display='none'

    document.getElementById('step'+s).style.display='block'

    sessionStorage.setItem('step',s)

    if(s==3){
        review.innerHTML = 
        sessionStorage.getItem('name')+' '+
        sessionStorage.getItem('email')+' '+
        sessionStorage.getItem('city')+' '+
        sessionStorage.getItem('country') 
    }
}


function next(s){
    sessionStorage.setItem('name',name.value)
    sessionStorage.setItem('email',email.value)
    sessionStorage.setItem('city',city.value)
    sessionStorage.setItem('country',country.value)
    show(s)
}

function submitForm(){
    sessionStorage.clear()
    alert('form submitted')
}