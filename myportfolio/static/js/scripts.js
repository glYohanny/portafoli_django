//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    var navResponsive = document.getElementById("nav");
    if (navResponsive.classList.contains("responsive")) {
        navResponsive.classList.remove("responsive");
    } else {
        navResponsive.classList.add("responsive");
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para abrir el modal
function openModal(id) {
    // Obtiene el modal por su ID
    var modal = document.getElementById(id);
    // Muestra el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(id) {
    // Obtiene el modal por su ID
    var modal = document.getElementById(id);
    // Oculta el modal
    modal.style.display = "none";
}

// Cierra el modal haciendo clic fuera del contenido
window.onclick = function(event) {
    // Si se hace clic fuera del modal, se cierra
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}


// Función para validar el formulario
$(document).ready(function() {
    $('#formulario').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario de forma predeterminada

        // Validar el formulario
        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var mensaje = $('#mensaje').val();
        var correoValido = /\S+@\S+\.\S+/;

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.");
            return false;
        }

        if (!correoValido.test(correo)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return false;
        }

        // Mostrar mensaje de éxito en el envío del formulario
        alert("El formulario se envió correctamente.");

        // Enviar el formulario a través de AJAX
        $.ajax({
            url: $(this).attr('action'),
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(response) {
                alert("Formulario enviado correctamente.");
                
            },
            error: function(xhr, status, error) {
                alert("Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
            }
        });

        return false; // Evita el envío del formulario de forma convencional
    });
});












