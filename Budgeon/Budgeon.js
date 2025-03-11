document.querySelectorAll('.download-btn, .image').forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(1.05)';
    });
    el.addEventListener('touchend', () => {
        el.style.transform = 'scale(1)';
    });
});
