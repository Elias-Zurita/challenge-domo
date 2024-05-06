window.addEventListener('scroll', function() {
    var headerDesktop = document.querySelector('.cajaHeaderDesktop');
    if (window.scrollY > 100) {
        headerDesktop.classList.add('headerScrolled');
    } else {
        headerDesktop.classList.remove('headerScrolled');
    }
});


// Back to top button

const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
