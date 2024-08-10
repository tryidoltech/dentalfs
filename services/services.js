// --------------------------------------------------------------------------
// --------------Toggle navigation menu for mobile view----------------------
// -------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.querySelector('i').classList.toggle('fa-bars');
        menuIcon.querySelector('i').classList.toggle('fa-times');
    });
});

// ------------------------------------------------------------------------
// --------------code for before after slider-------------------------------
// -------------------------------------------------------------------------
let currentSlide5 = 0;

function changeSlide(direction) {
    const slides5 = document.querySelectorAll('.slide5');
    currentSlide5 = (currentSlide5 + direction + slides5.length) % slides5.length;
    document.querySelector('.slider5').style.transform = `translateX(${-currentSlide5 * 400}px)`;
}

// Optional: Add automatic sliding every 3 seconds
// setInterval(() => {
//     changeSlide(1);
// }, 3000);

// Before-After slider functionality
const sliders5 = document.querySelectorAll('.slider-container25');

sliders5.forEach((sliderContainer5) => {
    const sliderButton5 = sliderContainer5.querySelector('.slider-button5');
    const imageAfter5 = sliderContainer5.querySelector('.image-after5');

    sliderButton5.addEventListener('mousedown', startDragging);
    sliderButton5.addEventListener('touchstart', startDragging);

    function startDragging(e) {
        e.preventDefault();
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
        document.addEventListener('touchmove', drag);
        document.addEventListener('touchend', stopDragging);
    }

    function drag(e) {
        e.preventDefault();
        const containerRect5 = sliderContainer5.getBoundingClientRect();
        let offsetX;
        if (e.type === 'touchmove') {
            offsetX = e.touches[0].clientX - containerRect5.left;
        } else {
            offsetX = e.clientX - containerRect5.left;
        }

        if (offsetX < 0) {
            offsetX = 0;
        } else if (offsetX > containerRect5.width) {
            offsetX = containerRect5.width;
        }

        const percentage = (offsetX / containerRect5.width) * 100;

        imageAfter5.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        sliderButton5.style.left = `${percentage}%`;
    }

    function stopDragging() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDragging);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', stopDragging);
    }
});

// ----------------------------------------------------------------------------
// ---------------------------------code for popup form------------------------
// ----------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
    const openPopupButtons = document.querySelectorAll('.open-popup');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    openPopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

const carouselTrack = document.querySelector('.carousel-track');
let isTouchActive = false;
let initialTouchPos = 0;
let currentSlidePos = 0;
let previousSlidePos = 0;
let animationFrameID;
let activeSlideIndex = 0;

carouselTrack.addEventListener('touchstart', handleTouchStart);
carouselTrack.addEventListener('touchend', handleTouchEnd);
carouselTrack.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
    isTouchActive = true;
    initialTouchPos = event.touches[0].clientX;
    carouselTrack.style.transition = 'none';
    animationFrameID = requestAnimationFrame(runAnimation);
}

function handleTouchEnd() {
    isTouchActive = false;
    cancelAnimationFrame(animationFrameID);

    const swipeDistance = currentSlidePos - previousSlidePos;

    // Calculate the width of each carousel slide
    const slideWidth = carouselTrack.children[0].offsetWidth;

    if (swipeDistance < -slideWidth / 4 && activeSlideIndex < carouselTrack.children.length - 1) {
        activeSlideIndex += 1;
    }

    if (swipeDistance > slideWidth / 4 && activeSlideIndex > 0) {
        activeSlideIndex -= 1;
    }

    updateSlidePosition();
}

function handleTouchMove(event) {
    if (isTouchActive) {
        const currentTouchPos = event.touches[0].clientX;
        currentSlidePos = previousSlidePos + currentTouchPos - initialTouchPos;
    }
}

function runAnimation() {
    carouselTrack.style.transform = `translateX(${currentSlidePos}px)`;
    if (isTouchActive) requestAnimationFrame(runAnimation);
}

function updateSlidePosition() {
    const slideWidth = carouselTrack.children[0].offsetWidth;
    currentSlidePos = activeSlideIndex * -slideWidth;
    previousSlidePos = currentSlidePos;
    carouselTrack.style.transition = 'transform 0.3s ease-in-out';
    carouselTrack.style.transform = `translateX(${currentSlidePos}px)`;
}

let currentSlidet = 0;

function moveSlides(n) {
    const slides = document.querySelectorAll('.slidet');
    const totalSlides = slides.length;

    currentSlidet += n;

    if (currentSlidet < 0) {
        currentSlidet = totalSlides - 1;
    }

    if (currentSlidet >= totalSlides) {
        currentSlidet = 0;
    }

    const slideWidth = slides[0].offsetWidth;
    const newTransform = -slideWidth * currentSlidet;
    document.querySelector('.slidert').style.transform = `translateX(${newTransform}px)`;
}