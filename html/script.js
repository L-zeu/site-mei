let slideindex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("meuslide");
     for (1 = 0; i <slides.length; i++)

    {
        slides[i].style.display = "none"
    }
    slideindex++;
    if (slideindex > slides.length)
  {slideindex = 1}
    slides[slideindex-1].style.display = "block";
     setTimeout (showSlides, 2000); //change image every 2 secods 
}
function plusSlides(n) {
    slideindex += n - 1;
    showSlides();
}