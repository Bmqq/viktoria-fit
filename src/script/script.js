document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function updateSlider() {

      slider.style.transform = `translateX(-${currentSlide * 50}%)`;


      dots.forEach((dot, index) => {
          if (index === currentSlide) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }

  dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {

          if (index < slides.length) {
              currentSlide = index;
              updateSlider();
          }
      });
  });


  updateSlider();
});