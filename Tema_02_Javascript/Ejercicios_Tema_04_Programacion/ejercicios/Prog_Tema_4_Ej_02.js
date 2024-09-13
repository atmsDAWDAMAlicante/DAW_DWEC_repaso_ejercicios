/*  Ejercicio nº 2 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realizar un programa que lea 2 números y compruebe si el primero de esos números es divisible por el otro. 
Hacer con una función que devolverá verdadero o falso.
*/

let EsDivisible = function(a,b){
    if ( (a%b) == 0){
        return true;
    } else {
        return false;
    }
};

console.log(`¿4 es divisible por 4? Respuesta: ${EsDivisible(4,4)}`);
console.log(`¿7 es divisible por 3? Respuesta: ${EsDivisible(7,3)}`);

module.exports = {
    EsDivisible
}
