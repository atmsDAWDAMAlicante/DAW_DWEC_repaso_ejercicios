// A) PLANTILLAS LITERALES
// $` texto {variable o expresión}`
let cadena1 = `Cadena
formada
por
varias
líneas`;

let nombre = "Pedro";
let cadena2 = `Hola, ${nombre}.`; // Esta línea es equivalente a: let cadena2 = "Hola, " + nombre;
let cadena3 = `3 por 4 es igual a ${3 * 4}`; // ${3 * 4} hace la operación: 3 por 4 es igual a 12
console.log(cadena1);
console.log(cadena2);
console.log(cadena3+`\n\n`);

// B) OPERADOR TERNARIO
// let variable_que_recoge_el_resultado = (expresión a evaluar) ? si es verdad : si es falso;

function operadorTernario (num1, num2){
console.log ( ((3*num1) > num2) ? `3*${num1}=${3*num1} es mayor que ${num2}` : `3*${num1}=${3*num1} es menor que ${num2}` )
} 
operadorTernario(5,14);
operadorTernario(2,10);
console.log(`\n`);


// C) BUCLE FOR OF
let array = ["rojo", "amarillo", "verde"]; // Luces de un semáforo

for (let color of array){ // recorre los tres elementos del array
    console.log( (color == "rojo") ? "Alto, no cruce" : "Puede pasar");
}