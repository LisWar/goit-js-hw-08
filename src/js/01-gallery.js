import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

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

var lightbox = new SimpleLightbox('.gallery a', {caption:true, captionsData: 'alt', captionDelay: '250ms'});
