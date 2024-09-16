"use strict";
const img = document.querySelector('.img');
const galleryBtns = document.querySelectorAll('.gallery__btn');
let i = 0;
galleryBtns.forEach((span, index) => {
    span.addEventListener('click', () => {
        i = index + 1;
        img.src = `Images/img${i}.jpg`;
    });
});
setInterval(() => {
    i += 1;
    if (i <= 3) {
        img.src = `Images/img${i}.jpg`;
    }
    else {
        i = 0;
    }
}, 4000);
