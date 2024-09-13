/*  Ejercicio nº 1 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realizar un programa que lea dos números y los sume con una función que realice la suma.
*/

function suma1(a,b){
    return a+b;
}

let suma2 = function(a,b){
    return a+b;
}

let suma3 = (a,b)=>a+b;


console.log(`Función suma1() de 2 + 3 = ${suma1(2,3)}`);
console.log(`Función suma2() de 4 + 5 = ${suma2(4,5)}`);
console.log(`Funcion suma3() de 1 + 9 = ${suma3(1,9)}`);


module.exports = {
    suma1,
    suma2,
    suma3
}