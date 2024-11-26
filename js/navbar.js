const navItem = document.querySelector(".intro-porfolio-nav-item");
const navMenu = document.querySelector(".intro-porfolio-nav-menu");
const navLink = navItem.querySelectorAll(".nav-link");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navItem.classList.toggle("active");
});

navLink.forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navItem.classList.remove("active");
}));