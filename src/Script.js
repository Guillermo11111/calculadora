function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 + num2;
    document.getElementById('resultado').textContent = `Resultado (Suma): ${resultado}`;
}


/*Función para multiplicar*/
function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado').textContent = `Resultado (Multiplicación): ${resultado}`;
}