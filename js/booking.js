//--------pop-up booking ticket---------

let booking = document.querySelector('.booking')
document.querySelector('#buy-now').addEventListener('click', function() {
   booking.classList.toggle('booking-active');  
});  
     

let close = document.querySelector('.close');
close.addEventListener('click', function() {
   booking.classList.toggle('booking-active'); 
});