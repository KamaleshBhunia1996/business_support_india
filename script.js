const btn = document.getElementById('menuBtn');
const menu = document.getElementById('navMenu');
btn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('#navMenu a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));
