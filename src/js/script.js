// slider

const slides = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.slider__prev'),
    next = document.querySelector('.slider__next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.slider__wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slidesWrapper).width;


let slideIndex = 1; //переменная кот. в будущем будет изменяться

// далее создаем функцию показа и скрытия слайдов

let offset = 0; //отступ

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden'; // скрываем все слайды

slides.forEach(slide => {
    slide.style.width = width;
});

const dots = [];


const dotsLi = document.querySelectorAll('.slider__indicators-dot');

dotsLi.forEach((dot, i) => {
    dot.setAttribute('data-slice-to', i + 1);
    if (i == 0) {
        dot.style.background = 'black';
        dot.style.width = '20px';
        dot.style.height = '20px';

    }
    dots.push(dot);
});



next.addEventListener('click', (e) => {
    e.preventDefault();

    plusSlides(1);

    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        // ширина слайда умноженное на кол слайдов
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    dots.forEach(dot => dot.style.opacity = '.5');

    dots[slideIndex - 1].style.opacity = 1;
});

prev.addEventListener('click', (e) => {
    e.preventDefault();

    plusSlides(-1);

    if (offset == 0) {

        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

});


// slider2

const frame = document.querySelectorAll('.comment__slide'),
    early = document.querySelector('.comment__arrow-left'),
    later = document.querySelector('.comment__arrow-right'),
    frameWrapper = document.querySelector('.comment__slider-inner'),
    frameField = document.querySelector('.comment__slider-window'),
    lengthh = window.getComputedStyle(frameWrapper).width,
    commentSlider = document.querySelector('.comment__slider-wrapper');




let frameIndex = 1; // переменная в будущем будет меняться
// индекс определяющий текущее положение слайда

let outset = 0;

// showFrame(frameIndex);

// function showFrame(n) {
//     // в параметр n приходит frameindex
//     if (n > frame.length) { //количество слайдов
//         frameIndex = 1;
//     }

//     if (n < 1) { // в параметр n приходит frameindex
//         frameIndex = frame.length;
//     }

//     frame.forEach(item => item.style.display = 'none');

//     frame[frameIndex - 1].style.display = 'block';
// }

// function plusFrame(n) {
//     showFrame(frameIndex += n);
// }

frameField.style.width = 100 * frame.length + '%';
frameField.style.display = 'flex';
frameField.style.transition = '0.5s all';

frameWrapper.style.overflow = 'hidden';

frame.forEach(slide => {
    slide.style.width = lengthh;
});

commentSlider.style.position = 'relative';

const commentDOTS = [];

for (let i = 0; i < frame.length; i++) {
    const commentDOT = document.querySelectorAll('.comment__indicators-dot');
    commentDOT.forEach((dot, i) => {
        dot.setAttribute('data-slide-to', i + 1);

        if (i == 0) {
            dot.style.cssText = `
                background-color: #fff;
                border: 1px solid #000;
            `;

        }

        commentDOTS.push(dot);
    });


}

later.addEventListener('click', () => {
    // plusFrame(1);


    if (outset == +lengthh.slice(0, lengthh.length - 2) * (frame.length - 1)) {
        outset = 0;
    } else {
        outset += +lengthh.slice(0, lengthh.length - 2);
    }

    frameField.style.transform = `translateX(-${outset}px)`;

    commentDOTS.forEach(dot => dot.style.cssText = `
        border: none;
        background-color: #4eb5e7;
    `);

    commentDOTS[frameIndex - 1].style.cssText = `
    background-color: #fff;
    border: 1px solid #000;
    `;
});


early.addEventListener('click', () => {
    // plusFrame(-1);

    if (outset == 0) {
        outset = +lengthh.slice(0, lengthh.length - 2) * (frame.length - 1);
    } else {
        outset -= +lengthh.slice(0, lengthh.length - 2);
    }

    frameField.style.transform = `translateX(-${outset}px)`;

    commentDOTS.forEach(dot => dot.style.cssText = `
        border: none;
        background-color: #4eb5e7;
    `);

    commentDOTS[frameIndex - 1].style.cssText = `
    background-color: #fff;
    border: 1px solid #000;
    `;
});




// showFrame(frameIndex); // в функцию приходит 1 и далее проходит проверку

// function showFrame(n) { // в параметр n приходит frameindex
//     if (n > frame.length) { //количество слайдов
//         frameIndex = 1;
//     }

//     if (n < 1) {    // в параметр n приходит frameindex
//         frameIndex = frame.length;
//     }

//     frame.forEach(item => item.style.display = 'none');

//     frame[frameIndex - 1].style.display = 'block';
// }

// function plusFrame(n) {
//     showFrame(frameIndex += n);
// }

// early.addEventListener('click', () => {
//     plusFrame(-1);
// });

// later.addEventListener('click', () => {
//     plusFrame(1);
// });