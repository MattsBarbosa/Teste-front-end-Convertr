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


document.querySelectorAll('.h3').forEach(header => {
    header.addEventListener('click', () => {
        const dropdown = header.nextElementSibling;

        dropdown.classList.toggle('active');
        
        header.classList.toggle('active');
    });
});