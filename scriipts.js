
function registrarUsuario() {
    const usuarioInput = document.getElementById("nombre");
    const cedulaInput = document.getElementById("cedula");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("numeroContacto");
    

    const usuario = usuarioInput.value;
    const cedula = cedulaInput.value;
    const email = emailInput.value;
    const numeroContacto= telefonoInput.value;
    
    alert("Registro exitoso.");
    usuarioInput.value = "";
    cedulaInput.value = "";
    emailInput.value = "";
    telefonoInput.value = "";
}