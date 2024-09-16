/*  Ejercicio nº 7 del Tema 4 de la asignatura Programación del ciclo DAW, Curso 2022-2023
Enunciado: Realizar una función que calcule el máximo común divisor de dos números enteros. El máximo común divisor es el número más alto que divide a los dos números.
*/


// 1º Función que obtiene el valor absoluto de los números
let ValorAbsoluto = (num) => Math.abs(num);

// 2º Identificación del número menor de los dos que se enviarán por parámetro en el orden (menor, mayor)
let IdentificarMenor = function(num1, num2){
    let numeros = []
    if (num1 >= num2){ // Si num1 es EL MAYOR (o igual) a num2
        numeros.push(num1);
        numeros.push(num2);
        return numeros;
    }
    else {
        numeros.push(num2);
        numeros.push(num1);
        return numeros;
    }
};

// 3º 

function MaximoComunDivisor(num1, num2){
    num1 = ValorAbsoluto(num1);
    num2 = ValorAbsoluto(num2);
    
    let numeros = IdentificarMenor(num1, num2);

    //let MCD;
    for(i=numeros[1]; i > 0; i--){
        if ((numeros[1]%i==0) && (numeros[0]%i==0))
        {
            return i;
        }
    } 
    return 1; // este return hará que, en cualquier otro caso (por ejemplo, cuando se opere con ceros) se devuelva 1
}

console.log(`MCD entre: 1 y 2 es: ${MaximoComunDivisor(1,2)}`); // MCD: 1
console.log(`MCD entre: 45785225 y 25 es: ${MaximoComunDivisor(45785225,25)}`); // MCD: 25
console.log(`MCD entre: 5 y 1245 es: ${MaximoComunDivisor(5,1245)}`); // MCD: 5
console.log(`MCD entre: -586 y -2 es: ${MaximoComunDivisor(-586,-2)}`); // MCD: 2
console.log(`MCD entre: 2 y 2 es: ${MaximoComunDivisor(2,2)}`); // MCD: 2
console.log(`MCD entre: 0 y 1 devuelve (gracias al return fuera del if): ${MaximoComunDivisor(0,1)}`); // undefined: este pasa el test
console.log(`MCD entre: 0 y 0 devuelve (gracias al return fuera del if): ${MaximoComunDivisor(0,0)}`); // undefined: este no pasa el test


module.exports = {
    MaximoComunDivisor
}