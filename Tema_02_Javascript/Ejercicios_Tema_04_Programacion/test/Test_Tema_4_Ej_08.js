// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/Prog_Tema_4_Ej_08.js');

let arrayNotasMedias = [
    [5,5,5,5],
    [3,3,3,3],
    [0,0,0,0],
]

let arrayNumerosValidos = [
    [1,30,40,false],
    [50,60,1,false],
    [70,1,-1,false],
    [0,0,0,true],
    [4,6,8,true]
];


describe("Test valores introducidos son válidos", function(){
    arrayNumerosValidos.forEach(([input1,input2,input3,expected], index) => {
        it(`El test nº ${index} con los valores: ${input1},${input2},${input3}`, function(){
            ejercicios.ValidarNumerosIntroducidos.should.be.a.Function;
            ejercicios.ValidarNumerosIntroducidos(input1, input2, input3).should.be.exactly(expected);
        });
    });
});