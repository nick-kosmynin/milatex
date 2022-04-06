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
    frameField = document.querySelector('.comment__slider-inner');

let frameIndex = 1; // переменная в будущем будет меняться

showFrame(frameIndex);

function showFrame(n) {
    if (n > frame.length) {
        frameIndex = 1;
    }

    if (n < 1) {
        frameIndex = frame.length;
    }

    frame.forEach(item => item.style.display = 'none');

    frame[frameIndex - 1].style.display = 'block';
}

function plusFrame(n) {
    showFrame(frameIndex += n);
}

early.addEventListener('click', () =>{
    plusFrame(-1);
});

later.addEventListener('click', ()=>{
    plusFrame(1);
});