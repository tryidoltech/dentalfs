// Toggle navigation menu for mobile view
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// -------------------code for services section slider ---------------------------------


let currentIndex = 0;
const cards = document.querySelectorAll('.slider-card');
const totalCards = cards.length;

function showCard(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(${-index * 100}%)`;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCard(currentIndex);
}

setInterval(nextCard, 3000); // Auto slide every 3 seconds

// Initialize the slider
showCard(currentIndex);


// --------------code for before after slider-------------------------------


const sliderButton = document.querySelector('.slider-button');
const imageAfter = document.querySelector('.image-after');
const sliderContainer = document.querySelector('.slider-container2');

sliderButton.addEventListener('mousedown', startDragging);
sliderButton.addEventListener('touchstart', startDragging);

function startDragging(e) {
    e.preventDefault();
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', stopDragging);
}

function drag(e) {
    e.preventDefault();
    const containerRect = sliderContainer.getBoundingClientRect();
    let offsetX;
    if (e.type === 'touchmove') {
        offsetX = e.touches[0].clientX - containerRect.left;
    } else {
        offsetX = e.clientX - containerRect.left;
    }

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
    document.removeEventListener('touchmove', drag);
    document.removeEventListener('touchend', stopDragging);
}
