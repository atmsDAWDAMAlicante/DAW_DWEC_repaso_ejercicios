/*  Ejercicio nº 6 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realiza un programa con un subprograma al que se le pasen dos números enteros y devuelva el resultado y el resto de la división entera.
*/

// Hay que crear dos funciones: una 'Division' devuelve la división entera de dos números y otra 'Resto' devuelve el resto.

let Division = function(a, b){
    parseInt(a);
    parseInt(b);
    return a/b;
};
let Resto = (a,b)=>a%b;
/*
function Resto(a,b){
    return a%b;
}
*/


module.exports = {
    Division,
    Resto
}



