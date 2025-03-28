
let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("showing");
  }

  slides[slideIndex - 1].classList.add("showing");
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 7000);
}

function resetAutoSlide() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(autoSlide, 7000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlide();
});

