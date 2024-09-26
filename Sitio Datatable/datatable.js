$(document).ready(function() {
    $('#productosTabla').DataTable({
        "language": {
            "search": "Buscar en productos:",
            "lengthMenu": "Mostrar _MENU_ productos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ productos",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }
    });
});
