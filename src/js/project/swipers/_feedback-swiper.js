import Swiper, {
    Pagination, Navigation, Scrollbar, Autoplay,
} from 'swiper';

Swiper.use([Pagination, Navigation, Scrollbar, Autoplay]);

if (document.querySelector('.feedback__swiper')) {
    new Swiper('.feedback__swiper', {
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,

        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
            stopOnlastSlide: false,
        },

        navigation: {
            nextEl: '.feedback__button--next',
            prevEl: '.feedback__button--prev',
        },
    });
}
