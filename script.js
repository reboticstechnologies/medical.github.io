
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href')===location.pathname.split('/').pop() || 
     (location.pathname.endsWith('/') && a.getAttribute('href')==='index.html')){
    a.classList.add('active');
  }
});
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
