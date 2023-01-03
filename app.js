let menu = document.querySelector(".menu");
let body = document.querySelector("body");

function toggleMenu() {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        body.style.position = "static";
    }
    else {
        menu.classList.add("show");
        body.style.position = "fixed";
    }
}