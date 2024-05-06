window.addEventListener('scroll', function() {
    var headerDesktop = document.querySelector('.cajaHeaderDesktop');
    if (window.scrollY > 100) {
        headerDesktop.classList.add('headerScrolled');
    } else {
        headerDesktop.classList.remove('headerScrolled');
    }
});