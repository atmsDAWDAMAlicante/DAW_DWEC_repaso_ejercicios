// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_04.js');

it ("Función: ValorAbsoluto()", function(){
    ejercicios.ValorAbsoluto.should.be.a.Function;
    should.equal(ejercicios.ValorAbsoluto(-4),4);
    (ejercicios.ValorAbsoluto(-5)).should.be.exactly(5).and.be.a.Number();
});