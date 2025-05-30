/* Reproductor de musica (control con mouseover y mouseout) */
const reproductores = document.querySelectorAll(".lateral");

reproductores.forEach(reproductor => {
    reproductor.addEventListener("mouseover", function() {
        const cancionAsociada = this.nextElementSibling;

        if (cancionAsociada && cancionAsociada.classList.contains("music")) {
            console.log("reproduciendo musica (mouseover)");
            cancionAsociada.play();
        } else {
            console.warn("No se encontró un elemento de audio .music adyacente a este reproductor (mouseover).");
        }
    });

    reproductor.addEventListener("mouseout", function() {
        const cancionAsociada = this.nextElementSibling;

        if (cancionAsociada && cancionAsociada.classList.contains("music")) {
            console.log("pausando la musica (mouseout)");
            cancionAsociada.pause();
        } else {
            console.warn("No se encontró un elemento de audio .music adyacente a este reproductor (mouseout).");
        }
    });
});

/* Carrusel */
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateCarousel() {
const width = images[0].clientWidth + 16; // ancho + gap (ajusta si cambias el gap)
track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
if (index < images.length - 1) {
    index++;
    updateCarousel();
}
});

prevBtn.addEventListener('click', () => {
if (index > 0) {
    index--;
    updateCarousel();
}
});

window.addEventListener('resize', updateCarousel);
