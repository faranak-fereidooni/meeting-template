
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
