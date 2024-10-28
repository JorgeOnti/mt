function imprimirInformacion() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const colorFavorito = document.getElementById("colorFavorito").value;

    const resultado = document.getElementById("resultadoInfo");
    resultado.textContent = `Nombre: ${nombre}\nCorreo: ${correo}\nEdad: ${edad}\nGénero: ${genero}\nFecha de Nacimiento: ${fechaNacimiento}\nColor Favorito: ${colorFavorito}`;
}
