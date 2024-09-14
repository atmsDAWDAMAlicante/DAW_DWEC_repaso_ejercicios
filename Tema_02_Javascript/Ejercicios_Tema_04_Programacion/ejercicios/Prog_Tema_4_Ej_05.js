/*  Ejercicio nº 5 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realizar un programa con una función a la que se le pasen dos números enteros y devuelva el mayor.
*/

// función DevuelveElMayor

function DevuelveElMayor(num1, num2){
    if (num1 > num2){
        return num1;
    } else if (num1 < num2){
        return num2;
    } else {
        return "¡Dos iguales para hoy";
    }

}

console.log(DevuelveElMayor(2,3));

module.exports = {
    DevuelveElMayor
}


