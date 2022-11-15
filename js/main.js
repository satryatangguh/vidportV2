// Navbar Top scroll
const navTop = document.getElementById("navbarTop");
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navTop.classList.add('active_nav');
    } else {
        navTop.classList.remove('active_nav');
    }
})

// Navbar Down Scroll
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

// Read More Read Less Modal
let noOfCharac = 59;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    //If text length is less that noOfCharac... then hide the read more button
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice(0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

// Contact Us Alert
function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || subject.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            subject.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 3000);

}