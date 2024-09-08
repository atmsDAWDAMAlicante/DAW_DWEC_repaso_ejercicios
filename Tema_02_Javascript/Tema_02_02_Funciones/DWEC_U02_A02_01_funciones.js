// A) CÓDIGO ORIGINAL
let nombre1 = "Pedro"; // Variable global
let nombre2 = "Pablo"; // Variable global


function nombres() {
  let nombre3 = "Juan"; // Variable local
  let nombre2 = "Jorge"; // Variable local que enmascara la variable global 'nombre2'

  console.log(nombre1); // Pedro
  console.log(nombre2); // Jorge
  console.log(nombre3); // Juan
}

console.log(nombre1); // Pedro
console.log(nombre2); // Pablo
// console.log(nombre3); // undefined --- esto, en realidad da un error en ejecución

// B) FUNCIONES POR PARÁMETRO.
// Cambio del código para que las llamadas a los nombres sean independientes

function llamarNombre1()
  {
    console.log(`Hola, ${nombre1}`);
  }
  function llamarNombre2()
  {
    console.log(`Hola, ${nombre2}`);
  }

  // Pasar las funciones como parámetros y ver qué se imprime
  console.log(llamarNombre1()); // Esta línea imprime dos cosas: "Hola, Pedro" y undefined
  console.log(llamarNombre2); // Imprime: [Function: llamarNombre2]

  // console.log(llamarNombre1());
  // Aquí se le está pasando la llamada a una función que no tiene return, por eso
  // primero ejecuta la función e imprime "Hola, Pedro" y luego imprime lo que sería el return "undefined" en este caso.

  // console.log(llamarNombre2); 
  // Como se pasa la 'función' sin ejecutarla se imprime información sobre el objeto que es: [Function: llamarNombre2]

 // Al pasar la función A sin paréntesis, como parámetro a una función B, se está pasando la función A para ser ejecutada 
 // dentro de la función B
 // En caso de incluir los paréntesis se estará pasando el resultado de la función A como parámetro a la función B
function llamarNombre3()
{
  return "Hola, Pepe";
}
// Versión se pasa la función con paréntesis:
// restoDelSaludo1("Buenas tardes", llamarNombre3()); lo que entra como 'b' en function restoDelSaludo1(a, b) 
// es directamente 'Hola, Pepe' ya que lo que se pasa es el resultado de la función
 function restoDelSaludo1(a, b)
 {
  console.log(`${a}. ${b}`);
 }

 restoDelSaludo1("Buenas tardes", llamarNombre3()); // Buenas tardes. Hola, Pepe

// Versión se pasa la función sin paréntesis:
// Sin paréntesis se envía la referencia a la función y no su resultado, por lo que, para que se vea o produzca el resultado
// hay que ejecutarla dentro de la función que lo recibe. En el ejemplo: en la línea console.log(`${b()}. ${a}`);
function restoDelSaludo2(a, b)
{
console.log(`${b()}. ${a}`);
}

restoDelSaludo2("Buenas noches", llamarNombre3); // Hola, Pepe. Buenas noches