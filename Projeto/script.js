


// Carrossel com as imagens

const images = document.querySelectorAll('.imgs-box img');
let currentIndex = 0;

function nextImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
}

setInterval(nextImage, 4000); // Alterne a cada 3 segundos (ajuste conforme necessário)
