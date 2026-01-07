document.addEventListener('DOMContentLoaded', () => {

    const images = [
        'img/bg1.jpg',
        'img/bg2.jpg',
        'img/bg3.jpg',
        'img/bg4.jpg',
        'img/bg5.jpg'
    ];

    let current = 0;
    const slider = document.querySelector('.slider');

    if (!slider) return;

    // imagem inicial
    slider.style.backgroundImage = `url("${images[current]}")`;
    slider.style.opacity = 1;

    setInterval(() => {
        slider.style.opacity = 0;

        setTimeout(() => {
            current = (current + 1) % images.length;
            slider.style.backgroundImage = `url("${images[current]}")`;
            slider.style.opacity = 1;
        }, 1300);

    }, 7000);

});
