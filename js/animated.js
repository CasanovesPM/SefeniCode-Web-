const sections = [
  document.getElementById('mision-vision'),
  document.getElementById('div-info-diseno'),
  document.getElementById('div-info-desarrollo'),
  document.getElementById('div-info-api'),
  document.getElementById('div-info-mantenimiento'),
  document.getElementById('clientes-contactos')

];

function checkVisibility() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > window.innerHeight / 2;

    if (isVisible) {
      section.classList.add('visible');
    }
  });
}

// Check visibility on scroll and on load
window.addEventListener('scroll', checkVisibility);
checkVisibility();

