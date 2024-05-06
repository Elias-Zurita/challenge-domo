// Configuracion para volver Responsive el Carrousel de Swiper Servicios

const swiperEl = document.querySelector('swiper-container');
        
const params = {
    loop: true,
    grabCursor: true,
    breakpoints: {
        1100: {
        slidesPerView: 2,
        },
    },
    navigation: true,
};

Object.assign(swiperEl, params)

swiperEl.initialize();
