// ------------Nav bar script -----------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});


document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', ()=>{
  navLinks.classList.remove("open");
  links.forEach(link => {
    link.classList.remove("fade");
  });

  //Hamburger Animation
  hamburger.classList.remove("toggle");
}));




// ------------ End of Nav bar script -----------------------
//  --------------------- starting Automatic scrolling Caurosel js code --------------------------
let slidingMenu = [

  {
    image: "images/event.jpg"
  },
  {
    image: "images/event.jpg"
  },
  {
    image: "images/event.jpg"
  },
  {
    image: "images/event.jpg"
  },
  {
    image: "images/event.jpg"
  }
];

const carousel = document.querySelector('.carousel');
let sliders = []

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= slidingMenu.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');

  // attaching all element

  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = slidingMenu[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = 'slider';
  content.className = 'slide-content';
  sliders.push(slide);

  // adding sliding effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
}

for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);



//  --------------------- Ending Automatic scrolling Caurosel js code --------------------------


// placements script 
class ClgDetails {
  constructor(elementId, startValue, endValue, duration) {
    this.element = document.getElementById(elementId);
    this.startValue = startValue;
    this.endValue = endValue
    this.duration = duration;
    this.startTime = null;
    this.animationFrame = null;
  }

  startAnimation() {
    this.startTime = performance.now();
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }

  animate(timestamp) {
    const progress = timestamp - this.startTime;
    const percentage = Math.min(progress / this.duration, 1);
    const currentValue = Math.floor(this.startValue + percentage * (this.endValue - this.startValue));

    this.element.textContent = currentValue;

    if (percentage < 1) {
      this.animationFrame = requestAnimationFrame(this.animate.bind(this));
    }
  }

  stopAnimation() {
    cancelAnimationFrame(this.animationFrame);
  }
}

// Usage example
const values = [
  { elementId: 'EstablishmentYear', startValue: 0, endValue: 2002, duration: 3000 },
  { elementId: 'btech-studentCount', startValue: 0, endValue: 180, duration: 2000 },
  { elementId: 'mtech-studentCount', startValue: 0, endValue: 18, duration: 2000 },
  { elementId: 'FacultyCount', startValue: 0, endValue: 54, duration: 1500 },
  { elementId: 'PlacementCount', startValue: 0, endValue: 317 , duration: 4000 },
  { elementId: 'NoOfPatentsCount', startValue: 0, endValue: 38, duration: 1000 },
  { elementId: 'highestPackage', startValue: 0, endValue: 10, duration: 1000 }
];

const delayBetweenAnimations = 2000; // Delay between each animation in milliseconds
let currentIndex = 0;

function animateNextValue() {
  const { elementId, startValue, endValue, duration } = values[currentIndex];
  const collegeDetails = new ClgDetails(elementId, startValue, endValue, duration);
  collegeDetails.startAnimation();

  currentIndex++;
  if (currentIndex < values.length) {
    setTimeout(animateNextValue, delayBetweenAnimations);
  }
}

// Start the animation
animateNextValue();

// animate 
var boxReveal = {
  delay: 200,
  distance: '50px'
};
window.sr = ScrollReveal();
sr.reveal('.threePeople', boxReveal);
