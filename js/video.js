const playScroll = document.querySelector('.play-scroll');
  
playScroll.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #FFFFFF ${value}%, #FFFFFF 100%)` 
});

const volumeScroll = document.querySelector('.volume-scroll');
  
volumeScroll.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #FFFFFF ${value}%, #FFFFFF 100%)`
  });