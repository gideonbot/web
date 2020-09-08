document.addEventListener('DOMContentLoaded', () => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    window.nomax = width < 768;
}, false);