import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";

import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

const gallery = document.querySelector(".gallery");

galleryItems.forEach(element => {
    const markup = `
    <li>\
    <a class="gallery__item" href="${element.original}">\
    <img class="gallery__image" src="${element.preview}" alt="${element.description}" />\
    </a>\
    </li>`
    gallery.insertAdjacentHTML('beforeend', markup)
});

var lightbox = new SimpleLightbox('.gallery li a', {caption:true, captionsData: 'alt', captionDelay: '250ms'});