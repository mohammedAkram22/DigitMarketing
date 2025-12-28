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

var header = document.querySelector('header');
var search_btn = document.querySelector('.search-btn');
var top_btn = document.querySelector('.top_btn');
window.onscroll = () => {
    if (window.scrollY > 90) {
        header.style.boxShadow = 'rgba(0, 0, 0, 0.05) 0px 3px 6px 0px';
        header.style.height = '80px';
        search_btn.style.backgroundColor = "#fc3d21";
        search_btn.style.color = "#fff";
        top_btn.style.bottom = "20px";
    } else {
        header.style.boxShadow = 'none';
        header.style.height = '90px';
        search_btn.style.backgroundColor = "#f5f6f9";
        search_btn.style.color = "#fc3d21";
        top_btn.style.bottom = "-50px";
    }
}

top_btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ------------- Popup JS  ------------- //

var search_btn = document.querySelector('.search-btn');
var close_btn = document.querySelector('.close_btn');
var search_sec = document.querySelector('.search-sec');

search_btn.onclick = () => {
    search_sec.style.opacity = '1';
    search_sec.style.visibility = 'visible';
}
close_btn.onclick = () => {
    search_sec.style.opacity = '0';
    search_sec.style.visibility = 'hidden';
}