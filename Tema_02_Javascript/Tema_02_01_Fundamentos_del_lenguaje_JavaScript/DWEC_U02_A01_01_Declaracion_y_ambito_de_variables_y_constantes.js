// A) DECLARACIÓN DE VARIABLES

// En este código de ejemplo se muestra como con var se puede volver a declarar una variable en JavaScript sin que dé error
// aunque esa práctica no es recomendable

var a = 5; // Variable definida en el objeto global
var a = "hola"; // Redeclaración de la variable a con var

// Con let no cabe esta posibilidad de la redeclaración de variables

let b = 6; // Variable definida en el objeto global
// Intentar 'let b = "hola";' produciría el siguiente error: Error: Uncaught SyntaxError: Identifier 'b' has already been declared



// B) DECLARACIÓN DE VARIABLES DENTRO DE UNA FUNCIÓN O BLOQUE
function funcion1() {

    // B.1) a y b fueron definidas fuera de la función, lo que supone que fueron definidas en el objeto global.
    // JavaScript las busca en la función y, como no las encuentra, las busca en el objeto global.
    console.log(`La variable a '${a}' se encuentra en el objeto global`);
    console.log(`La variable b '${b}' se encuentra en el objeto global`);


    // B.2) Esta variable c ha sido definida dentro del ámbito de la función, por lo tanto
    // no podrá ser llamada fuera de esta función (dará error: ver nota **)
    var c = "hola"; // Variable definida en el ámbito de la funcion


    // B.3) Bucle for: se declara la variable d1 CON LET por tanto sólo existirá dentro del bucle for.
    for (let d1=0; d1<5; d1++) {
	        console.log(d1); // imprime del 0 al 4
        }
    // Esta llamada fuera del bucle console.log(d1); dará el siguiente error: Error: Uncaught ReferenceError: d1 is not defined


    // B.4) Bucle for: se declara la variable d2 CON VAR por tanto SÍ existirá en el ámbito de la función donde ha sido creada
    for (var d2=0; d2<5; d2++) {
	        console.log(d2); // imprime del 0 al 4
        }
    // Se llama a d2 fuera del bucle for, pero dentro de la función y, como ha sido definida con var y dentro de una función,
    // sí puede ser invocada correctamente dentro de esta función.
    console.log(d2); // Imprimirá por consola 5.


    // B.5) Bloque condicional if. Se declaran dentro dos variables, una con var y otra con let
    if (true) {
            var e = 52;
            let f = 60;
        }
    // Fuera del bloque if (y dentro de la función) se invocan a las dos variables, pero sólo podrá hacerse sin error con la 
    // variable declarada con var, ya que, la llamada, está dentro de la función.
    console.log(e); // Imprime 52
    // Esta llamada 'console.log(f);' dará un error: "f" solo está definida en el bloque del "if"

} // Fin de la función


//Nota** console.log(c); dará un error: Uncaught ReferenceError: c is not defined (solo existe dentro de funcion1)



// C) CONSTANTES
const g = 52;
// LAS CONSTANTES NO SE PUEDEN REASIGNANR 'g = "hola";' dará un error: Error: Uncaught TypeError: Assignment to constant variable.

// Si la constante es un array, se podrá reasignar cualquiera de sus elementos, porque esa reasignación de cualquiera
// de sus elementos no supondrá, en ningún caso, la reasignación de la propia constante.
const h = ["a", "b"];
h[0] = "d"; // Por tanto este código es correcto: "h" no se reasigna, sólo está cambiando el primer elemento del array.


// Llamada a la función funcion1() para comprobar su funcionamiento.
funcion1();