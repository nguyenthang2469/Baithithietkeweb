var swiper = new Swiper(".mySwiper", {
spaceBetween: 20,
slidesPerView: 3,
freeMode: true,
watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
spaceBetween: 10,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
thumbs: {
    swiper: swiper,
},
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}