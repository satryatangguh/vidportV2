// Navbar top scroll
const navTop = document.querySelector('.navbar-top');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navTop.classList.add('active_nav');
    } else {
        navTop.classList.remove('active_nav');
    }
})

// Navbar down scroll
const navDown = document.querySelector('.navbar-down');
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