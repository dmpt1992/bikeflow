document.addEventListener('DOMContentLoaded', async () => {
    const images = [
        'img/bg1.jpg',
        'img/bg2.jpg',
        'img/bg3.jpg',
        'img/bg4.jpg',
        'img/bg5.jpg'
    ];

    const slider = document.querySelector('.slider');
    if (!slider) return;

    // Preload + debug
    const preload = (src) => new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ src, ok: true });
        img.onerror = () => resolve({ src, ok: false });
        img.src = src;
    });

    const results = await Promise.all(images.map(preload));
    const okImages = results.filter(r => r.ok).map(r => r.src);

    // Log útil para veres o que falhou
    results.forEach(r => {
        if (!r.ok) console.warn('[bikeflow] failed to load:', r.src);
    });

    // Se nenhuma carregar, não tenta slider (fica o fallback do CSS)
    if (!okImages.length) {
        console.warn('[bikeflow] no background images loaded. Check /img paths & filenames.');
        return;
    }

    let current = 0;
    slider.style.backgroundImage = `url("${okImages[current]}")`;
    slider.style.opacity = 1;

    setInterval(() => {
        slider.style.opacity = 0;

        setTimeout(() => {
            current = (current + 1) % okImages.length;
            slider.style.backgroundImage = `url("${okImages[current]}")`;
            slider.style.opacity = 1;
        }, 700);
    }, 6500);
});
