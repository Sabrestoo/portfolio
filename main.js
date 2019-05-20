let mainNavLinks = document.querySelectorAll("nav a");

let mainSections = document.querySelectorAll(".main");


let lastId;
let cur = [];



window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  
  
  mainNavLinks.forEach(link => {
    
    let section = document.querySelector('a'.href);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});