// Toggle navigation menu for mobile view
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// -------------------code for services section slider ---------------------------------

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


// --------------code for before after slider-------------------------------



const sliderButton = document.querySelector('.slider-button');
const imageAfter = document.querySelector('.image-after');
const sliderContainer = document.querySelector('.slider-container');

sliderButton.addEventListener('mousedown', startDragging);

function startDragging(e) {
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
}

function drag(e) {
    const containerRect = sliderContainer.getBoundingClientRect();
    let offsetX = e.clientX - containerRect.left;
    
    if (offsetX < 0) {
        offsetX = 0;
    } else if (offsetX > containerRect.width) {
        offsetX = containerRect.width;
    }
    
    const percentage = (offsetX / containerRect.width) * 100;
    
    imageAfter.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    sliderButton.style.left = `${percentage}%`;
}

function stopDragging() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDragging);
}
