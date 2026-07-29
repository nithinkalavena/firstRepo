let form = document.getElementById('bookingForm')
form.addEventListener('submit',function(e){
    e.preventDefault()

    let bookingData = {
        fullName:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        date:document.getElementById('date').value,
        guests:document.getElementById('guests').value
    }
    console.log('Booking Details:',bookingData)
    form.reset()    
})