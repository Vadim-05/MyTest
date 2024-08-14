var swiper = new Swiper("#mySwiper", {
    slidesPerView: 1, 
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 4.5,
            spaceBetween: 30
        }
    }
});