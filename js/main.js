// Arrow Bottom to Top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})