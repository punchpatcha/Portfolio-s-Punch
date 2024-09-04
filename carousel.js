document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carouselContainer");
  const timerProgress = document.querySelector(".timerProgress");
  const images = document.querySelectorAll(".carouselImage");
  const totalImages = images.length;
  let currentIndex = 0;

  function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    timerProgress.style.transform = "scaleX(1)"; // Reset timer
    setTimeout(() => {
      timerProgress.style.transform = "scaleX(0)"; // Start countdown
    }, 0);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  // Initialize carousel
  updateCarousel();
  setInterval(nextImage, 5000); // Move to the next image every 5 seconds
});
