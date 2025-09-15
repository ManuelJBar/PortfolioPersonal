const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const btn = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}

const cookies = document.getElementById('cookies');
const ok = document.getElementById('acceptCookies');
function hide() {
  if (cookies) cookies.style.display = 'none';
}
if (cookies) {
  const accepted = localStorage.getItem('cookiesAccepted') === 'true';
  if (accepted) hide();
  else cookies.style.display = 'block';
}
if (ok) {
  ok.addEventListener('click', () => {
