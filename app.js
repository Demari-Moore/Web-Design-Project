"use strict";

const myImage = document.getElementById("my-img");
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger .bar i"),
    mobileMenu = document.querySelector(".header .nav-bar .nav-list ul"),
    menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a"),
    headerNav = document.querySelector(".header ");

//IMAGE TRANSFORM//
function mouseIn() {
    myImage.style.left = "-28px";
    myImage.style.transform = "scale(1.3) rotate(360deg)";
    myImage.style.transition = "all 2.5s ease-in-out";
}

function mouseOut() {
    myImage.style.left = "34px";
    myImage.style.transform = "scale(1)";
}
//END IMAGE TRANSFORM-----//

//NAVIGATION MENU//

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        headerNav.style.backgroundImage = "linear-gradient(60deg, #29323c 0%, #938E93 100%)";
    } else {
        headerNav.style.backgroundImage = "none";
    }
})

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
});


//END NAVIGATION MENU-----//