/* Función suma */
function suma(a, b) {
      // esta operación suma es correcta y pasa el test
	  return a + b;
};

/* Función resta */
function resta(a, b) {
      // esta operación resta es correcta y pasa el test
	  return a - b;
};

function multiplicacion(a, b) {
    // La función aparece vacía al comienzo del ejercicio; al implementarla correctamente pasa el test
    return a * b;

}

/* Función división */
function division(a, b) {
    // La función aparece vacía al comienzo del ejercicio; al implementarla correctamente pasa el test
    return a / b;
}


/* Función módulo */
function modulo(a, b) {
    // Añado la función módulo para obtener el resto de la división
    return a % b;
}



/* Exportación de funciones */
module.exports = {
	  suma,
	  resta,
    multiplicacion,
    division,
    modulo // añado que se exporte la función módulo
}
