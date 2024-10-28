function evaluarCalificacion() {
    const calificacion = parseFloat(document.getElementById("calificacion").value);
    const resultado = document.getElementById("resultado");

    if (calificacion < 0 || calificacion > 10 || isNaN(calificacion)) {
        resultado.textContent = "Error: Ingrese una calificación válida entre 0 y 10.";
        return;
    }

    let equivalencia = "";

    if (calificacion < 6) {
        equivalencia = "NA";
    } else if (calificacion < 7.5) {
        equivalencia = "S";
    } else if (calificacion < 9) {
        equivalencia = "B";
    } else if (calificacion < 10) {
        equivalencia = "MB";
    } else {
        equivalencia = "LA";
    }

    resultado.textContent = `La equivalencia de la calificación es: ${equivalencia}`;
}
