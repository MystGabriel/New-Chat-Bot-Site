// SCROLL ANIMATION
AOS.init();

// NAV
$(document).ready(function(){
    $('.btn').click(function(){
        $('.items').toggleClass("show");
        $('ul li').toggleClass("hide");
    });
});

let navbar = document.querySelector('nav');
var scrollPrev = window.pageYOffset;
window.onscroll = function(){
    var scrollCur = window.pageYOffset;
    if(scrollPrev > scrollCur){
        navbar.style.top = "0";
    }else{
        navbar.style.top = "-90px";
    }
    scrollPrev = scrollCur;
}

$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

// CAROUSEL
$('.carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// VIDEO
const play = document.querySelector(".video");
const closeBtn = document.querySelector(".bx-x");
const video = document.querySelector(".preview");
const auto = document.querySelector(".video-preview");

play.onclick = () => {
    video.classList.add("active");
    auto.play();
}

closeBtn.onclick = () => {
    video.classList.remove("active");
    auto.pause();
}

// 3D
VanillaTilt.init(document.querySelector(".app"), {
    max: 5,
    speed: 600
});