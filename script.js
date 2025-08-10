// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function page4Animation() {
    var elemC = document.querySelectorAll(".elem");
    var elemContainer = document.querySelector("#elem-container");
    console.log(elemC);
    var fixed = document.querySelector("#fixed-image");
    elemC.forEach(element => {
        element.addEventListener("mouseenter", function () {
            var image = element.getAttribute("data-image");
            fixed.style.display = "block";
            fixed.style.backgroundImage = `url(${image})`;
            fixed.style.backgroundSize = "cover";
            fixed.style.backgroundPosition = "center";
        });
    });
    elemContainer.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    })
}

swiperAnimation();

page4Animation();

var menu = document.querySelector("nav h3");
menu.addEventListener("click", () => {
    var menuDiv = document.querySelector("#full-scr");
    menuDiv.style.top = "0%"
})