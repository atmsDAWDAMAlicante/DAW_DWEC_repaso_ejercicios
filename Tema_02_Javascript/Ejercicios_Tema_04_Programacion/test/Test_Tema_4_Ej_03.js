// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_03.js');

it("Función Intercambio()", function(){
    ejercicios.Intercambio.should.be.a.Function;
    should.deepEqual(ejercicios.Intercambio(3,4), [4,3]);
    // equal con un Array falla
    //should.equal(ejercicios.Intercambio(9,100), [100,9]); 
});
