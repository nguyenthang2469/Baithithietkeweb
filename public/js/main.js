console.log(document.cookie);
var setcookie=(number)=>{document.cookie = number;};
var startSlide = Number(document.cookie);
console.log(startSlide);

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
});

var swiper1 = new Swiper(".mySwiper1", {
    grabCursor: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    effect: "cube",
    grabCursor: true,
    slidesPerView: "auto",
    loop: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});

var swiper4 = new Swiper(".mySwiper4", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: true,
            translate: ["120%", 0, -500],
        },
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

var swiper5 = new Swiper(".mySwiper5", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper6 = new Swiper(".mySwiper6", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});

var swiper7 = new Swiper(".mySwiper7", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },

});
var swiper8 = new Swiper(".mySwiper-course-nav", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper9 = new Swiper(".mySwiper-course-desc", {
    spaceBetween: 10,
    initialSlide:startSlide,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper8,
    },
});
const doanthanhnien = document.querySelector('.slide-nav-1');
const hoctap = document.querySelector('.slide-nav-2');
const cuocthi = document.querySelector('.slide-nav-3');
const $ = value => document.querySelector(value);

swiper5.on('slideChange', function (swiper) {
    var arr = document.querySelectorAll('.book-content');
    // var bookActive = $('.book-content:nth-child('+(swiper.activeIndex)+')');
    arr.forEach(((el, index) => { if (swiper.activeIndex != index) el.classList.remove('active') }))
    arr[swiper.activeIndex].classList.add('active');
});

window.onload = () => {
    $('.slide-content-1').classList.remove('slide-hidden');
    $('.slide-content-1').classList.add('slide-show');
    $('.slide-content-2').classList.remove('slide-show');
    $('.slide-content-2').classList.add('slide-hidden');
    $('.slide-content-3').classList.remove('slide-show');
    $('.slide-content-3').classList.add('slide-hidden');

}

doanthanhnien.addEventListener("click", function () {
    const active = document.querySelector('.slide-nav-active');
    active.classList.remove('slide-nav-active');
    doanthanhnien.classList.add('slide-nav-active');
    $('.slide-content-1').classList.remove('slide-hidden');
    $('.slide-content-1').classList.add('slide-show');
    $('.slide-content-2').classList.remove('slide-show');
    $('.slide-content-2').classList.add('slide-hidden');
    $('.slide-content-3').classList.remove('slide-show');
    $('.slide-content-3').classList.add('slide-hidden');
});

hoctap.addEventListener("click", function () {
    const active = document.querySelector('.slide-nav-active');
    active.classList.remove('slide-nav-active');
    hoctap.classList.add('slide-nav-active');
    $('.slide-content-2').classList.remove('slide-hidden');
    $('.slide-content-2').classList.add('slide-show');
    $('.slide-content-1').classList.remove('slide-show');
    $('.slide-content-1').classList.add('slide-hidden');
    $('.slide-content-3').classList.remove('slide-show');
    $('.slide-content-3').classList.add('slide-hidden');
});
cuocthi.addEventListener("click", function () {
    const active = document.querySelector('.slide-nav-active');
    active.classList.remove('slide-nav-active');
    cuocthi.classList.add('slide-nav-active');
    $('.slide-content-3').classList.remove('slide-hidden');
    $('.slide-content-3').classList.add('slide-show');
    $('.slide-content-1').classList.remove('slide-show');
    $('.slide-content-1').classList.add('slide-hidden');
    $('.slide-content-2').classList.remove('slide-show');
    $('.slide-content-2').classList.add('slide-hidden');
});
$('.show-all').addEventListener("click", function () {
    const btnShowCourse = $('.show-all');
    if (btnShowCourse.classList.contains('showed')) {
        btnShowCourse.classList.remove('showed');
        btnShowCourse.innerHTML = "Xem tất cả";
    } else {
        btnShowCourse.classList.add('showed');
        btnShowCourse.innerHTML = "Ẩn bớt";
    }
    $('.mask-hidden').classList.toggle('h-[1200px]');
});
