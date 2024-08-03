const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const heroVideo = document.getElementById('hero-video');
const videoSource = document.getElementById('video-source');

const mobileVideoSrc = './Village-Dental2.mp4'; // Replace with your mobile video file path
const desktopVideoSrc = './Village-Dental.mp4'; // Replace with your desktop video file path

function checkScreenSize() {
    if (window.innerWidth <= 768) {
        videoSource.src = mobileVideoSrc;
    } else {
        videoSource.src = desktopVideoSrc;
    }
    heroVideo.load();
}

// Initial check
checkScreenSize();

// Check screen size on resize
window.addEventListener('resize', checkScreenSize);
