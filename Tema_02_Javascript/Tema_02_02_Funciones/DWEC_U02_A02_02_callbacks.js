// A) CÓDIGO ORIGINAL PARA EJECUTAR EN EL NAVEGADOR
/*
function confirmar(pregunta, si, no) {
    if (confirm(pregunta))
	si(); // Se ejecuta la función de callback pasada en el parámetro 'si'
    else
	no(); // Se ejecuta la función de callback pasada en el parámetro 'no'
}

function aceptar() {
    console.log("Has respondido que sí");
}

function cancelar() {
    console.log("Has respondido que no");
}

// Se pasan las funciones 'aceptar' y 'cancelar' como parámetros
// IMPORTANTE: se pasan los nombres de las funciones,
// no el resultado de su ejecución
// (Es decir, se pasa 'aceptar', no 'aceptar()'
confirmar("¿Sabes qué es un callback?", aceptar, cancelar);

// Si queremos hacer otro tipo de procesamiento podemos pasar otro callback a 'confirmar'
function aceptar2() {
    alert("Has respondido que sí");
}

confirmar("¿Sabes qué es un callback?", aceptar2, cancelar);
*/

// B) ADAPTACIÓN PARA EJECUTAR EL CÓDIGO EN NODE.JS

function confirmar(pregunta, si, no){
    if(pregunta){ // pregunta se pasa como un valor booleano, en el código original se ejecuta la función confirm del navegador
        si(); // Se ejecuta la función si() que es la función aceptar() pasada por parámetro
    }
    else{
        no(); // Se ejecuta la función no() que es la función cancelar() pasada por parámetro
    }
}

function aceptar(){
    console.log("Has elegido aceptar");
}
function cancelar(){
    console.log("Has elegido cancelar");
}

// llamada a la función confirmar
// 1º le paso true
confirmar(true, aceptar, cancelar); // se les pasa el nombre de la función sin paréntesis
// ese 'aceptar' y 'cancelar' son los callbacks
// 2º le paso false
confirmar(false, aceptar, cancelar);

// Si se pone aceptar() lo que se estaría pasando por parámetro es el resultado de la función y no la función, y en este caso daría error.
// confirmar(true,aceptar(),cancelar()); TypeError: si is not a function