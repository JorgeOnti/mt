function calcularFactorial() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultadoFactorial");

    if (numero < 0) {
        resultado.textContent = "El factorial no está definido para números negativos.";
    } else {
        resultado.textContent = `El factorial de ${numero} es: ${factorial(numero)}`;
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
