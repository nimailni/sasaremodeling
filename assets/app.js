import { getPhotos } from '../data/site.mjs';
import { locales } from '../data/locales.mjs';
const language = document.documentElement.dataset.language || 'en';
const photos = getPhotos(language);
const text = locales[language];

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const closeMenu = () => { menuToggle.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); };
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open', !expanded);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuToggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
matchMedia('(min-width: 1081px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const cards = [...document.querySelectorAll('.gallery-card')];
const filters = [...document.querySelectorAll('.filter-button')];
filters.forEach(filter => filter.addEventListener('click', () => {
  const category = filter.dataset.category;
  filters.forEach(item => item.setAttribute('aria-pressed',String(item === filter)));
  cards.forEach(card => { const photo = photos.find(item => item.id === card.dataset.photo); card.hidden = category !== 'All photos' && !(photo.categories || [photo.category]).includes(category); });
  document.querySelector('#gallery-status').textContent = text.photoStatus(cards.filter(card => !card.hidden).length, category);
}));

const dialog = document.querySelector('.lightbox');
const viewerImage = dialog.querySelector('img');
let selected = 0, viewerPhotos = [], opener = null;
function showPhoto(index) {
  selected = (index + viewerPhotos.length) % viewerPhotos.length;
  const photo = viewerPhotos[selected];
  viewerImage.src = photo.src;
  viewerImage.alt = photo.alt;
  dialog.querySelector('.lightbox-caption').textContent = photo.caption;
  dialog.querySelector('.lightbox-count').textContent = `${selected + 1} / ${viewerPhotos.length}`;
}
cards.forEach(card => card.addEventListener('click', () => {
  opener = card;
  viewerPhotos = cards.filter(item => !item.hidden).map(item => photos.find(photo => photo.id === item.dataset.photo));
  showPhoto(viewerPhotos.findIndex(photo => photo.id === card.dataset.photo));
  dialog.showModal();
  document.body.classList.add('viewer-open');
  dialog.querySelector('.lightbox-close').focus();
}));
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(selected - 1));
dialog.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(selected + 1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(selected - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(selected + 1); }
});
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.body.classList.remove('viewer-open'); opener?.focus(); });
let touchStart = null;
viewerImage.addEventListener('touchstart', event => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
viewerImage.addEventListener('touchend', event => { if (touchStart === null) return; const difference = event.changedTouches[0].clientX - touchStart; if (Math.abs(difference) > 60) showPhoto(selected + (difference < 0 ? 1 : -1)); touchStart = null; }, { passive: true });
