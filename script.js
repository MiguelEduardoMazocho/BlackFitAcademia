const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.onclick = () => {
  nav.classList.toggle('active');
}

const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
});


function openLightbox(img){
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox(){
  document.getElementById('lightbox').style.display = 'none';
}

document.getElementById("btn-agendar").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
});