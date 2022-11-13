// Navbar scroll
const navTop = document.getElementById("navbarTop");
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navTop.classList.add('active_nav');
    } else {
        navTop.classList.remove('active_nav');
    }
})

const navDown = document.getElementById("navbarDown");
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navDown.classList.add('active_nav');
    } else {
        navDown.classList.remove('active_nav');
    }
})


// Arrow Bottom to Top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})