// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_05.js');

//Función DevuelveElMayor

let arrayDePrueba = [
    [1,2,2],
    [5,4,5],
    [-1,-10,-1]
];


describe("Función DevuelveElMayor", function(){
    arrayDePrueba.forEach(([input1, input2, expected])=>{
        it("Cada elemento del array:",function(){
            ejercicios.DevuelveElMayor.should.be.a.Function;
            should.equal(ejercicios.DevuelveElMayor(input1, input2), expected);
        });
    });
});