const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');
const carouselItems = document.querySelectorAll('[data-carousel-item]');
let currentIndex = 0;
let intervalId;

function showItem(index) {
  carouselItems.forEach(item => item.classList.add('hidden'));
  carouselItems[index].classList.remove('hidden');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
}

function startSlideShow() {
  intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

function stopSlideShow() {
  clearInterval(intervalId);
}

nextButton.addEventListener('click', () => {
  stopSlideShow();
  nextSlide();
  startSlideShow();
});

prevButton.addEventListener('click', () => {
  stopSlideShow();
  prevSlide();
  startSlideShow();
});

startSlideShow(); // Start automatic sliding




//navbar script

document.getElementById('hamburger-menu').addEventListener('click', function() {
  var navbar = document.getElementById('navbar-search');
  navbar.classList.toggle('hidden');
});