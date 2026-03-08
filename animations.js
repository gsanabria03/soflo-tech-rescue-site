// Selecciona todos los elementos con fade-in
const faders = document.querySelectorAll('.fade-in');

// Función para verificar si el elemento está en viewport
const appearOptions = {
  threshold: 0.2, // 20% visible
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target); // animar solo una vez
  });
}, appearOptions);

// Aplica el observer a cada fade-in
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ==========================
// Smooth scroll for anchor links
// ==========================
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
