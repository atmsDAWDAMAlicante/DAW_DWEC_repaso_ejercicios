// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_02.js');

it("Función EsDivisible()", function(){
    ejercicios.EsDivisible.should.be.a.Function;
    (ejercicios.EsDivisible(2,2)).should.be.true("Ha fallado la prueba 2%2");
    (ejercicios.EsDivisible(3,2)).should.not.be.true("Ha fallado la prueba de 3%2==false");
});