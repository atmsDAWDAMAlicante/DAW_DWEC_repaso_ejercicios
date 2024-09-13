/*  Ejercicio nº 3 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realizar un subprograma que intercambie el valor de 2 variables enteras y visualice los valores intercambiados.
*/

/* NOTA: el Tema 4 "Programación Modular" de la asignatura de 'Programación' (DAW) se explica antes que los arrays */

let Intercambio = function(a,b){
    console.log(`1ª posición original: ${a}`)
    console.log(`2ª posición original: ${b}`)
    let cambio = [];
    cambio.push(b);
    cambio.push(a);
    return cambio;
}


let resultado = Intercambio(1,2);


console.log("--------------------");


for (i = 0; i < resultado.length; i++)
{
    console.log(`${(i+1)}ª posición cambiada: ${resultado[i]}`)
}


module.exports = {
    Intercambio
}


