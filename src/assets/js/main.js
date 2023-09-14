$(document).ready(function () {
  var swiper = new Swiper(".background-container", {
    direction: "vertical",
    // loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 0) {
    $(".header").addClass("opaque");
  } else {
    $(".header").removeClass("opaque");
  }
});
