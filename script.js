// Mobile Menu
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// CLOSE MENU AFTER CLICKING LINK
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Fade-in Animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact Form (Demo)
// const form = document.getElementById('contactForm');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert("Message sent successfully!");
//   form.reset();
// });

// HERO ANIMATION
gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero-image", {
  x: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// NAVBAR
gsap.from("nav", {
  y: -80,
  opacity: 0,
  duration: 1
});

// PROJECT CARDS
gsap.from(".project-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

// SKILLS
gsap.from(".skill-card", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1
});