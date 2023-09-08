$(document).ready(function () {
  var swiper = new Swiper(".background-container", {
    direction: "vertical",
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
