// ------------- owl-carousel JS  ------------- //
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1
    });

});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1
    });

});
// ------------- Top-btn JS  ------------- //

const header = document.querySelector('header');
const top_btn = document.querySelector('.top_btn');
window.onscroll = () => {
    if (window.scrollY > 90) {
        header.classList.add("scrolled")
        top_btn.style.bottom = "20px";
    } else {
        header.classList.remove("scrolled")
        top_btn.style.bottom = "-50px";
    }
}

top_btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ------------- Popup JS  ------------- //

// var search_btn = document.querySelector('.search-btn');
const close_btn = document.querySelector('.close_btn');
const search_sec = document.querySelector('.search-sec');
const search_btn = document.querySelector('.search-btn');

search_btn.onclick = () => {
    search_sec.style.opacity = '1';
    search_sec.style.visibility = 'visible';
}
close_btn.onclick = () => {
    search_sec.style.opacity = '0';
    search_sec.style.visibility = 'hidden';
}

// dark mood button

window.onload = () => {
    localStorage.getItem("mood") == "dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    document.body.classList.contains("dark") ? document.querySelector(".dark-mode i").classList.replace("fa-moon", "fa-sun") : document.querySelector(".dark-mode i").classList.replace("fa-sun", "fa-moon");
}
document.querySelector('.dark-mode').onclick = () => {
    if (localStorage.getItem("mood")) {
        if (localStorage.getItem("mood") == "dark") {
            localStorage.setItem("mood", "light");
            document.body.classList.remove("dark");
            document.querySelector(".dark-mode i").classList.replace("fa-sun", "fa-moon")
        } else {
            localStorage.setItem("mood", "dark");
            document.body.classList.add("dark");
            document.querySelector(".dark-mode i").classList.replace("fa-moon", "fa-sun")
        }
    }
    else {
        localStorage.setItem("mood", "light");
    }
}