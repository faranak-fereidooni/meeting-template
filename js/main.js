
/* click on navbar for mobile */ 
function toggleMainMenu(){
  const  xx=document.querySelector(".navbar");
  xx.classList.toggle("collapsible--expanded");
}

function toggleSubmenu(){
  const  xx=document.querySelector(".navbar__submenue");
  xx.classList.toggle("page-submenu");
}

/* menue-icon for mobile */  
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

/* ********************************************************************** */ 
/* click chevron-right */
function togglecontent(){
  const  xx=document.querySelector(".apply-now3");
  xx.classList.toggle("collapsible--expanded");
}

function toggleSubcontent(){
  const  xx=document.querySelector(".icon__container");
  xx.classList.toggle("collapsible__content");
}

/* ********************************************************************** */ 
/* slider */ 
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
  loop:true,
  responsiveClass:true,
  margin:30,
  responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
          items:1,
          nav:false
      },
       768:{
           items:2,
           nav:false
    },
       820:{
           items:2,
           nav:false
  },
      912:{
          items:2,
          nav:false
},
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
});


/* Collapsible */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);   