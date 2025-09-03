# 1) Sal del modo de búsqueda: Esc o Ctrl+C hasta ver PS C:\...>
# 2) Crea script.js con el contenido mínimo
@'
const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

const btn=document.querySelector('.menu-toggle'), nav=document.getElementById('site-nav');
if(btn&&nav){
  btn.addEventListener('click', ()=>{
    const open = btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}

const cookies=document.getElementById('cookies'), ok=document.getElementById('acceptCookies');
function hide(){ if(cookies) cookies.style.display='none'; }
if(cookies){
  const accepted = localStorage.getItem('cookiesAccepted')==='true';
  if(accepted) hide(); else cookies.style.display='block';
}
if(ok){
  ok.addEventListener('click', ()=>{
    localStorage.setItem('cookiesAccepted','true');
    hide();
  });
}
'@ | Set-Content -Encoding utf8 .\script.js

# 3) Sube los cambios
git add script.js
git commit -m "Restaura script.js mínimo (menú, año, cookies)"
git push origin main
