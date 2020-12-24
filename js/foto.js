let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex=n)
}

// Next/previous buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n>slides.length) {
        slideIndex = 1;
    }
    if (n<1) {
        slideIndex = slides.length;
    }
    for (let i=0; i<slides.length; i++)
        slides[i].style.display = "none";

    for (let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides1(){
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    slideIndex++;
    if (slideIndex>slides.length) {slideIndex = 1;}
    for (let i=0;i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i=0;i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

