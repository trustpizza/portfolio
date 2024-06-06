import "./style.css";
import toggleMenu from "./scripts/menu";
import navigate from "./scripts/navigation";
import Carousel from "./scripts/carousel";

// Carousel
window.addEventListener('load', () => {
    const carouselElement = document.getElementById('carousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
});

// Handle resizing to toggle the carousel
function toggleCarousel() {
    const isMobile = window.innerWidth < 768;
    const carousel = document.getElementById('carousel');
    if (carousel) {
        if (isMobile) {
            carousel.classList.remove('hidden');
        } else {
            carousel.classList.add('hidden');
        }
    }
}

// Run on load and resize
window.addEventListener('load', toggleCarousel);
window.addEventListener('resize', toggleCarousel);

window.navigate = navigate;
window.toggleMenu = toggleMenu;