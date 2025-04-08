 const hamburger =  document.getElementById('hamburger')
 const navClose =  document.getElementById('nav-close')

 const mobileMenu  = document.getElementById('mobile_menu') 
 //const mainMenu  = document.getElementById('main_menu')

 hamburger.addEventListener("click", ()=>{
    mobileMenu.classList.remove('hidden');
}) 
navClose.addEventListener("click", ()=>{
    mobileMenu.classList.add('hidden');
}) 

//const closeIcon  = document.getElementById('nav-close');
//const navMemu  = document.getElementById('nav-menu') 


/* const navLink = document.querySelectorAll(".nav__link")


navLink.forEach(link=>

    link.addEventListener("click", ()=>{
        navMemu.classList.add('hidden');
    })
) */

/* closeIcon.addEventListener("click", ()=>{
    navMemu.classList.add('hidden');
})

hamburger.addEventListener("click", ()=>{
    navMemu.classList.remove('hidden');
}) */


/* const hamburgers =  document.querySelector('#hamburger');
const menu =  document.getElementById('menu');
const faSolid = document.querySelector('.fa-solid');
const navLinks = document.querySelectorAll(".nav__link")

hamburgers.addEventListener("click", ()=>{
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
}) 

navLinks.forEach(link=>

    link.addEventListener("click", ()=>{
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark');
    })
) */