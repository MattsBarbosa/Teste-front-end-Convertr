let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const bars = document.querySelectorAll('.bar');

function changeSlide(index) {
    slides[currentSlide].classList.remove('active');
    bars[currentSlide].classList.remove('active');

    slides[index].classList.add('active');
    bars[index].classList.add('active');

    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    changeSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(prevIndex);
}

setInterval(nextSlide, 5000);


document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const sliderWrapper = slider.querySelector('.slider_wrapper');
        const leftArrow = slider.querySelector('.left_arrow');
        const rightArrow = slider.querySelector('.right_arrow');

        const scrollStep = 300;

        leftArrow.addEventListener('click', () => {
            sliderWrapper.scrollBy({
                left: -scrollStep,
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            sliderWrapper.scrollBy({
                left: scrollStep,
                behavior: 'smooth'
            });
        });
    });
});