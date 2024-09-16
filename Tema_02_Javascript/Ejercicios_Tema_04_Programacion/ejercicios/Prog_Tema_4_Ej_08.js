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

}

console.log(ValidarNumerosIntroducidos(1,20,30))



module.exports = {
    ValidarNumerosIntroducidos,
    CalcularMedia
}




