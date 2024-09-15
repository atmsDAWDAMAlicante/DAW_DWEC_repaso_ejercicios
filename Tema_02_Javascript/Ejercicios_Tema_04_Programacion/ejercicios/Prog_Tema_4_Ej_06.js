/*  Ejercicio nº 6 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realiza un programa con un subprograma al que se le pasen dos números enteros y devuelva el resultado y el resto de la división entera.
*/

// Hay que crear dos funciones: una 'Division' devuelve la división entera de dos números y otra 'Resto' devuelve el resto.

// 1º Las dos funciones pasan los tests

let Division = function(a, b){
    return parseInt(a/b);
};

let Resto = (a,b)=> a%b;

// 2º Función a la que se le pasan las dos funciones anteriores como callbacks

function ResultadoCompleto(a, b, callbackDivision, callbackResto){
    console.log(`El resultado de la división entera de ${a}/${b} = ${callbackDivision(a,b)}`);
    console.log(`El resultado del módulo de ${a}%${b} = ${callbackResto(a,b)}`);
}

// Prueba de la función con los parámetros correctos
console.log("1º Parámetros correctos");
ResultadoCompleto(4,2,Division,Resto);

//Prueba de la función con un parámetro que hace otra cosa
let Suma = (a,b)=>a+b;
console.log("2º Un parámetro incorrecto");
ResultadoCompleto(5,3,Division,Suma);


module.exports = {
    Division,
    Resto
}



