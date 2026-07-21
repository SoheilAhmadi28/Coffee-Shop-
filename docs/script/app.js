const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector(".submenu-btn")
const submenu = document.querySelector(".submenu")
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav"); 
const card = document.querySelector(".card"); 
const overlay = document.querySelector(".overlay");
const cardOpenBtn = document.querySelector(".card-icon");
const cardColsenBtn = document.querySelector(".card-close-btn");


toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function(){
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})
submenuBtn.addEventListener("click", function(e) {
    submenu.classList.toggle("submenu--open");
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
})


navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible");

})
function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
}
navCloseBtn.addEventListener("click",closeNav)
overlay.addEventListener("click",closeNav)

cardOpenBtn.addEventListener("click",() => {
    card.classList.remove("-left-64")
    card.classList.add("left-0");
    overlay.classList.add("overlay--visible");
})
function closecard() {
    card.classList.remove("left-0");
    card.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
}
cardColsenBtn.addEventListener("click", closecard)









