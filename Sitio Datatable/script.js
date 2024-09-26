document.addEventListener('DOMContentLoaded', function() {
    const verMasProductosBtn = document.getElementById('ver-mas-productos');
    const productosExtra = document.querySelectorAll('.productos-grid .producto.extra');

    verMasProductosBtn.addEventListener('click', function() {
        productosExtra.forEach(function(producto) {
            if (producto.style.display === 'none') {
                producto.style.display = 'block';
                verMasProductosBtn.textContent = 'Ver menos';
            } else {
                producto.style.display = 'none';
                verMasProductosBtn.textContent = 'Ver más';
            }
        });
    });

    const verMasRecomendacionesBtn = document.getElementById('ver-mas-recomendaciones');
    const recomendacionesExtra = document.querySelectorAll('.recomendaciones-grid .recomendacion.extra');

    verMasRecomendacionesBtn.addEventListener('click', function() {
        recomendacionesExtra.forEach(function(recomendacion) {
            if (recomendacion.style.display === 'none') {
                recomendacion.style.display = 'block';
                verMasRecomendacionesBtn.textContent = 'Ver menos';
            } else {
                recomendacion.style.display = 'none';
                verMasRecomendacionesBtn.textContent = 'Ver más';
            }
        });
    });
});
