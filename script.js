// Menú responsive
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

// Año footer
document.getElementById('year')?.append(new Date().getFullYear());

// Cookies
const cookies = document.getElementById('cookies');
const accept = document.getElementById('acceptCookies');
if (cookies && accept) {
  if (!localStorage.getItem('cookieConsent')) cookies.classList.add('show');
  accept.addEventListener('click', () => {
    localStorage.setItem('cookieConsent','accepted');
    cookies.classList.remove('show');
  });
}
