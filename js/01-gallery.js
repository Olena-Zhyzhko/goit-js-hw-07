import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItem = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', onConteinerClick);


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        >
    </a>
    </div>
    `}).join('');
};

function onConteinerClick(event) {
    event.preventDefault();
    const isImageElement = event.target.classList.contains('gallery__image');

    if (!isImageElement) {
        return;
    }

    const srcLagestSizePhoto = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${srcLagestSizePhoto}">`)

    instance.show()
    
    gallery.addEventListener("keydown", onCloseModal, { once: true });

    function onCloseModal(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close();
        }
    }
   
}

 

// console.log()