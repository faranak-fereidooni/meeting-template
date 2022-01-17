/* click on navbar for mobile */
function toggleMainMenu() {
  const xx = document.querySelector(".navbar");
  xx.classList.toggle("collapsible--expanded");
}

function toggleSubmenu() {
  const xx = document.querySelector(".navbar__submenue");
  xx.classList.toggle("page-submenu");
}

/* menue-icon for mobile */
const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("open");
  });
});

/* ********************************************************************** */
/* click chevron-right */
function togglecontent() {
  const xx = document.querySelector(".apply-now3");
  xx.classList.toggle("collapsible--expanded");
}

function toggleSubcontent() {
  const xx = document.querySelector(".icon__container");
  xx.classList.toggle("collapsible__content");
}

/* ********************************************************************** */
/* owl-carousel-service */
$(document).ready(function () {
  $(".owl-carousel-service").owlCarousel({
    loop: true,
    responsiveClass: true,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      820: {
        items: 2,
        nav: false,
      },
      912: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
/*********************************************************************/ 
  /* owl-carousel-course */
  $(".owl-carousel-course").owlCarousel({
    loop: true,
    responsiveClass: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      820: {
        items: 2,
        nav: false,
      },
      912: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
      },
    },
  });
});
/*********************************************************************/ 
/* Collapsible */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
/*********************************************************************/ 
/* Count digit */ 

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".facts")) && !viewed) {
      viewed = true;
      $('.count-digit').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}