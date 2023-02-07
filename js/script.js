const openNavMobile = document.querySelector(".open-nav-mobile");
const closeNavMobile = document.querySelector(".close-nav-mobile");
const docBody = document.body;
const docNav = document.querySelector(".nav");

openNavMobile.addEventListener("click", ()=>{
    docNav.classList.add("active");
    docBody.classList.add("active");
    
});

closeNavMobile.addEventListener("click", ()=>{
    docNav.classList.remove("active");
    docBody.classList.remove("active");
});

