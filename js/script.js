var slides = document.getElementsByClassName('slide');
var numSlides = slides.length;
var currentSlide = 0;

// Função para exibir o próximo slide
function exibirProximoSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % numSlides;
  slides[currentSlide].classList.add('active');
}

// Exibir o próximo slide a cada 3 segundos
setInterval(exibirProximoSlide, 3000);

// function para adicionar e remover borda das imagens

const images = document.querySelectorAll('.image');
let currentIndex = 1;

function updateBorder() {
 
 
  images[currentIndex].style.boxShadow = '0 0 0 3px #044091'
  images[currentIndex].style.borderColor = '#fff';
  images[currentIndex].classList.remove('active');
  
  if (currentIndex > 0) {
    images[currentIndex - 1].style.borderColor = 'transparent';
    images[currentIndex - 1].style.boxShadow = 'none';
  } else {
    images[images.length - 1].style.borderColor = 'transparent';
    images[images.length - 1].style.boxShadow = 'none';
  }

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateBorder, 3000);