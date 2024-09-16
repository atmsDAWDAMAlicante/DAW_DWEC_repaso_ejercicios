// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_07.js');

let arrayMaximoComunDivisor = [
    [1,2,1],
    [45785225, 25, 25],
    [5,1245,5],
    [-586, -2, 2], // En la llamada al método IdentificarMenor() se enviarán los valores absolutos para controlar los números negativos
    [2, 2, 2],
    [0, 1, 1], // Supuesto en que se pasa/n 0 por parámetro/s; el método devuelve 1 gracias al return 1; que hay fuera del if
    [0, 0, 1]  // Supuesto en que se pasa/n 0 por parámetro/s; el método devuelve 1 gracias al return 1; que hay fuera del if
];

describe("Máximo común divisor", function(){
    arrayMaximoComunDivisor.forEach(([input1, input2, expected], index) => {
        it(`Supuesto nums. ${input1} y ${input2}`,function(){
            ejercicios.MaximoComunDivisor.should.be.a.Function;
            ejercicios.MaximoComunDivisor((input1,input2),expected).should.exactly(expected).and.be.a.Number
        });
    });
});