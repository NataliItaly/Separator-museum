/*swiper-slider*/


let myImageSlider = new Swiper('.image-slider', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
   
let mySliderAllSlides = document.querySelector('.image-slider_total');
let mySliderCurrentSlide = document.querySelector('.image-slider_current');

mySliderAllSlides.innerHTML = '0' + myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
    let currentSlide = ++myImageSlider.realIndex;
    mySliderCurrentSlide.innerHTML = '0' + currentSlide;
});