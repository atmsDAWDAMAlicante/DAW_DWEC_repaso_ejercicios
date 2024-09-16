/*  Ejercicio nº 8 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realizar un programa que lea 3 números correspondientes a las notas de un alumno y devuelva su nota media. 
El programa debe validar las notas de forma que estén comprendidas entre 0 y 10.
Hay que realizar una función para realizar esta validación, así como una función para calcular la nota media del alumno.
*/


function ValidarNumerosIntroducidos(...notas){
    let fallido = true;
    for (let nota of notas){
        if ( (nota < 0) || (nota > 10) ){
            return false;
        }
    }
    return true;

}


function CalcularMedia (...notas){
    let total = 0;
    let longitud = notas.length;
    let validarNotas = ValidarNumerosIntroducidos(...notas);
    if (validarNotas){
        for(let nota of notas){
            total += nota;
        }
        // IMPORTANTE: aquí se devuelve la media.
        // Los decimales se separan con puntos. 
        // Sólo dos posiciones decimales se obtienen con el método .toFixed(2) que devuelve un string
        // El string hay que convertirlo en float con parseFloat()
        return parseFloat((total/longitud).toFixed(2));
    } else {
        return -1;
    }
}

console.log(ValidarNumerosIntroducidos(1,20,30)); // false
console.log(CalcularMedia(2,3,4,57,5,4,3)); // -1 
console.log(CalcularMedia(2,3,4,5,5,4,3)); // 3.71

module.exports = {
    ValidarNumerosIntroducidos,
    CalcularMedia
}




