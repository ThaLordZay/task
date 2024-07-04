let currentIndex = 0;

function moveCarousel(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentIndex = (currentIndex + step + totalItems) % totalItems;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

