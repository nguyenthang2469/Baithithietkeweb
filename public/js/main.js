var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true
  },
});

// var swiper1 = new Swiper(".mySwiper1", {
//   grabCursor: true,
//   effect: "creative",
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   creativeEffect: {
//     prev: {
//       shadow: true,
//       translate: ["-120%", 0, -500],
//     },
//     next: {
//       shadow: true,
//       translate: ["120%", 0, -500],
//     },
//   },
// });
var swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
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
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  grabCursor: true,
  effect: "creative",
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
});

const doanthanhnien = document.querySelector('.slide-nav-1');
const hoctap = document.querySelector('.slide-nav-2');
const cuocthi = document.querySelector('.slide-nav-3');
const $ = value => document.querySelector(value);

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
  let nd = $('.show-all').innerHTML;
  if (nd === "Xem tất cả") {
    $('.show-all').innerHTML = "Ẩn bớt";
  }
  else {
    $('.show-all').innerHTML = "Xem tất cả";
  }
  $('.mask-hidden').classList.toggle('h-[1200px]');
});
