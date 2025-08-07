const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelectorAll(".elem");
var elemContainer = document.querySelector("#elem-container");
console.log(elemC);
var fixed = document.querySelector("#fixed-image");
elemC.forEach(element => {
    element.addEventListener("mouseenter", function() {
        var image = element.getAttribute("data-image");
        fixed.style.display = "block";
        fixed.style.backgroundImage = `url(${image})`;
        fixed.style.backgroundSize = "cover";
        fixed.style.backgroundPosition = "center";
    });
});
elemContainer.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
})