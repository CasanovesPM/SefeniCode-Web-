document.addEventListener("DOMContentLoaded", function() {
  const sections = [
    document.getElementById('mision-vision'),
    document.getElementById('div-info-diseno'),
    document.getElementById('div-info-desarrollo'),
    document.getElementById('div-info-api'),
    document.getElementById('div-info-mantenimiento'),
    document.getElementById('clientes-contactos')
  ].filter(section => section !== null); // Esto elimina cualquier error si falta una sección

  function checkVisibility() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Ajustamos el cálculo para que sea más fluido
      const isVisible = rect.top < window.innerHeight - 100; 

      if (isVisible) {
        section.classList.add('visible');
      }
    });
  }

  // Escuchar el scroll
  window.addEventListener('scroll', checkVisibility);
  // Ejecutar una vez al cargar
  checkVisibility();
});