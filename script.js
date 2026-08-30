// Mobile navigation, simple reveal animations, and an accessible image lightbox.
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const year = document.querySelector('#year');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('p');
const closeLightbox = lightbox.querySelector('.lightbox-close');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.image-button').forEach((button) => button.addEventListener('click', () => {
  lightboxImage.src = button.dataset.lightboxImage;
  lightboxImage.alt = button.dataset.lightboxTitle;
  lightboxTitle.textContent = button.dataset.lightboxTitle;
  lightbox.showModal();
}));

closeLightbox.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
