// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_01.js');

it ("Función tradicional: suma1()", function(){
    ejercicios.suma1.should.be.a.Function; // comprobación que suma1() es una función
    should.equal(ejercicios.suma1(2,2), 4, "mensaje en caso de no pasar la prueba");
});

it("Función en una variable: suma2()", function(){
    ejercicios.suma2.should.be.a.Function;
    should.equal(ejercicios.suma2(6,7), 13, "No coincide con el resultado");
});

it("Función flecha: suma3()", function(){
    ejercicios.suma3.should.be.a.Function;
    should.equal(ejercicios.suma3(9,9), 18, "La suma no está bien hecha");
});