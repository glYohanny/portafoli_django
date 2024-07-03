// custom.js

function validateAndSend() {
    // Obtener los valores del formulario
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico es válido
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
    }

    // Aquí puedes agregar más validaciones según tus necesidades

    // Enviar el mensaje por correo electrónico
    var mailtoLink = "mailto:pedrotorresvillegas@hotmail.com" +
                     "?subject=Mensaje de " + name +
                     "&body=" + encodeURIComponent(message);
    window.location.href = mailtoLink;
}

// Asignar la función validateAndSend al evento click del botón de enviar
document.getElementById("submitButton").addEventListener("click", validateAndSend);
