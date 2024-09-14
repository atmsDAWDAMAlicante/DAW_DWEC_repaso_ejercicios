/*  Ejercicio nº 4 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realizar un programa que lea un número real y visualice su valor absoluto, utilizando una función que devuelva el valor absoluto de ese número real.
*/

// El valor absoluto de un número es un número positivo



// Declaración de la función flecha ValorAbsoluto que recibe una variable. 
// Si la variable es menor que 0, se devuelve su valor * -1 para hacer ese número positivo.
// Si la variable es un número positivo, la función devuelve ese mismo número.
let ValorAbsoluto = (numero)=>{
    if (numero < 0){
        return numero * -1;
    } else {
        return numero;
    }
}

// Declaro e inicializo una variable que se intenta convertir en un entero.
let numero = parseInt(-4);

// El operador ternario evalúa si ha tenido éxito la conversión a entero del valor de la variable 'numero'
// Si es un número, se imprime por consola el resultado de enviar a la función 'ValorAbsoluto' el valor de 'numero'
// En caso contrario imprime por consola el mensaje "No es un número"
!(isNaN(numero))? console.log(ValorAbsoluto(numero)):console.log("No es un número");


module.exports = {
    ValorAbsoluto
}

