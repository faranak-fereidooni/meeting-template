
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
