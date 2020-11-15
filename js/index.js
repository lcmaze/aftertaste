$(function() {
    var $gallery = $('.gallery a').simpleLightbox();
});

$('.main-slider').owlCarousel({
    dots: true,
    loop: true,
    margin: 16,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})

// Side Nav 
function openNav() {
    var wid = window.screen.availWidth;
    if (wid >= 768) {
        document.getElementById("mySidebar").style.width = "400px";
        document.getElementById("main").style.marginRight = "400px";
    } else if (wid < 768) {
        document.getElementById("mySidebar").style.width = "250px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0px";
}

// Navbar top fix
window.onload = function() {
    load()
};

function load() {
    document.getElementById("logo-small").style.display = "none";
};

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "8px 28px";
        document.getElementById("logo-large").style.display = "none";
        document.getElementById("logo-small").style.display = "unset";
    } else {
        document.getElementById("navbar").style.padding = "24px 48px";
        document.getElementById("logo-large").style.display = "unset";
        document.getElementById("logo-small").style.display = "none";
    }
}