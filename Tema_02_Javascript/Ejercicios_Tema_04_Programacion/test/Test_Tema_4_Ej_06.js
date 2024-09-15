// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_06.js');

// Hay que probar dos funciones, una 'Division' devuelve la división de dos enteros y otra 'Resto' devuelve el resto

let arrayDivision = [
    [4,2,2],
    [5,3,1],
    [16,20,0]
]

let arrayResto = [
    [4,2,0],
    [5,3,2],
    [16,20,16]
]


describe("Prueba de la division entera:", function(){
    arrayDivision.forEach(([input1, input2, expected], index)=>{
        it(`División: supuesto nº ${index}: `, function(){
            (ejercicios.Division(input1, input2)).should.be.exactly(expected).and.be.a.Number();
        })
    });
});


describe("Prueba del resto entero:", function(){
    arrayResto.forEach(([input1, input2, expected], index)=>{
        it(`Resto: supuesto nº ${index}: `, function(){
            (ejercicios.Resto(input1, input2)).should.be.exactly(expected).and.be.a.Number();
        });
    })
});