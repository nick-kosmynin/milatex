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

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden'; // скрываем все слайды

slides.forEach(slide => {
    slide.style.width = width;
});

    const dots = [];


    const dotsLi = document.querySelectorall('li');


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

    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        // ширина слайда умноженное на кол слайдов
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;




});

prev.addEventListener('click', (e) => {
    e.preventDefault();

    if (offset == 0) {

        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});























// function showSlides(n) {
//     if (n > slides.length){ //если ушли в правую границу, то перемещаемся в нач.
//         slideIndex = 1;
//     }

//     if(n < 1) {
//         slideIndex = slides.length;  //если ушли в левую границу, то перемещаемся 
//         //в конец

//     }  



// }