const galleryInnerBlock = document.querySelector('.gallery-inner-block');


let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    
   /*  for (let i = 0; i < array.length; i++) {
        img = `<img src="assets/img/gallery/${array[i]}.jpg" alt="gallery">`;
        galleryInnerBlock.innerHTML += img;

    } */
    
    array.forEach(e => {
        const img = `<img class="gallery-img" src="./assets/img/gallery/${e}.jpg" alt="${e}">`; 
        galleryInnerBlock.innerHTML += img;        
    });
}  

shuffle(arr);