// A) CÓDIGO ORIGINAL
/*
function calcularMedia(...numeros) {
  // El parámetro 'numeros' es un array que contiene el listado
  // de los parámetros pasados en la llamada a la función

  let suma = 0;
  let cantidad = numeros.length;

  if (cantidad == 0) return 0;

  for (let num of numeros) {
    suma += num;
  }

  return suma / cantidad;
}

let media1 = calcularMedia(4, 6, 5); // 5
let media2 = calcularMedia(20, 40, 80, 60); // 50
let media3 = calcularMedia(3, 16, 22, 98, 16, 40); //32.5
*/
// B) PRIMERO PROBAR EL OPERADOR REST: como se pasan por parámetro y se recibe el array en una función

let separador = "-------------------------";

function ImpresionCatalogo(nombre, ...elementos){
  console.log(`El catálogo de ${nombre} consta de ${elementos.length} elementos:`);
  for (let elemento of elementos){
    console.log(`- ${elemento}`);
  }
  console.log(`${separador}`);
}

ImpresionCatalogo("Electrodomésticos", "Nevera", "Televisión", "Horno", "Video VHS", "Radiocassette");
ImpresionCatalogo("Muebles", "mesa", "silla", "armario", "estantería");
ImpresionCatalogo("Ropa", "pantalón", "camisa", "camiseta")

// C) SEGUNDO PROBAR EL OPERADOR SPREAD: individualizar los elementos del array

let conjuntoCompleto = ["Pepe", "Juan", "Luis", "María", "Federico", "Ana", "Manolo"];
let grupo1 = ["Paco", "Mariano", ...conjuntoCompleto, "Antonio"];
let lista = [];
for (let individuo of grupo1)
  {
    if ((individuo != "Juan") && (individuo != "Federico") && (individuo != "Ana"))
    lista.push(individuo);
  }
console.log("Nueva lista: ");
for (let individuo of lista){
    console.log(`- ${individuo}`);
  }
console.log(lista); 
/* Esto imprime:
[
  'Paco',    'Mariano',
  'Pepe',    'Luis',
  'María',   'Manolo',
  'Antonio'
]
*/

console.log([...lista[1]]); // IMPRIME CADA CARACTER DEL ELEMENTO 1 "Mariano"
/* Esto imprime:
[
  'M', 'a', 'r',
  'i', 'a', 'n',
  'o'
]
*/


// Ahora con números:

let numeros = [1346846651,65645,31235,314,6354654,321,354,5454];
//console.log([...numeros[0]]); esto falla porque los números no son iterables.
// para descomponer un número del array de números habría que añadir el método toString()
console.log([...numeros[0].toString()]);
/* Esto imprime:
[
  '1', '3', '4', '6',
  '8', '4', '6', '6',
  '5', '1'
]
  */