import Isotope from "isotope-layout";

const parentElement = document.querySelector('.gallery__items');
new Isotope(parentElement, {
    itemSelector: '.gallery__item',
    // percentPosition: true,
    layoutMode: 'fitRows',
});
