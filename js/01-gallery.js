import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItem = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', onConteinerClick)


function createGalleryItems(photos) {
    return photos.map(({ preview, original, description }) => {
        return `
    <a class="gallery__link" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            alt="${description}"
        >
    </a>
    `}).join('');
};

function onConteinerClick(event) {
    const isImageElement = event.target.classList.contains('gallery__image');

    if (!isImageElement) {
        return;
    }

    // const targetImage = event.target.getAttribute("src");
    // console.log(targetImage);

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)

    instance.show()
    // const isLinkImageElement = event.target.closest('.gallery__link');
    // const largeResolutionLink = isLinkImageElement.

    // console.log(isLinkImageElement);
}



// console.log()