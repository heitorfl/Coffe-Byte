let index = 0; 

function mudarSlide(direcao) {
    const slides = document.querySelectorAll('.carrossel-item');
    const totalSlides = slides.length;

    index += direcao;

    if (index < 0) {
        index = totalSlides - 1; 
    } else if (index >= totalSlides) {
        index = 0; 
    }

    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${index * 100}%)`; 
}

