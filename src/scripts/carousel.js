class Carousel {
    constructor(element) {
        this.element = element;
        this.currentIndex = 0;
        this.imageCount = this.element.children.length;
        this.paused = false;
        this.startCarousel();
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        document.addEventListener('click', this.handleDocumentClick);
    }

    startCarousel() {
        this.interval = setInterval(() => {
            if (!this.paused) {
                this.nextImage();
            }
        }, 3000); // Change image every 3 seconds
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.imageCount;
        this.updateCarousel();
    }

    updateCarousel() {
        const carouselWidth = this.element.clientWidth;
        const itemWidth = this.element.querySelector('.carousel-item').clientWidth;
        const offset = this.currentIndex * (itemWidth + 20) - (carouselWidth - itemWidth) / 2;
        this.element.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    }

    handleDocumentClick(event) {
        if (this.element.contains(event.target)) {
            this.pauseCarousel();
        } else {
            this.resumeCarousel();
        }
    }

    pauseCarousel() {
        this.paused = true;
    }

    resumeCarousel() {
        this.paused = false;
    }

    disconnect() {
        document.removeEventListener('click', this.handleDocumentClick);
        clearInterval(this.interval);
    }
}

export default Carousel;