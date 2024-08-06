// Toggle navigation menu for mobile view
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function showSlide(index) {
    const cardWidth = cards[0].offsetWidth;
    const newTransform = -index * cardWidth + 'px';
    carousel.style.transform = `translateX(${newTransform})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showSlide(currentIndex);
}

setInterval(nextSlide, 2000);

