window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu-link');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  menuLink.forEach(item => {
    item.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    })
  })
})



const wellcomeTitle = document.querySelector('#wellcome-title');
const wellcomeSubTitle = document.querySelector('#wellcome-subtitle');
const wellcomeButton = document.querySelector('#wellcome-btn');
const body = document.querySelector('body');

/* if (burger) {  
  burger.addEventListener('click', function() {
   
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    wellcomeTitle.classList.toggle('active');
    wellcomeSubTitle.classList.toggle('active');
    wellcomeButton.classList.toggle('active');
  }); */


const menuLink = document.querySelectorAll('.menu-link');






