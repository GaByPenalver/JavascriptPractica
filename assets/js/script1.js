document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelector(".errorNombre").textContent = "";
    document.querySelector(".errorAsunto").textContent = "";
    document.querySelector(".errorMensaje").textContent = "";
    document.querySelector(".resultado").textContent = "";

    let nombre = document.getElementById("nombre").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();


    let regex = /^[a-zA-Z\s]+$/;

    let isValid = true;

    
    if (!nombre) {
        document.querySelector(".errorNombre").textContent = "El nombre es requerido.";
        isValid = false;
    } else if (!regex.test(nombre)) {
        document.querySelector(".errorNombre").textContent = "El nombre solo debe contener letras.";
        isValid = false;
    }

    
    if (!asunto) {
        document.querySelector(".errorAsunto").textContent = "El asunto es requerido.";
        isValid = false;
    } else if (!regex.test(asunto)) {
        document.querySelector(".errorAsunto").textContent = "El asunto solo debe contener letras.";
        isValid = false;
    }

    if (!mensaje) {
        document.querySelector(".errorMensaje").textContent = "El mensaje es requerido.";
        isValid = false;
    } else if (!regex.test(mensaje)) {
        document.querySelector(".errorMensaje").textContent = "El mensaje solo debe contener letras.";
        isValid = false;
    }

    
    if (isValid) {
        document.querySelector(".resultado").textContent = "Mensaje enviado con éxito!!!";
        
    }
});